import React,{useState} from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Chat from "./component/Chat";
import "./App.css";
import Login from "./component/Login";
import { useStateValue } from "./StateProvider";

const App=()=>{
    // const [user, setUser] = useState(null);
    const [{user}, dispatch] =useStateValue();
   return(
  
      <div className="App">
       <Router>
       {
           !user ? (<Login/>):(<>

         
       <Header/>
         <div className="app_body">
             <Sidebar className="sidebar"/>
             <Routes>

             <Route  path='/room/:roomId' element={<><Chat/></>}>
             </Route>
            

             <Route exact path='/' element={<><h1>welcome</h1></>}>
             </Route>

            
             </Routes>
         </div>
         </>)}
         </Router>
     </div>

    // <div className="App">
      
    //    <Header/>
    //      <div className="app_body">
    //          <Sidebar/>
    //          <Chat/>
    //  </div>
    //  </div>
     
      
    )
}

export default App;