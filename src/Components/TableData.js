import React from 'react'
import { Table, Container } from 'reactstrap';
import TableRows from './TableRows';
const TableData = ({ tableData, tableHeading }) => {
    return (
        <Table>
            {tableHeading}
            <tbody>
                {tableData.length === 0 ? <div>No result found</div> : null}
                <TableRows tableData={tableData} />
            </tbody>

        </Table>
    )
}

export default TableData
