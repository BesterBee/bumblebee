import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';



const MyPolicies = () =>{

  
  


    return (
        <div className="container">
            
            <br></br>
            <div className='container card shadow'>
                <div className='card-body row'>
                    <div className='card-title d-flex col-6 '>
                    
                        <p className='jumbotron display-5'>My Policies</p>
                    </div> 
                    

                </div>
                
            </div>
            <br></br>
            <div className="container-fluid">
                <div className=" card shadow row">
                    <div className="card-body row">
                        <div className="card-title d-flex col-6">
                            <h4 className="">Subscribed</h4>
                        </div>
                        <div className="card-title d-flex flex-row-reverse col-6">
                            <h4>2</h4>
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <div className='container shadow'>
            <Table striped bordered hover className="shadow">
                <thead>
                    <tr>
                    <th>Policy ID</th>
                    <th>Policy Name</th>
                    <th>File</th>
                    <th>Subscribe</th>
                    </tr>
                </thead>
                <tbody >
                    <tr >
                    <td>BNS001</td>
                    <td>Motor Vehicle Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    <td><Button className='shadow-lg' >Remove</Button></td>
                    </tr>
                    <tr>
                    <td>BNS002</td>
                    <td>Domestic Property Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    <td><Button className='shadow-lg' >Add</Button></td>
                    </tr>
                    <tr>
                    <td>BNS003</td>
                    <td>Crop Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    <td><Button className='shadow-lg' >Remove</Button></td>
                    </tr>
                </tbody>
            </Table>
            </div>

        </div>
    );
}
export default MyPolicies ;