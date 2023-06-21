import React, { useState} from "react";

const Post = () => {
    const [title,setTitle] = useState("")
    const [userId,setUserId] = useState("")
    const [show ,setShow] = useState(false);
    function saveUser (){
        console.log({title,userId})
        let gallery = {title,userId}

         fetch('http://localhost:3000/album',{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(gallery)
        }).then((resp)=>{
            // console.log('resp',resp)
            resp.json((res)=>{
                console.log('resp',res)
            })
        })
    }
        


  return (
    <div >
        {  show ?
        <div>
      <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} name="title"/> <br /> <br />
      <input type="number" value={userId} onChange={(e)=>setUserId(e.target.value)} name="userId" /> <br /> <br /> </div> : null }
      <button onClickCapture={saveUser} onClick={()=>setShow(!show)} className="btn btn-primary"> Add </button>

    </div>
  );
  }
export default Post;
  