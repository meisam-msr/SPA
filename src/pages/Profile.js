import { Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashBoard from "../components/DashBoard";
import Downloads from "../components/Downloads";

const Profile = () => {
  return (
    <>
      <h2 style={{ margin: "30px" }}>wellcome back ! dear Meisam !</h2>
      <div className="sideBar">
        <SideBar />
        <Route path="/profile/dashboard" component={DashBoard} />
        <Route path="/profile/downloads" component={Downloads} />
      </div>
    </>
  );
};

export default Profile;
