import React from 'react'

const TableHeading = ({ handleColumnClick, startIndex, lastIndex }) => {
    console.log(startIndex, lastIndex)
    return (
        <thead>
            <tr>
                <th onClick={() => handleColumnClick('first_name', startIndex, lastIndex)}>First Name</th>
                <th onClick={() => handleColumnClick('last_name', startIndex, lastIndex)}>Last Name</th>
                <th onClick={() => handleColumnClick('company_name', startIndex, lastIndex)}>Company Name</th>
                <th onClick={() => handleColumnClick('city', startIndex, lastIndex)}>City</th>
                <th onClick={() => handleColumnClick('state', startIndex, lastIndex)}>State</th>
                <th onClick={() => handleColumnClick('zip', startIndex, lastIndex)}>Zip</th>
                <th onClick={() => handleColumnClick('email', startIndex, lastIndex)}>Email</th>
                <th onClick={() => handleColumnClick('web', startIndex, lastIndex)}>Web</th>
                <th onClick={() => handleColumnClick('age', startIndex, lastIndex)}>age</th>
            </tr>
        </thead>
    )
}

export default TableHeading
