import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import A from "./page/A";
import B from "./page/B";
import C from "./page/C";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
      </Routes>
    </div>
  );
}

export default App;
