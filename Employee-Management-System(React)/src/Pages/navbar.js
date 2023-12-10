import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {

    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Home</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                      
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-danger" to='/addusers'>Add Users</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

