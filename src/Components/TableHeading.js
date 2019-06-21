import React from 'react'

const TableHeading = ({ handleColumnClick }) => {
    return (
        <thead>
            <tr>
                <th onClick={() => handleColumnClick('fname')}>First Name</th>
                <th onClick={() => handleColumnClick('lname')}>Last Name</th>
                <th onClick={() => handleColumnClick('cname')}>Company Name</th>
                <th onClick={() => handleColumnClick('city')}>City</th>
                <th onClick={() => handleColumnClick('state')}>State</th>
                <th onClick={() => handleColumnClick('zip')}>Zip</th>
                <th onClick={() => handleColumnClick('email')}>Email</th>
                <th onClick={() => handleColumnClick('web')}>Web</th>
                <th onClick={() => handleColumnClick('age')}>age</th>
            </tr>
        </thead>
    )
}

export default TableHeading
