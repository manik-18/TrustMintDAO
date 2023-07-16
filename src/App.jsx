import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Upload from "./pages/Upload";
import View from "./pages/View";
import Pricing from "./components/Pricing";
import { useEffect, useState } from "react";
import NFT from "./pages/NFT";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("userId")
  );

  console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      toast.error("Authenticate to continue");
      return <Navigate to="/auth" />;
    }
    return children;
  };

  return (
    <>
      <BrowserRouter>
        {currentUser && (
          <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        )}
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
          <Route
            exact
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/view"
            element={
              <ProtectedRoute>
                <View />
              </ProtectedRoute>
            }
          />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/pricing" element={<Pricing/>} />
          <Route
            exact
            path="/view"
            element={
              <ProtectedRoute>
                <NFT />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/auth"
            element={
              <Auth currentUser={currentUser} setCurrentUser={setCurrentUser} />
            }
          />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
