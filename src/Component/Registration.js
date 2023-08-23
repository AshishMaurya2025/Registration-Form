import React from 'react'
import { IoTrashBin } from "react-icons/io5";
import { useState } from 'react'

function Registration() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("")
    const [data, setData] = useState([]);

    const getData = () => {
        if( !name, !email, !password, !mobile ){

        }else{
            setData([...data, { name, email, password, mobile }])
        setName("")
        setEmail("")
        setPassword("")
        setMobile("")
        }
    }

    const deleteItem = (index) => {
        let arr = data;
        arr.splice(index, 1)
        setData([...arr])
    }

    return (
        <>
            <div className='container'>
                <div className="box">
                    <div className="title">
                        <h2>Registration Form</h2>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Mobile</label>
                        <input onChange={(e) => setMobile(e.target.value)} value={mobile} type="text" />
                    </div>
                    <div className="form-control">
                        <button onClick={getData}>Submit</button>
                    </div>
                </div>
            </div>

            <div className="form-data">
                <table className='table'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                    {
                        data.map((e, i) => {
                            return (
                                <>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.password}</td>
                                        <td>{e.mobile}</td>
                                        <button onClick={() => deleteItem(i)} className='btn'><IoTrashBin /></button>
                                    </tr>
                                </>
                            )
                        })

                    }

                </table>
            </div>
        </>
    )
}

export default Registration
