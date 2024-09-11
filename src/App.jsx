import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from "./components/Menu";
import AllCom from "./components/AllCom";
import FullStackDev from "./components/FullStackDev";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import Footer from "./components/Footer";
import { CardData } from "./CardData";

function App() {
  let data = CardData;
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<AllCom data={data}/>}></Route>
          <Route
            path="/fullStackDevelopment"
            element={<FullStackDev data={data}/>}
          ></Route>
          <Route path="/dataScience" element={<DataScience data={data}/>}></Route>
          <Route path="/cyberSecurity" element={<CyberSecurity data={data}/>}></Route>
          <Route path="/career" element={<Career data={data}/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;