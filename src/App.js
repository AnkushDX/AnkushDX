import logo from './logo.svg';
import Registration from './Components/Registration/Registration';
import RegistrationData from './Components/RegistrationData/RegistrationData';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import RegistrationAlert from './Components/RegistrationAlert/RegistrationAlert';
import AlertData from './Components/AlertData/AlertData';
import LogIn from './Components/LogIn/LogIn';
import Curd from './Components/Curd/Curd';
import Create from './Components/Curd/Create';
import UserDetailsPage from './Components/LogIn/UserDetailsPage';

function App() {
  return (
    <div className="App">
   
   
 <BrowserRouter>
 
        <Routes>
          <Route exact path="/" element={<Curd/>}></Route>
          <Route exact path="/create" element={<Create/>}></Route>
          <Route exact path="/registration" element={<Registration/>}></Route>
          <Route exact path="/alert" element={<RegistrationAlert/>}></Route>
          <Route exact path="/inlinedata" element={<RegistrationData />}></Route>
          <Route exact path="/alertdata" element={<AlertData/>}></Route>
          <Route exact path="/login" element={<LogIn/>}></Route>
          <Route exact path="/user-details" element={<UserDetailsPage/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
