import React, { useState } from 'react'

import data from "./mock-data.json";
import Table from './Table';

function Form() {
const [tableData, setTableData] = useState(data);

const tableRows = tableData.map((info) => {
    return(
        <tr>
            <td>{info.id}</td>
            <td>{info.fullName}</td>
            <td>{info.address}</td>
            <td>{info.phoneNumber}</td>
            <td>{info.email}</td>
        </tr>
    );
});

const addRows = (listData) => {
    const totalUsers = tableData.length;
    listData.id = totalUsers + 1;
    const updatedTableData = [...tableData];
    updatedTableData.push(listData);
    setTableData(updatedTableData);
}

  return (
    <div>
 <table className="table table-stripped">
        <thead>
       <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>address</th>
            <th>PhoneNumber</th>
            <th>Email</th>
          </tr>
    

        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      {/* <StudentForm func={addRows} /> */}
      <Table func={addRows}/>
    </div>
  )
}

export default Form