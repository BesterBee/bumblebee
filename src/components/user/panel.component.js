import React, {Component} from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default class Sidebar extends Component{
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
                    <div className="card-title">
                        <h3>Policies</h3>

                    </div>
                    <div className="card-body  row d-flex flex-row">
                        
                        <div className="col-6 ">
                            <h5>Subcribed</h5>
                         </div>
                         <div className="col-6 d-flex flex-row-reverse ">
                            <h5>2/3</h5>

                         </div>
                    </div>
                    <div className="card-footer d-flex flex-row-reverse">
                        <Link to="policies"><Button>View</Button></Link>
                        
                    </div>

                </div>

                <br></br>
                <div className="container card shadow shadow-lg">
                    <div className="card-title">
                        <h3>Claims</h3>

                    </div>
                    <div className="card-body  row d-flex flex-row">
                        
                        <div className="col-6 ">
                            <h5>Pending</h5>
                        </div>
                        <div className="col-6 d-flex flex-row-reverse ">
                            <h5>1</h5>
                        </div>
                        <br></br>
                        <div className="col-6 ">
                            <h5>Proccessed</h5>
                        </div>
                        <div className="col-6 d-flex flex-row-reverse ">
                            <h5>2</h5>
                        </div>


                    </div>
                    <div className="card-footer d-flex flex-row-reverse">
                        <Link to="claims"><Button>View</Button></Link>
                        
                    </div>

                </div>


            </div>
        )
    }
};