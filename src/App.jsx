
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import NoPage from "./pages/NoPage.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import AdminElement from "./router/AdminElement.jsx"
import Dashboard  from "./pages/dashboard/Dashboard.jsx";


export default function App() {
 
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        <Route path="*" element={<NoPage />} />

        { /* Abstract Portal Routes admin */ } 
                    <Route path = "/dashboard"
                        element = { <AdminElement> { /* <Layout /> */ } 
                        <Route index element = { < Dashboard />} /> 
                            </AdminElement > }>
                        <Route index element = {< Dashboard />}/>                  
                        


                    

                    </Route>
            { /* Abstract Portal Routes admin */ } 

      </Routes>
    </BrowserRouter>
  );
}


