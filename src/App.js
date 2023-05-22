import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// ABIs
//import Insurance from './abis/Insurance.json'


// Config

//import config from './config.json'

// Components
import Navbar from './components/navbar.component';
import Landing from './components/landing.component';
import ViewPolicies from './components/viewpolicies.component';


// User
import UserPanel from "./components/user/panel.component"
import NewClaim from './components/user/newclaim.component';
import Claims from './components/user/claims.component';
import MyPolicies from './components/user/policies.component';

// Admin
//import AdminPanel from './components/admin/admin.component';
import NewPolicy from './components/admin/newpolicy.component';
import PoliciesView from './components/admin/policies.component';
import ClaimsView from './components/admin/claims.component';
import Panel from './components/admin/panel.component';

// Basic App Functionality
function App() {

  return (
    
    <Router>
      <div className='container'>

      </div>
      <Navbar />
      <Routes>
        
        <Route path="/" element= {<Landing/>}/>
        <Route path="viewpolicies" element= {<ViewPolicies/>}/>

        <Route path='user' element= { <UserPanel/> }/>
        <Route path="user/claims" element= {<Claims/>}/>
        <Route path='user/claims/new'element={<NewClaim/>}/>
        <Route path="user/policies" element= { <MyPolicies/>}/>
        
        <Route path='admin' element={<Panel/>}/>
        <Route path="admin/policies" element= {<PoliciesView/>}/>
        <Route path="admin/policies/new" element= {<NewPolicy/>}/>
        <Route path="admin/claims" element= {<ClaimsView/>}/>
        

      </Routes> 
    </Router>
   
  );
}

export default App;
