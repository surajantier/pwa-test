import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./HeaderNavigation.scss";

const HeaderNavigation = () => {
  return (
    <div className="header-navigation d-flex justify-content-between align-items-center">
      <SideMenu />
      <div className="header-navigation__name">
        <span className="d-block">Welcome !!</span>
        <small>Contrary to popular belief, Lorem ?</small>
      </div>
    </div>
  );
};

export default HeaderNavigation;
