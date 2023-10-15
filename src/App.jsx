import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import ModalComponent from "./components/ModalComponent.jsx";



function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path="/modalA" element={<ModalComponent title="Modal A"/>}></Route>
          <Route path="/modalB" element={<ModalComponent  title="Modal B"/>}></Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
