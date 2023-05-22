import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useEffect, useState } from 'react';

//ethers
import { ethers } from 'ethers';


export default class Navbar extends Component{
    render(){
        return(
            <div className="">
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand">BumbleBee Insurance</Link>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="col-4">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-justified">
                                    <li className="nav-item">
                                        <Link to='viewpolicies' className="nav-link " aria-current="page" >Policies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='about' className="nav-link " aria-current="page" >About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex flex-row-reverse col-8">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Button  className="btn btn-primary">Connect</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};
