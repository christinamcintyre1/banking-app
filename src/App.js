import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Bootstrap from "bootstrap";
import NavBar from "./navbar.js";
import Home from "./home.js";
import Withdraw from "./withdraw.js";
import Deposit from "./deposit.js";
import AllData from "./alldata.js";
import CreateAccount from './createaccount.js';
//import UserContext from './context.js';

function Spa() {
   return (
     <NavBar>
     <Router>
       
    
      
     <Routes>
     
      {/* <UserContext.Provider value={{users:[{name: 'Chris', email: 'chris@mit.edu', password: 'secret', balance: 100}]}}> */}
      <Route path= "/"  element={Home} />
      <Route path="/withdraw"  element={Withdraw} />
      <Route path="/deposit/" element={Deposit} />
      <Route path="/alldata/" element={AllData} />
      <Route path="createaccount" element={CreateAccount} />
        
      {/* </UserContext.Provider> */}
     </Routes>
    </Router>
      </NavBar >
  );
}
ReactDOM.render(<Spa />, document.getElementById("root"));
export default Spa;
