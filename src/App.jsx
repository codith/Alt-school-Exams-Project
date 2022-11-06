import "../src/App.css";

import { Route, Routes, NavLink} from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import TestError from "./components/TestError";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <main className="App">
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/Error404">404 Page</NavLink>
      <NavLink to="/testErrorBoundary">Test Error boundary</NavLink>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/testErrorBoundary" element={<TestError />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      
  </main>
);
     
}
export default App;
