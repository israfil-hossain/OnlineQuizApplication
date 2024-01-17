import React, { Fragment, useContext } from "react";
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
        <div className="flex flex-col h-full w-full overflow-y-auto">
          <Navbar toggleMenu={toggleMenu} />
          <main
            className="flex-grow  h-screen bg-green-50 overflow-y-auto justify-between "
            style={{
              opacity: 1,
              background: `rgb(248 250 250) url(${background3}) no-repeat  center `,
              backgroundSize: "fill",
            }}
          >
            <div className="mx-auto px-5 py-5 min flex flex-col min-h-screen">{children}</div>
            <footer className="bg-emerald-50 mt-auto">
              <div className="flex justify-center items-center py-2">
                <span>© All Rights Reserved by MRCS AID 2024</span>
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
