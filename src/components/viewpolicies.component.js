import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';



const ViewPolicies = () =>{

  
  


    return (
        <div className="container">
            
            <br></br>
            <div className='container card shadow'>
                <div className='card-body row'>
                    <div className='card-title d-flex col-6 '>
                    
                        <p className='jumbotron display-5'>Our Policies</p>
                    </div> 
                    

                </div>
                
            </div>
            <br></br>
            
            <div className='container shadow'>
            <Table striped bordered hover>
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
                    <td><Button className='shadow-lg' >Connect</Button></td>
                    </tr>
                    <tr>
                    <td>BNS002</td>
                    <td>Domestic Property Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    <td><Button className='shadow-lg' >Connect</Button></td>
                    </tr>
                    <tr>
                    <td>BNS003</td>
                    <td>Crop Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    <td><Button className='shadow-lg' >Connect</Button></td>
                    </tr>
                </tbody>
            </Table>
            </div>

        </div>
    );
}
export default ViewPolicies ;