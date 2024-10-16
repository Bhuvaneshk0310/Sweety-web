import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
// Create browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <main>
          <Home />
        </main>
<Footer/>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
       
        <main>
          <Login />
        </main>
       
      </>
    ),
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";

// import Login from "./components/Login";


// const App = () => {
//   return (
//     <Router>
//       <Navbar />

//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
        
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </main>

//       <Footer />
//     </Router>
//   );
// };

// export default App;

