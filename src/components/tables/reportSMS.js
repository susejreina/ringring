import React, {Component} from 'react';
import ReactTable from "react-table";
//import { makeData } from "./Utils";
import matchSorter from 'match-sorter';

class ReportsSMS extends Component {

  render() {
    const data = [{
      date: "2018-10-14",
      recipientNumber: "112233445566",
      message: "text example",
      status: "S"
    }, {
      date: "2018-10-12",
      recipientNumber: "1111222223333",
      message: "text message",
      status: "P"
    }, {
      date: "2018-10-10",
      recipientNumber: "222444666888",
      message: "example",
      status: "F"
    }, {
      date: "2018-10-11",
      recipientNumber: "112233445566",
      message: "react table",
      status: "F"
    }, {
      date: "2018-10-12",
      recipientNumber: "222444666888",
      message: "table test",
      status: "P"
    }, {
      date: "2018-10-11",
      recipientNumber: "222444666888",
      message: "prefer chocolate",
      status: "F"
    }, {
      date: "2018-10-12",
      recipientNumber: "112233445566",
      message: "princess",
      status: "S"
    }];

    return (
      <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              columns: [
                {
                  Header: "#",
                  accessor: "nro",
                  maxWidth: 100,
                  filterable: false,
                  Cell: (row) => {
                    return <div>{row.index+1}</div>;
                  }
                },
                {
                  Header: "Date",
                  accessor: "date",
                  hintText: "Ends with",
                  filterMethod: (filter, row) =>
                    row[filter.id].endsWith(filter.value)
                },
                {
                  Header: "Recipient number",
                  id: "recipientNumber",
                  accessor: d => d.recipientNumber,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["recipientNumber"] }),
                  filterAll: true
                },
                {
                  Header: "Message",
                  id: "message",
                  accessor: d => d.message,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["message"] }),
                  filterAll: true
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Status SMS",
                  accessor: "status",
                  id: "status",
                  Cell: ({ value }) => (value >= 'S' ? "Send" : (value >= 'P' ? "Pending" : (value >= 'F' ? "Failed" : ""))),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    else if (filter.value === "S") {
                      return row[filter.id] === "S";
                    }
                    else if (filter.value === "P") {
                      return row[filter.id] === "P";
                    }
                    else
                      return row[filter.id] === "F";
                  },
                  Filter: ({ filter, onChange }) =>
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="S">Send</option>
                      <option value="P">Pending</option>
                      <option value="F">Failed</option>
                    </select>
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    );
  }
}

export default ReportsSMS;
