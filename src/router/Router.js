import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/Community";
import Tracker from "../pages/Tracker";
import MyInformation from "../pages/MyInformation";
import Layout from "../Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="community" element={<Community />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="myinformation" element={<MyInformation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
