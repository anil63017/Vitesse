
// ** Table columns & Expandable Data
import ExpandableTable, { getColumnConfig } from './employeeTableConfig'

// ** Third Party Components
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { useCoreData } from '../../../../utility/context/DataContext'

const EmployeeTable = ({ editEmployee }) => {
  // ** State
  const { employeeList } = useCoreData();

  return (
    <>
      <div className='react-dataTable'>
        <DataTable
          noHeader
          pagination
          data={employeeList}
          expandableRows
          columns={getColumnConfig({ editEmployee })}
          expandOnRowClicked
          className='react-dataTable'
          paginationDefaultPage={1}
          expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </>
  )
}

export default EmployeeTable;
