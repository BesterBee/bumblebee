import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";


export default class Sidebar extends Component{
    render(){
        return(
            <div className="">
                
                <nav className="navbar  navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to='/home' className="navbar-brand">Hoe</Link>
                        
                        <div className=" " >
                            <div className="col-4">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-justified">
                                    <li className="nav-item">
                                        <Link to='policies' className="nav-link " aria-current="page" >Poicies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='viewclaims' className="nav-link " aria-current="page" >Claims</Link>
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
