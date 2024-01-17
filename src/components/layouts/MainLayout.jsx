import React, {Fragment, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { background3 } from "../../assets/image";

const MainLayout = ({ children }) => {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <Fragment>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full overflow-y-auto">
        <Navbar toggleMenu={toggleMenu} />
        <main className="flex-grow bg-green-50 overflow-y-auto" style={{ opacity:1,background: `rgb(248 250 250) url(${background3}) no-repeat  center `, backgroundSize: 'fill' }}>
          <div className="mx-auto px-5 py-5" >
          {children}
          </div>
          <footer className="bg-emerald-50 ">
          <div className="flex justify-center items-center py-2">
            <span>All Rights Reserved by MRCS AID </span>
          </div>
        </footer>
        </main>
        {/*  */}

      </div>
      
    
      
      
     
    </div>
    </Fragment>
  );
};

export default MainLayout;
