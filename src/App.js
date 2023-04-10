import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthProvider } from "./stores/AuthContext";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import app from "./data/firebase";
import { getAuth } from 'firebase/auth';
import RequireAuth from "./routes/PrivateRoute";

function App() {

  const auth = getAuth(app);
  console.log(auth.currentUser);
  // const navigate = useNavigate();

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
