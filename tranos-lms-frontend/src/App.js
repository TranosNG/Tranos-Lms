import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FormPage } from "./pages/FormPage";
import Userdashboard from "./pages/userdashboard/Userdashboard";
import LandingPage from "./pages/LanidngPage/LandingPage";
import TrainingLibrary from "./pages/TrainingLibary/TrainingLibrary";
import MyTraining from "./pages/MyTraining/MyTraining";
import UserSetting from "./pages/UserSetting/UserSetting";
import Webinar from "./pages/Webinar/Webinar";
function App() {
  const [openBurger, setOpenBurger] = useState(false)
  const [closeBurger, setCloseBurger] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/loginform" element={<FormPage/>}></Route>
        <Route path="/userdashboard" element={<Userdashboard openBurger={openBurger} setOpenBurger={setOpenBurger} closeBurger={closeBurger} setCloseBurger={setCloseBurger}/>}></Route>
        <Route path="/training-library" element={<TrainingLibrary/>}></Route>
        <Route path="/mytraining" element={<MyTraining/>}></Route>
        <Route path="/webinar" element={<Webinar/>}></Route>
        <Route path="/setting" element={<UserSetting/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
