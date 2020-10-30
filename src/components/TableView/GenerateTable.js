import React from 'react'
import { Table } from 'reactstrap';
import TableRows from './TableRows';
const GenerateTable = ({ tableData, tableHeading }) => {
    return (
        <Table hover>
            {tableHeading}
            <tbody>
                {tableData.length === 0 ? <tr><td>{"No result found"}</td></tr> : null}

                <TableRows tableData={tableData} />
            </tbody>

        </Table>
    )
}

export default GenerateTable
