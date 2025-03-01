import TableBuilder from "../../../../Components/TableBuilder";

const tableheaders = [
  "Credit Score",
  "Credit Tier",
  "First 36 Months",
  "37-48 Months",
  "49-60 Months",
  "61-72 Months",
];

const tableRows = [
  ["760+", "A+", "3.00%", "4.00%", "4.00%", "5.00%"],
  ["700-759", "A", "5.00%", "6.00%", "7.00%", "8.00%"],
  ["650-699", "B", "6.00%", "7.00%", "8.00%", "9.00%"],
  ["600-649", "C", "7.00%", "8.00%", "9.00%", "10,00%"],
  ["550-599", "D", "8.00%", "9.00%", "10,00%", "11.00%"],
];

export default function RefianceUsed(props) {
  return (
    <TableBuilder
      tableHeaders={tableheaders}
      tableRows={tableRows}
      headerStyle={props.headerStyle}
      cellStyle={props.cellStyle}
    />
  );
}
