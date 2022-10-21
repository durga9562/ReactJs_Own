
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'





function App() {
  const [post,setPost] = useState([]);
  
 



  useEffect(()=>{
    axios.get("http://192.168.3.113:8080/QuestyTasks/queryOptFull.jsp")
    .then(res=>{
      console.log(res)
      setPost(res.data)
    })
    // .catch(err)
  })


  return (
    <div className='App'>
      <div className='inputbox'>
      Search <input type="text"   onChange={(e) => searchItems(e.target.value)} placeholder='Search.....'/>
     
      </div>
<table className='table1' border="1 solid" style={{float:'center'}}>
        <tbody style={{border:"1 solid 2px violet"}}>
          <tr>
            <th>ID</th>
            <th>EName</th>
            <th>Key</th>
           
          </tr>
          {
            post.map((item,i)=>
            <tr key={i}>
        <td style={{border:"1 solid 2px violet"}}>{item.id}</td>
              <td>{item.ename}</td>
              <td>{item.key}</td>
            
            </tr>
            )
          }
        </tbody>
      </table>
       
    </div>
  );
}
export default App;
