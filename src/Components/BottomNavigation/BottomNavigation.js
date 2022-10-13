import Nav from "react-bootstrap/Nav";
import "./BottomNavigation.scss";

const BottomNavigation = ({ children }) => {
  return (
    <div className="bottom-navigation">
      <Nav variant="pills">{children}</Nav>
    </div>
  );
};

export function TabItem({ eventKey, icon, text }) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey}>
        <span>{icon}</span>
        <span>{text}</span>
      </Nav.Link>
    </Nav.Item>
  );
}

export default BottomNavigation;
