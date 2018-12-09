import React, {Component} from 'react';
import ReactTable from "react-table";
//import { makeData } from "./Utils";
import matchSorter from 'match-sorter';

class ReportsSMS extends Component {

  render() {
    const data = [{
      name: "Jhon",
      last_name: "White",
      company: "Client test 1, C.A.",
      status: "A"
    }, {
      name: "Oliver",
      last_name: "Smith	",
      company: "Client test 1, C.A.",
      status: "A"
    }, {
      name: "Jack",
      last_name: "Taylor",
      company: "Client test 2, C.A.",
      status: "I"
    }, {
      name: "William",
      last_name: "O'Brien",
      company: "Client test 1, C.A.",
      status: "A"
    }, {
      name: "Ethan",
      last_name: "Davis",
      company: "Client test 2, C.A.",
      status: "I"
    }, {
      name: "George",
      last_name: "Garcia",
      company: "Client test 1, C.A.",
      status: "I"
    }, {
      name: "James",
      last_name: "Brown",
      company: "Client test 2, C.A.",
      status: "A"
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
                  Header: "Name",
                  id: "name",
                  accessor: d => d.name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                  filterAll: true
                },
                {
                  Header: "Last name",
                  id: "last_name",
                  accessor: d => d.last_name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["last_name"] }),
                  filterAll: true
                },
                {
                  Header: "Company name",
                  id: "company",
                  accessor: d => d.company,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["company"] }),
                  filterAll: true
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Status",
                  accessor: "status",
                  id: "status",
                  Cell: ({ value }) => (value >= 'A' ? "Active" : "Inactive"),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    else if (filter.value === "A") {
                      return row[filter.id] === "A";
                    }
                    else
                      return row[filter.id] === "I";
                  },
                  Filter: ({ filter, onChange }) =>
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="A">Active</option>
                      <option value="I">Inactive</option>
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
