import React, {Component} from 'react';
import ReactTable from "react-table";
import { makeData } from "./Utils";
import matchSorter from 'match-sorter';

class ReportsSMS extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  render() {
    const { data } = this.state;
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
                  Header: "date",
                  accessor: "date",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
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
                  accessor: "state",
                  id: "sts",
                  Cell: ({ value }) => (value >= 'S' ? "Send" : (value >= 'P' ? "Pending" : (value >= 'F' ? "Failed" : ""))),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
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
