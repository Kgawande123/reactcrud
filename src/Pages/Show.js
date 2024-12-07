import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {
    const [client,setclient] = useState([])
    const [input,setInput]=useState('')

    async function getData(){
        const response = await axios.get('http://localhost:8000/client')
        const result = response.data
        setclient(result)
    }
    useEffect(()=>{
        getData()
    },[])

    const searchName = client.filter((x) => {
  return (
    typeof x.role === "string" &&
    typeof input === "string" &&
    x.role.toLowerCase().includes(input.toLowerCase())
  );
    })
  return (
    <div>
        <h2 className='text-center mb-3'>Client Data</h2>
        <input
        type='text'
        className='form-control mb-5 mt-3'
        placeholder='Search the Role'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
    <table className='table'>
        
        <thead>
         <tr>
            <th>id</th>
            <th>Name</th>
            <th>Company_name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Role</th>
            <th>Action</th>

        </tr>
        </thead>
        <tbody>
            {
                searchName.map((s,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{s.name}</td>
                            <td>{s.company}</td>
                            <td>{s.email}</td>
                            <td>{s.contact}</td>
                            <td>{s.role}</td>
                            <td>
                                <NavLink to={`/Update/${s.id}`}><button className='btn btn-warning me-2' >Update</button></NavLink>
                                <NavLink to={`/Delete/${s.id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                            </td>

                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  )
}
  


export default Show












