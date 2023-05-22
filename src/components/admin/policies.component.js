import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";



 

const PoliciesView = () =>{

   let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `new`; 
    navigate(path);
  }


    return (
        <div className="container">
            
            <br></br>
            <div className='container card shadow'>
                <div className='card-body row'>
                    <div className='card-title d-flex col-6 '>
                    
                        <p className='jumbotron display-5'>Our Policies</p>
                    </div> 
                    <div className='col-6 d-flex flex-row-reverse'>
                        <div className='p-2'>
                        <Button className='shadow-lg' onClick={routeChange}>New</Button>
                        </div>
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
                    </tr>
                </thead>
                <tbody >
                    <tr >
                    <td>BNS001</td>
                    <td>Motor Vehicle Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    </tr>
                    <tr>
                    <td>BNS002</td>
                    <td>Domestic Property Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    </tr>
                    <tr>
                    <td>BNS003</td>
                    <td>Crop Insurance</td>
                    <td><Button className='shadow-lg' >Download</Button></td>
                    </tr>
                </tbody>
            </Table>
            </div>

        </div>
    );
}
export default PoliciesView ;