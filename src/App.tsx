import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import A from "./page/A";
import B from "./page/B";
import C from "./page/C";

const MainSection = styled.section`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection>
        <Sidebar />
        <Routes>
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
        </Routes>
      </MainSection>
    </div>
  );
}

export default App;
