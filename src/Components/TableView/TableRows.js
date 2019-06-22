import React from 'react'
import TableRow from './TableRow';
const TableRows = ({ tableData }) => {
    return tableData.map(data => <TableRow data={data} key={data.id + " data"} />)
}

export default TableRows
