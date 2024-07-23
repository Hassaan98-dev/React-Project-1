import React from "react";
const Header=React.lazy(()=>import ('./Header.jsx'));
const Footer=React.lazy(()=>import ('./Footer.jsx'));
import { Outlet } from "react-router";
function Layout (){
    return(
    <>
<Header/>
<Outlet/>
<Footer/>
</>
    )
}
export default Layout;