// ** React Imports
import { useState } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, getColumnConfig } from './vendorTableConfig'

// ** Third Party Components
import DataTable from 'react-data-table-component'
import { useCoreData } from '../../../../utility/context/DataContext';


const VendorTable = ({ editVendor }) => {
  const { vendorList } = useCoreData();
  return (
    <>
      <div className='react-dataTable'>
        <DataTable
          noHeader
          pagination
          data={vendorList}
          expandableRows
          columns={getColumnConfig({ editVendor })}
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

export default VendorTable
