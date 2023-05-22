import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, FormGroup, FormLabel } from "react-bootstrap";



export default class NewClaim extends Component{
    render(){
        return(
        <div className="container-fluid">
            <br></br>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="card shadow col-5 ">
                   
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center card-title">
                            <h1 className="card-title col-6">New Claim</h1>
                        </div>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPolicyID">
                                <Form.Label column sm="2">Policy ID</Form.Label>
                                <Col sm="10">
                                <Form.Control type="text" placeholder="Example: BNS001" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formAmt">
                                <Form.Label column sm="2">Amount</Form.Label>
                                <Col sm="10">
                                <Form.Control type="number" step={0.0000000001} placeholder="Claim Amount In ETH" />
                                </Col>
                            </Form.Group>
                            <FormGroup as={Row} className="mb-3" controlId="formFile">
                                <FormLabel column sm="2">Report</FormLabel>
                                <Col sm="10">
                                    <Form.Control type="file"/>
                                </Col>
                            </FormGroup>
                            <div className="d-flex align-items-center justify-content-center">
                            <Button type="submit">Submit</Button>
                            </div>
                        </Form>
                    
                    </div>
                </div>
            </div>

            
        </div>
        )
    }
};
