import { Edit } from 'react-feather'

export const data = [
  {
    "entryDate": "3/23/2022",
    "EmployeeID": "110010",
    "lastname": "Ashok",
    "firstname": "ashok",
    "status": "Active",
    "vendorName": "PROCROP",
    "ClientName": "wipro",
    "position": "software developer",
    "wfowfh": "WFH",
    "startdate": "3/23/2022",
    "enddate": "3/23/2022",
    "projectstatus": "Active",
    "payterms": "Monthly",
    "invoiceterms": "weekly",
    "timesheetstovendors": "weekly",
    "jobtype": "Primary",
  },
  {
    "entryDate": "3/23/2022",
    "EmployeeID": "110010",
    "lastname": "Ashok",
    "firstname": "ashok",
    "status": "Active",
    "vendorName": "PROCROP",
    "ClientName": "wipro",
    "position": "software developer",
    "wowfh": "WFH",
    "startdate": "3/23/2022",
    "enddate": "3/23/2022",
    "projectstatus": "Active",
    "payterms": "Monthly",
    "invoiceterms": "weekly",
    "timesheetstovendors": "weekly",
    "jobtype": "Primary",
  },  {
    "entryDate": "3/23/2022",
    "EmployeeID": "110010",
    "lastname": "Ashok",
    "firstname": "ashok",
    "status": "Active",
    "vendorName": "PROCROP",
    "ClientName": "wipro",
    "position": "software developer",
    "wfowfh": "WFH",
    "startdate": "3/23/2022",
    "enddate": "3/23/2022",
    "projectstatus": "Active",
    "payterms": "Monthly",
    "invoiceterms": "weekly",
    "timesheetstovendors": "weekly",
    "jobtype": "Primary",
  },  {
    "entryDate": "3/23/2022",
    "EmployeeID": "110010",
    "lastname": "Ashok",
    "firstname": "ashok",
    "status": "Active",
    "vendorName": "PROCROP",
    "ClientName": "wipro",
    "position": "software developer",
    "wfowfh": "WFH",
    "startdate": "3/23/2022",
    "enddate": "3/23/2022",
    "projectstatus": "Active",
    "payterms": "Monthly",
    "invoiceterms": "weekly",
    "timesheetstovendors": "weekly",
    "jobtype": "Primary",
  },

]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p className='m-0'>
        <span className='fw-bold'>Vendor Name</span> {data.vendorName}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Position</span> {data.position}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>WFO / WFH</span> {data.wfowfh}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Start Date</span> {data.startdate}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>End Date</span> {data.enddate}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Project Status</span> {data.projectstatus}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Pay Terms</span> {data.payterms}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Invoice Terms</span> {data.invoiceterms}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Time Sheets To Vendors</span> {data.timesheetstovendors}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Job Type</span> {data.jobtype}
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
    name: 'Employeee ID',
    sortable: true,
    minWidth: '50px',
    selector: row => row.EmployeeID
  },
  {
    name: 'Last Name',
    sortable: true,
    minWidth: '50px',
    selector: row => row.lastname
  },
  {
    name: 'First Name',
    sortable: true,
    minWidth: '90px',
    selector: row => row.firstname
  },
  {
    name: 'Client Name',
    sortable: true,
    minWidth: '150px',
    selector: row => row.ClientName
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '150px',
    selector: row => row.status
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
