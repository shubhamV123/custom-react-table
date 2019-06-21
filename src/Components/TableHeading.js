import React from 'react';

const TABLE_HEADINGS = ["first_name", "last_name", "company_name", "city", "state", "zip", "email", "web", "age"];

const TableHeading = ({ handleColumnClick, startIndex, lastIndex, activeColumn }) => {
    let { field, type } = activeColumn;
    return (
        <thead>
            <tr>
                {TABLE_HEADINGS.map((heading => {
                    return (<th className={field === heading ? "active" : ""}
                        onClick={() => handleColumnClick(heading, startIndex, lastIndex)}>
                        {heading} {field === heading ?
                            <i class={`${type === "asc" ? "fa fa-arrow-up" : "fa fa-arrow-down"}`}></i> : null}
                    </th>)
                }))}
            </tr>
        </thead>
    )
}

export default TableHeading
