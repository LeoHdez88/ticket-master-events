import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Detail from "../views/Detail";
import ErrorPage from "../views/ErrorPage";
import Profile from "../views/Profile";
import EventsViews from "../views/EventsViews";
import SignupForm from "../components/SignupForm/SignupForm";

import Navbars from "../components/Navbar/Navbars";



const MyRoutes = () => {
  return (
      <Router>
          <Navbars />
          <div style={{ marginTop: "50px" }}> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<EventsViews />} />
                <Route path="/detail/:eventId" element={<Detail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signupform" element={<SignupForm />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
      </Router>
  );
};


export default MyRoutes; 
