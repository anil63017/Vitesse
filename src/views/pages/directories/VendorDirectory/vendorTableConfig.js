import { Edit } from "react-feather";

export const data = [
  {
    entryDate: "3/23/2022",
    ClientName: "Client 1",
    contactPerson: "Ashok",
    contactEmail: "ashok.vemparala123@gmail.com",
    phone: "(603) 858-9501",
    state: "AR",
    address: "NJ 140A REJAB AH,USA",
    paymentTerms: "weekly",
    invoiceTerms: "30days",
    InvoiceMail: "ashok.vemparala123@gmail.com",
    timesheetstovendor: "weekly",
  },
  {
    entryDate: "3/23/2022",
    ClientName: "Client 1",
    contactPerson: "Ashok",
    contactEmail: "ashok.vemparala123@gmail.com",
    phone: "(603) 858-9501",
    state: "AR",
    address: "NJ 140A REJAB AH,USA",
    paymentTerms: "weekly",
    invoiceTerms: "30days",
    InvoiceMail: "ashok.vemparala123@gmail.com",
    timesheetstovendor: "weekly",
  },
  {
    entryDate: "3/23/2022",
    ClientName: "Client 1",
    contactPerson: "Ashok",
    contactEmail: "ashok.vemparala123@gmail.com",
    phone: "(603) 858-9501",
    state: "AR",
    address: "NJ 140A REJAB AH,USA",
    paymentTerms: "weekly",
    invoiceTerms: "30days",
    InvoiceMail: "ashok.vemparala123@gmail.com",
    timesheetstovendor: "weekly",
  },
  {
    entryDate: "3/23/2022",
    ClientName: "Client 1",
    contactPerson: "Ashok",
    contactEmail: "ashok.vemparala123@gmail.com",
    phone: "(603) 858-9501",
    state: "AR",
    address: "NJ 140A REJAB AH,USA",
    paymentTerms: "weekly",
    invoiceTerms: "30days",
    InvoiceMail: "ashok.vemparala123@gmail.com",
    timesheetstovendor: "weekly",
  },
  {
    entryDate: "3/23/2022",
    ClientName: "Client 1",
    contactPerson: "Ashok",
    contactEmail: "ashok.vemparala123@gmail.com",
    phone: "(603) 858-9501",
    state: "AR",
    address: "NJ 140A REJAB AH,USA",
    paymentTerms: "weekly",
    invoiceTerms: "30days",
    InvoiceMail: "ashok.vemparala123@gmail.com",
    timesheetstovendor: "weekly",
  },
];

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className="expandable-content p-2">
      <p className="m-0">
        <span className="fw-bold" >Invoice Mail : </span> {data.invoiceEmail}
      </p>
      <p className="m-0">
        <span className="fw-bold">Payment Terms : </span> {data.pmtTerms}
      </p>
      <p className="m-0">
        <span className="fw-bold">Invoice Terms : </span> {data.invoiceTerms}
      </p>

      <p className="m-0">
        <span className="fw-bold">TimeSheets to Vendor : </span>{" "}
        {data.timeSheets}
      </p>
    </div>
  );
};

// ** Table Common Column
export const getColumnConfig = ({ editVendor }) => [
  {
    name: "Entry Date",
    sortable: true,
    minWidth: "50px",
    selector: (row) => row.entryDate,
  },
  {
    name: "Vendor Name",
    sortable: true,
    minWidth: "50px",
    selector: (row) => row.name,
  },
  {
    name: "Contact Person",
    sortable: true,
    minWidth: "50px",
    selector: (row) => row.pocName,
  },
  {
    name: "Contact Email",
    sortable: true,
    minWidth: "90px",
    selector: (row) => row.pocEmail,
  },
  {
    name: "Phone",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.pocContact,
  },
  {
    name: "State",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.state,
  },
  {
    name: "Actions",
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className="d-flex justify-content-left align-items-center">
          <Edit size={15} onClick={() => editVendor(row)} />
        </div>
      );
    },
  },
];
export default ExpandableTable;
