import React from 'react'

export const Table = (data) => {
  return (
   <table>
    <tbody>
        <tr>
            <th>ID
            </th>
            <th>Name</th>
            <th>Key</th>
        </tr>
        {data.map((item) =>(

       
        <tr key={item.id}>
         
            <td>{item.ename}</td>
            <td>{item.key}</td>
        </tr>
         ))}
    </tbody>
   </table>
  )
}
