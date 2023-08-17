import React from "react";

const Drawer = ({ isShow = true, children }) => {
  return (
    isShow && (
      <>
        <div className=" absolute top-0 left-0 h-screen w-[300px] bg-white border flex flex-col justify-start items-center overflow-x-hidden">
          {children}
        </div>
      </>
    )
  );
};

export default Drawer;

export const DrawerHeader = ({ title }) => {
  return (
    <div className="w-full bg-purple-600 text-center text-white">
      <h1 className="py-3">{title}</h1>
    </div>
  );
};

export const DrawerBody = ({ children }) => {
  return <div className="w-full">{children}</div>;
};
