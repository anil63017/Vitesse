import { Edit } from 'react-feather'

export const data = [
  {
    "entryDate": "3/23/2022",
    "ClientName": "Client 1",
    "contactPerson": "Ashok",
    "contactEmail": "ashok.vemparala123@gmail.com",
    "phone": "(603) 858-9501",
    "state": "AR",
    "address": "NJ 140A REJAB AH,USA",
  },
  {
    "entryDate": "3/23/2022",
    "ClientName": "Client 1",
    "contactPerson": "Ashok",
    "contactEmail": "ashok.vemparala123@gmail.com",
    "phone": "(603) 858-9501",
    "state": "AR",
    "address": "NJ 140A REJAB AH,USA",
  },
  {
    "entryDate": "3/23/2022",
    "ClientName": "Client 1",
    "contactPerson": "Ashok",
    "contactEmail": "ashok.vemparala123@gmail.com",
    "phone": "(603) 858-9501",
    "state": "AR",
    "address": "NJ 140A REJAB AH,USA",
  },
  {
    "entryDate": "3/23/2022",
    "ClientName": "Client 1",
    "contactPerson": "Ashok",
    "contactEmail": "ashok.vemparala123@gmail.com",
    "phone": "(603) 858-9501",
    "state": "AR",
    "address": "NJ 140A REJAB AH,USA",
  },
  {
    "entryDate": "3/23/2022",
    "ClientName": "Client 1",
    "contactPerson": "Ashok",
    "contactEmail": "ashok.vemparala123@gmail.com",
    "phone": "(603) 858-9501",
    "state": "AR",
    "address": "NJ 140A REJAB AH,USA",
  },

]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p className='m-0'>
        <span className='fw-bold'>Address</span> {data.address}
      </p>
  
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Entry Date',
    sortable: true,
    minWidth: '50px',
    selector: row => row.entryDate
  },
  {
    name: 'Client Name',
    sortable: true,
    minWidth: '50px',
    selector: row => row.ClientName
  },
  {
    name: 'Contact Person',
    sortable: true,
    minWidth: '50px',
    selector: row => row.contactPerson
  },
  {
    name: 'Contact Email',
    sortable: true,
    minWidth: '90px',
    selector: row => row.contactEmail
  },
  {
    name: 'Phone',
    sortable: true,
    minWidth: '150px',
    selector: row => row.phone
  },
  {
    name: 'State',
    sortable: true,
    minWidth: '150px',
    selector: row => row.state
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
           
          <Edit size={15} />
        </div>
      )
    }
  }
]

export default ExpandableTable
