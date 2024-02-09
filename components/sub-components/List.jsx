import React from 'react'

function List({ number, name, ns_number, status }) {
    return (
        <tr className='text-center'>
            <th>{number}</th>
            <td>{name}</td>
            <td>{ns_number}</td>
            <td>{status}</td>
        </tr>
    )
}

export default List