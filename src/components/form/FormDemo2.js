import { useState } from "react";
import { useForm } from "react-hook-form";
function FormDemo2(){
    
    let [users,setUsers]=useState([])



    let {register,handleSubmit,formState:{errors}}=useForm()
    function handleformsubmit(userObj){
        setUsers([...users,userObj])
    }
    function deleteUser(index){
        let copyUser=[...users]
        copyUser.splice(index,1)
        setUsers(copyUser)
    }
    return(
        <div className="row">
        <div className="col-sm-4">  
            <h1 className="display-4 text-warning">Form</h1>
                <form className="w-100 mx-auto mt-5 border p-4 bg-light" onSubmit={handleSubmit(handleformsubmit)}>
                    <div className="mb-3">
                        <input type="text" id="uname" placeholder="UserName" {...register('username',{required:true,minLength:4,maxLength:6})}/>
                    </div>
                    {errors.username?.type==='required' && <p className="text-danger">Username is required</p>}
                    {errors.username?.type==='minLength' && <p className="text-danger">min length is 4</p>}
                    {errors.username?.type==='maxLength' && <p className="text-danger">max length is 6</p>}
                    <div className="mb-3">
                        <input type="email" id="email" placeholder="email" {...register('email',{required:true})}/>
                    </div>
                    {errors.email?.type==='required' && <p className="text-danger">email is required</p>}
                    <div className="mb-3">
                        <select id='state' className="form-select" {...register('state',{required:true})}>
                            <option value=''>choose a value</option>
                            <option value='telangana'>Telangana</option>
                            <option value='Andra'>Andra Pradesh</option>
                        </select>    
                    </div>  
                    {errors.state?.type==='required' && <p className='text-danger'>Select a value</p>}  
                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        <div className="col-sm-8">
            <h1 className="display-4 text-center text-info mt-3">List of registered users</h1>
            <table className="table text-center table-warning">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>email</th>
                        <th>state</th>
                        <th>operations</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        users.map((user,index)=><tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.state}</td>
                            <td>
                                <button className="btn btn-danger" onClick={deleteUser}>X</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div> 
        </div>
    )
}
export default FormDemo2;