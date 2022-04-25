import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Route, Routes} from "react-router-dom"
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/employees" element={<EmployeeList></EmployeeList>}/>
        <Route path="/employees/:id" element={<ProtectedRoute><EmployeeDetails></EmployeeDetails></ProtectedRoute>}/>
        <Route path="/admin" element={<Admin></Admin>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
      </Routes>
    </div>
  );
}

export default App;
