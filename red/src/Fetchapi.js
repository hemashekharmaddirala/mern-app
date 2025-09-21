import React,{useEffect,useState } from 'react'
const Fetchapi = () => {
   const[data,setData]=useState([])
 
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
    .catch(error => console.error(error));
}, []);
  return (
    <div>
  
      {
       data.map(item=><li key={item.id}>{item.title}</li>)
      }
    </div>
  )
}

export default Fetchapi