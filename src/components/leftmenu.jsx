
import { Drawer } from "antd";

import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";


const LeftMenu = () => {
  const [visible, setVisible] = useState(false);


  const [isXs, setXs] = useState(false);
  const [isSm, setSm] = useState(false);
  const [isMd, setMd] = useState(false);
  const [isLg, setLg] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const allFalse = () => {
    setXs(false);
    setSm(false);
    setMd(false);
    setLg(false);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const checkWidth = () => {
        const width = window.innerWidth;

        allFalse();
        if (width < 370) setXs(true);
        else if (width < 600) setSm(true);
        else if (width < 800) setMd(true);
        else if (width < 1400) setLg(true);
      };
      window.addEventListener("resize", checkWidth);
      checkWidth();
    }
  }, []);

  const getWidth = () => {
    if (isXs) return "100%";
    if (isSm) return "75%";
    if (isMd) return "50%";
    if (isLg) return "35%";
    return "30%";
  };

  return (
    <div >
      {/* LEFT MENU */}
      <button
        type="button"
        className="text-dark-500 pl-12 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
        aria-label="toggle menu"
        onClick={() => setVisible(true)}
      >
        <FiAlignLeft size={30} />
      </button>

      <Drawer 
        placement="right"
        closable={false}
        onClose={onClose}
        width={getWidth()}
        visible={visible}
        
        drawerStyle={{
          width: "95%",
          backgroundColor: "#C1F5C9",
          
          
        }}
        keyboard={true}
      >
        <img
          src="/close.png"
          alt="close"
          className="h-4 w-4 mb-4 cursor-pointer float-right"
          onClick={onClose}
        />
        <ul className="sidebar flex flex-col h-full " >
        <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5"
              >
                <Link to="/profile"
                    style={{ fontSize: 18 }}
                    className="flex align-center"
                    onClick={onClose}
                  >
                    Profile
                  
                </Link>
          </li>
          
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link to="/"
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                
                Notice
             
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link to="/faculty"
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                
                Faculty
             
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link to="/leave"
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                
                Leave Application
             
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link to="/attendance"
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                
                Attendance
            
            </Link>
          </li>
          
          <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5"
              >
                <Link to="/complain"
                    style={{ fontSize: 18 }}
                    className="flex align-center disable"
                    onClick={onClose}
                  >
                    
                    Complain
                  
                </Link>
              </li>
          <li
                style={{ borderBottom: "1px solid #A0AEC0" }}
                className="pt-5 pb-5"
              >
                <Link to="/login"
                    style={{ fontSize: 18 }}
                    className="flex align-center disable"
                    onClick={onClose}
                  >
                    
                    LogIn
                
                </Link>
              </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default LeftMenu;
