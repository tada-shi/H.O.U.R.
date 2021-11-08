
import LeftMenu from "./leftmenu";
import {Link} from "react-router-dom";
const Header = () => {


  return (
    <nav
      className= "stickey"
  style = {{ backgroundColor: "#C4C4C4", height: "18vh" }
}
    >
  <div className="mx-auto py-4">
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center px-8 md:px-0">
        <div className="hidden md:block bg-opacity-0" style={{ position: "relative", left: "85vw" }}>
          <LeftMenu />
        </div>

        <div className="flex cursor-pointer red md:pl-2" >
          <Link to="/" >

            <img
              src="/logo2.png"
              alt="/logo.png"
              className="hidden lg:block"
              style={{ width: "25%", backgroundColor: "#fff", borderRadius: "30%" }}
            />

          </Link>

        </div>


      </div>


    </div>
  </div>
    </nav >
  );
};


export default Header;
