import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { Link} from "react-router-dom";

const Claims = ({account, setAccount}) =>{

  

    return (
        <div className="container-fluid">

            <br></br>
            <div className='container card shadow'>
                <div className='card-body row'>
                    <div className='card-title d-flex col-6 '>
                    
                        <p className='jumbotron display-5'>Claims</p>
                    </div>

                </div>
            </div>
            <br></br>
            <div className='container shadow'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Claim No.</th>
                    <th>User</th>
                    <th>Policy Name</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>User 01</td>
                    <td>Motor Vehicle Insurance</td>
                    <td>Approved <Link to="coming"><Button>View</Button></Link></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>User 01</td>
                    <td>Domestic Property Insurance</td>
                    <td>Declined <Link to="coming"><Button>View</Button></Link></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>User 01</td>
                    <td>Crop Insurance</td>
                    <td>Pending <Link to="coming"><Button>View</Button></Link></td>
                    </tr>
                </tbody>
            </Table>
            </div>
            
        </div>
    );
}
export default Claims;