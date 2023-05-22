import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Claims = ({account, setAccount}) =>{

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `new`; 
    navigate(path);
  }

    return (
        <div className="container-fluid">

            <br></br>
            <div className='container card shadow'>
                <div className='card-body row'>
                    <div className='card-title d-flex col-6 '>
                    
                        <p className='jumbotron display-5'>Claims Made Me</p>
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
                    <th>Claim No.</th>
                    <th>Policy Name</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Motor Vehicle Insurance</td>
                    <td>Approved</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Domestic Property Insurance</td>
                    <td>Declined</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Crop Insurance</td>
                    <td>Pending</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            
        </div>
    );
}
export default Claims;