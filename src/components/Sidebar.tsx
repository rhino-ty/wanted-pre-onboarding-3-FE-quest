import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
  width: 20%;
  height: 91vh;
  padding: 10px 30px;
  border-right: 0.5px solid #000;

  nav {
    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
    font-size: 1.2em;
    display: flex;
    flex-direction: column;

    a {
      padding: 10px 0;
    }

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
