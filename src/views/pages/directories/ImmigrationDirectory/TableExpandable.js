// ** React Imports
import { useEffect, useState } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from 'reactstrap'
import { useCoreData } from '../../../../utility/context/DataContext'
import getReminingDays from '../../../../utility/getReminingDays'

const DataTableWithButtons = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0);
  const { immigrationList, getEmployeeById } = useCoreData();
  const [immigrationData, setImmigrationData] = useState([]);
  useEffect(() => {
    const entries = immigrationList.map((entry) => {
      const employee = getEmployeeById(entry.employeeId);
      const reminingDays = getReminingDays(entry.visaValidity)
      const status = (() => {
        let statusText = entry.visaValidity
        if (reminingDays <= 7 && reminingDays > -7 ) {
          statusText = [String(Math.abs(reminingDays)), 'Days', (reminingDays > 0 ? 'left' : 'ago')].join(' ')
        }
        return statusText
      })();
      return {
        ...entry,
        firstName: employee.firstName,
        email: employee.email,
        phone: employee.phone,
        status,
      }
    })
    setImmigrationData(entries);
  }, [immigrationList])
  return (
    <>

      <div className='react-dataTable'>
        <DataTable
          noHeader
          pagination
          data={immigrationData}
          expandableRows
          columns={columns}
          expandOnRowClicked
          className='react-dataTable'


          paginationDefaultPage={currentPage + 1}
          expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </>
  )
}

export default DataTableWithButtons
