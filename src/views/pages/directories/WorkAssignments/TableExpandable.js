// ** React Imports
import { useState } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

import DataTable from 'react-data-table-component'

const DataTableWithButtons = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)

  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={10}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1'}
    />
  )

  return (
    <>
  
      <div className='react-dataTable'>
        <DataTable
          noHeader
          pagination
          data={data}
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
