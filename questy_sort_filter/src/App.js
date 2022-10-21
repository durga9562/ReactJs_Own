import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios  from 'axios';
import { Table } from './Table';
//import post from "./posts";

function App() {

  const [post,setPost] = useState("");
  
 const[query,setQuery] = useState("")

  useEffect(()=>{
    axios.get("http://192.168.3.113:8080/QuestyTasks/queryOptFull.jsp")
    .then(res=>{
      console.log(res)
      setPost(res.data)
    })
    // .catch(err)
  })


  return (
    <div className="App">
      <input type="text" placeholder='Search..' className='search'
          onChange={e=>setQuery(e.target.value)}  />
          <Table data={post}/>
      <ul className='list'>
{post.filter(posts=>posts.ename.toLowerCase().includes(query)).map((posts) => (
  <li key={posts.id} className='listItem'>{posts.ename}</li>
))}

      </ul>
      
    </div>
  );
}

export default App;
