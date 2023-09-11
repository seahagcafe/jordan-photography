import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Portraits from "./pages/Portraits";
import Landscapes from "./pages/Landscapes";
import NoPage from "./pages/NoPage";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={<Home />} />{" "}
          <Route path="portraits" element={<Portraits />} />{" "}
          <Route path="landscapes" element={<Landscapes />} />{" "}
          <Route path="*" element={<NoPage />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
