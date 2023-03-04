import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 20%;
  height: 91vh;
  padding: 20px 30px;
  border-right: 0.5px solid #000;

  nav {
    font-size: 1.2em;

    .selected {
      color: #3434ff;
    }
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <NavLink to="/a" className={({ isActive }) => (isActive ? "selected" : "not")}>
          Page A
        </NavLink>
        <NavLink to="/b" className={({ isActive }) => (isActive ? "selected" : "not")}>
          Page B
        </NavLink>
        <NavLink to="/c" className={({ isActive }) => (isActive ? "selected" : "not")}>
          Page C
        </NavLink>
      </nav>
    </SidebarContainer>
  );
}
