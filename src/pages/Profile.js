import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashBoard from "../components/DashBoard";
import Downloads from "../components/Downloads";

const Profile = () => {
  return (
    <>
      <h2 style={{ margin: "30px" }}>wellcome back ! dear Meisam !</h2>
      <div className="sideBar">
        <SideBar />
        <Routes>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="downloads" element={<Downloads />} />
        </Routes>
      </div>
    </>
  );
};

export default Profile;
