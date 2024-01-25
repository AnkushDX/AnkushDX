import logo from './logo.svg';
import Registration from './Components/Registration/Registration';
import RegistrationData from './Components/RegistrationData/RegistrationData';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Header from './Components/Header/Header';
import RegistrationAlert from './Components/RegistrationAlert/RegistrationAlert';

function App() {
  return (
    <div className="App">
   
 <BrowserRouter>
 <Header/>
        <Routes>
          <Route exact path="/inline" element={<Registration/>}></Route>
          <Route exact path="/alert" element={<RegistrationAlert/>}></Route>

          <Route exact path="/submitted" element={<RegistrationData />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
