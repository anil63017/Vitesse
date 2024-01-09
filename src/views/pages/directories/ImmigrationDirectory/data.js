import { Edit } from 'react-feather'

export const data = [
  {
    "EmployeeID": "110010",
    "receipt number": "3/23/2022",
    "Validitystatus": "3/23/2022",
    "lastname": "Ashok",
    "firstname": "ashok",
    "phone": "Active",
    "email": "PROCROP",
    "vendorName": "wipro",
    "Clientname": "software developer",
    "clientinlca": "WFH",
    "payrolllocation": "3/23/2022",
    "firstlca": "3/23/2022",
    "currentlocation": "Active",
    "i94number": "Monthly",
    "i94expiredate": "weekly",
    "passportnumber": "weekly",
    "passportexpire": "Primary",
    "googledrive": "link",
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p className='m-0'>
        <span className='fw-bold'>Vendor Name</span> {data.vendorName}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Client Name</span> {data.position}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Client in LCA</span> {data.wfowfh}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Current Location</span> {data.startdate}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>I94 Number</span> {data.enddate}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>I94 Expire Date</span> {data.projectstatus}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Passport Number</span> {data.payterms}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Passport Expiry Date</span> {data.invoiceterms}
      </p>
      <p className='m-0'>
        <span className='fw-bold'><a href='https://google.com'>Google Drive Link</a></span> {data.timesheetstovendors}
      </p>
     
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Employeee ID',
    sortable: true,
    minWidth: '50px',
    selector: row => row.employeeId
  },
  {
    name: 'Receipt Number',
    sortable: true,
    minWidth: '50px',
    selector: row => row.recieptId
  },
  {
    name: 'Validity Status',
    sortable: true,
    minWidth: '50px',
    selector: row => row.status
  },
  {
    name: 'First Name',
    sortable: true,
    minWidth: '90px',
    selector: row => row.firstName
  },
  {
    name: 'Phone',
    sortable: true,
    minWidth: '150px',
    selector: row => row.phone
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '150px',
    selector: row => row.email
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