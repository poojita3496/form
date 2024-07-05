import React from "react";
import { useState } from "react";
function FormDemo(){
    let [username,setUsername]=useState("")
    let [email,setEmail]=useState("")
    function handleUsername(event){
        setUsername(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(username)
        console.log(email)
    }
    return(
        <div>
            <h1 className="display-1 text-warning">Form Demo</h1>
            <form className="w-40 mx-auto mt-5">
                <div className="ob-3">
                    <input type="text" name="username" id="uname" placeholder="UserName" onChange={handleUsername}/>
                </div>
                <div className="ob-3">
                    <input type="email" name="email" id="email" placeholder="email" onChange={handleEmail}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}
export default FormDemo;