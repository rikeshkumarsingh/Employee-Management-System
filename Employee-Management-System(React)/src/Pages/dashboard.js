import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Dashboard() {
    const {id}=useParams();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/employ');
            setUsers(response.data);
        } catch (error) {
            console.error('Error loading users:', error);
        }
    };

    const Delete=async (id)=>{
        try {
            await axios.delete(`http://localhost:8080/api/v1/employ/${id}`)
            loadUsers();
        } catch (error) {
            console.error('Error loading users:', error);
        }
        
    }

    return (
        <div>
            <div className='container'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Emp_Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/update/${user.id}`} >Update</Link>
                                    <button onClick={()=>Delete(user.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
