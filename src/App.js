import logo from './logo.svg';
import Registration from './Components/Registration/Registration';
import RegistrationData from './Components/RegistrationData/RegistrationData';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
function App() {
  return (
    <div className="App">
 <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Registration/>}></Route>
          <Route exact path="/submitted" element={<RegistrationData />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
