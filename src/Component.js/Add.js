import React, { useEffect,useState } from 'react'
import './Add.css'

const Add = () => {
  let [data,setData] = useState([])
  let [title,setTitle] = useState("")
  let [userId,setUserId] = useState("")
  let [id,setId] = useState(null)
  let [show,setShow]= useState(true)
  useEffect(()=>{
   getList()
  },[])
  // console.log(data)

  function getList () {
  fetch('http://localhost:3000/album').then((res)=>{
    res.json().then((rep)=>{
      // console.log('res',rep)
      setData(rep)
      setTitle(rep[0].title)
      setUserId(rep[0].userId)
      setId(rep[0].id)
    })
  })
}
  

  function deleteUser(id){
    fetch(`http://localhost:3000/album/${id}`,{
      method : 'DELETE'
    }).then((res)=>{
      res.json().then((result)=>{
        // console.log(result);
        getList()
      })
    })
  }

  function selectUser(id) {
    // console.log(data[id-1])
    let fill = data[id-1]
    setTitle(fill.title)
    setUserId(fill.userId)
    setId(fill.id)
  }
  function updateUser() {
    let up = {title,userId,id}
    fetch(`http://localhost:3000/album/${id}`,{
      method : 'PUT',
      headers : {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(up)
    }).then((res)=>{
      res.json().then((result)=>{
        // console.log(result);
        getList()
      })
    })
  }

  return (
    <div className='d-flex justify-content-center' id='back'>
   <table className='' >
   
    {data.map((item)=>
    <tr>

   <div className="card  "  id='best' >
  
   <div  className="card-body ">
    <h3 className="card-title"> {item.id}  </h3>
    <p className="card-text"> {item.title} </p>
    <h5> {item.userId} </h5>
   <td> <button  className='btn btn-danger' onClick={()=>deleteUser(item.id)}> Delete </button> </td>
    <td><button className='btn btn-success' onDoubleClick={()=>selectUser(item.id)} onClick={()=>setShow(!show)}  >Update </button></td>

    {  show ?
   <div>
   <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> <br /> <br />
        <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)}  /> <br /> <br />
        <button onClick={updateUser} className='btn btn-success '>Update User </button>
        </div>  : null }
  </div>
 
  </div>

  
  
      
      
    </tr>
    
    )}
     {/* {  show ?
   <div>
   <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> <br /> <br />
        <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)}  /> <br /> <br />
        <button onClick={updateUser} className='btn btn-success '>Update User </button>
        </div>  : null } */}
   </table>
   {/* {  show ? */}
  {/* //  <div>
  //  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> <br /> <br />
  //       <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)}  /> <br /> <br />
  //       <button onClick={updateUser} className='btn btn-success '>Update User </button>
  //       </div>  : null } */}
    </div>
  )
}

export default Add