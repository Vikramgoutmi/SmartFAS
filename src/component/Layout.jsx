
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";


const Layout = () => {
  return (<>
   <div className="d-flex flex-column vh-100 w-100 bg-light">
  {/* Header - fixed at top */}
  <div className="flex-shrink-0">
    {/* <Header /> */}
  </div>

  <div className="d-flex flex-grow-1 overflow-hidden">
    {/* Sidebar with independent scrollbar */}
    <div className="position-relative overflow-auto bg-white z-2" style={{ width: '260px' }}>
      <Navbar />
    </div>

    {/* Main content area with independent scrollbar */}
    <main className="flex-grow-1 p-3 overflow-auto w-75">
      <Header/>
      <Outlet />
    </main>
  </div>
</div>


    
   
 </> );
};

export default Layout;
