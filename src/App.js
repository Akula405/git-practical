import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import About from "./components/About";
//import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SuccessPage from "./components/SuccessPage";
import UserPage from "./components/UserPage";
import { Provider } from "react-redux";
import counterReducer from "./utils/store";
import { Suspense, lazy } from "react";
import Nested1 from "./components/Nested1";

function App() {
  const LazyContact = lazy(() => import("./components/Contact"));

  return (
    <Provider store={counterReducer}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<h3>Loading......</h3>}>
                <LazyContact />
              </Suspense>
            }
          >
            <Route path="nested1" element={<Nested1 />} />
          </Route>
          <Route path="/form" element={<Form />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
