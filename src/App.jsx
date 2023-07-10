import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Auth from "./pages/Auth";

function App() {
  const currentUser = false;
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      alert("Authenticate to continue");
      return <Navigate to="/auth" />;
    }
    return children;
  };

  return (
    <>
      <BrowserRouter>
        {currentUser && <Navbar />}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
