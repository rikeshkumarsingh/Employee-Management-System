import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link, useNavigate , useParams } from 'react-router-dom';

export default function Update() {
    const {id}=useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const { name, phone, email } = user;

    const handleInputChange = (e) => {
     
        setUser({ ...user, [e.target.name]: e.target.value });
    };  

    const handleSubmit =async () => {
        try {
            const response= await axios.put(`http://localhost:8080/api/v1/employ/${id}`,user);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
   
    };

    useEffect(()=>{
        getUsedata();
    },[])

    const getUsedata =async () => {
        try {
            const response= await axios.get(`http://localhost:8080/api/v1/employ/${id}`);
            setUser(response.data);
           
        } catch (error) {
            console.log(error);
        }
   
    };
 

    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-3 shadow '>
                    <h2 className='text-center m-4'>Update User </h2>
                    <div className='mb-3'>
                        <div>
                            <label className="form-label">Name</label>
                            <input type="text" onChange={handleInputChange} value={name} name="name" className="form-control" placeholder="Enter Name" />
                        </div>
                        <div>
                            <label className="form-label">Phone</label>
                            <input type="number" onChange={handleInputChange} value={phone} name="phone" className="form-control" placeholder="Enter Phone" />
                        </div>
                        <div>
                            <label className="form-label">Email</label>
                            <input type="email" onChange={handleInputChange} value={email} name="email" className="form-control" placeholder="Enter Email" />
                        </div>

                        <div className="col-12 mt-2">
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                            <Link type="button" to={'/'} className="btn btn-danger mx-2">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
