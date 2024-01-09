// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'ID',
    reorder: true,
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    reorder: true,
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    reorder: true,
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    reorder: true,
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    reorder: true,
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    reorder: true,
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      {data.entryDate && <p className='m-0'>
        <span className='fw-bold'>Entry Date</span> {data.entryDate}
      </p>}
      {data.email && <p className='m-0'>
        <span className='fw-bold'>Email</span> {data.email}
      </p>}
      {data.address && <p className='m-0'>
        <span className='fw-bold'>Address</span> {data.address}
      </p>}
      {data.street && <p className='m-0'>
        <span className='fw-bold'>Street</span> {data.street}
      </p>}
      {data.state && <p className='m-0'>
        <span className='fw-bold'>State</span> {data.state}
      </p>}
      {data.city && <p className='m-0'>
        <span className='fw-bold'>City</span> {data.city}
      </p>}
      {data.zip && <p className='m-0'>
        <span className='fw-bold'>Zip</span> {data.zip}
      </p>}
    </div>
  )
}

// ** Table Common Column
export const getColumnConfig = ({ editEmployee }) => ([
  {
    name: 'Emp ID',
    sortable: true,
    minWidth: '50px',
    selector: row => row.employeeId
  },

  {
    name: 'Status',
    sortable: true,
    minWidth: '90px',
    selector: row => row.status
  },
  {
    name: 'Last Name',
    sortable: true,
    minWidth: '150px',
    selector: row => row.lastName
  },
  {
    name: 'First Name',
    sortable: true,
    minWidth: '150px',
    selector: row => row.firstName
  },
  {
    name: 'Phone',
    sortable: true,
    minWidth: '50px',
    selector: row => row.phone
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <Edit size={15} onClick={() => editEmployee(row)} />
        </div>
      )
    }
  }
])


export default ExpandableTable
