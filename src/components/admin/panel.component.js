import React, {Component} from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default class Panel extends Component{
    render(){
        return(
            <div className="container-fluid">
                <br></br>
                <div className="container card shadow shadow-lg">
                    <div className="card-title jumbotron">
                        <h3 className="display-3">Overview</h3>
                    </div>
                </div>
                <br></br>
                <div className="container card shadow shadow-lg">
                    
                    <div className="card-body  row d-flex flex-row">
                        
                        <div className="col-6 ">
                            <h5>Policies</h5>
                         </div>
                         <div className="col-6 d-flex flex-row-reverse ">
                            <h5>3</h5>

                         </div>
                    </div>
                    <div className="card-footer d-flex flex-row-reverse">
                        <Link to="policies"><Button>View</Button></Link>
                        
                    </div>

                </div>

                <br></br>
                <div className="container card shadow shadow-lg">
                   
                    <div className="card-body  row d-flex flex-row">
                        
                        <div className="col-6 ">
                            <h5>Claims</h5>
                            <h6>Pending</h6>
                            <h6>Proccessed</h6>

                        </div>
                        <div className="col-6 d-flex flex-row-reverse ">
                            <div>
                                <h5>3</h5>
                                <h6>1</h6>
                                <h6>2</h6>
                            </div>
                        </div>
                        <br></br>

                    </div>
                    <div className="card-footer d-flex flex-row-reverse">
                        <Link to="claims"><Button>View</Button></Link>
                        
                    </div>

                </div>


            </div>
        )
    }
};