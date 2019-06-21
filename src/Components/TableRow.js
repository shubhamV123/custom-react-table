import React from 'react'

const TableRow = ({ data }) => {
    let { id, first_name, last_name, company_name, city, state, zip, email, web, age } = data;
    return (
        <tr key={id}>

            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{company_name}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{zip}</td>
            <td>{email}</td>
            <td>{web}</td>
            <td>{age}</td>
        </tr>
    )
}

export default TableRow
