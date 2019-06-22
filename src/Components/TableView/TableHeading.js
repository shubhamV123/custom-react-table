import React from 'react';
import { formatKeyValues } from '../../formatter'

const TABLE_HEADINGS = ["first_name", "last_name", "company_name", "city", "state", "zip", "email", "web", "age"];

const TableHeading = ({ handleColumnClick, startIndex, lastIndex, activeColumn }) => {
    let { field, type } = activeColumn;
    return (
        <thead>
            <tr>
                {TABLE_HEADINGS.map((heading => {
                    return (<th key={heading} className={`${field === heading ? "active" : ""} cursor-pointer`}
                        onClick={() => handleColumnClick(heading, startIndex, lastIndex)}>
                        {formatKeyValues(heading)} {field === heading ?
                            <i className={`${type === "asc" ? "fa fa-arrow-up" : "fa fa-arrow-down"}`}></i> : null}
                    </th>)
                }))}
            </tr>
        </thead>
    )
}

export default TableHeading
