
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (<>
    <div className="d-flex flex-column w-100  bg-light ">
      {/* Top header */}
      <Header  />
       </div>

      <div className="d-flex    ">
        {/* Sidebar */}
        <div>

        <Navbar />
        </div>

        {/* Main Content */}
        <main className="flex-grow-1 p-3" style={{ width: "100%" }}>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
   
 </> );
};

export default Layout;



// <div className="d-flex flex-column min-vh-100 bg-light ">
//       {/* Top header */}
//       <Header  />

//       <div className="d-flex flex-grow-1 ">
//         {/* Sidebar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow-1 p-3" style={{ width: "100%" }}>
//           <Outlet />
//         </main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>