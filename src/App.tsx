import { Routes, Route, BrowserRouter } from "react-router-dom";
import { List } from "./common/components/List/List";
import { Home } from "./views/Home";
import { TicketsView } from "./views/TicketsView";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container h-screen flex">
        <List />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tickets" element={<TicketsView />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
