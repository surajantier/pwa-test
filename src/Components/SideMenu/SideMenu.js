import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { MenuIcon } from "../../Assets/SvgIcons/SvgIcons";
import "./SideMenu.scss";

const SideMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <MenuIcon />
      </span>

      <Offcanvas show={show} onHide={handleClose} className="sidemenu-canvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome !</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0 py-5">
          <ul className="sidemenu-list">
            <li>
              <Link to="#">Invoices</Link>
            </li>
            <li>
              <Link to="#">Expenses</Link>
            </li>
            <li>
              <Link to="#">Expenses</Link>
            </li>
            <li>
              <Link to="#">Expenses</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideMenu;
