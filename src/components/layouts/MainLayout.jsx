import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { background1, background2, background3 } from "../../assets/image";

const MainLayout = ({ children }) => {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Navbar toggleMenu={toggleMenu} />
        <main className="flex-grow bg-green-50 overflow-y-auto" style={{ opacity:0.8,background: `rgb(248 250 250) url(${background3}) no-repeat  center `, backgroundSize: 'fill' }}>
          <div className="mx-auto p-6" >
          {children}
          </div>
        </main>
        <footer className="bg-emerald-50 ">
          <div className="flex justify-center items-center py-2">
            <span>All Reseved by MRCS AID </span>
          </div>
        </footer>
        {/*  */}

      </div>
      
    
      
      
     
    </div>
  );
};

export default MainLayout;
