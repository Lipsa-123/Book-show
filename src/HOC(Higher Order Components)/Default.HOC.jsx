import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
     <Routes>
     <Route
        {...rest} 
        // element={
        //     // (props)=>(
        //     <DefaultLayout >
        // {/* <Component{...props}/> */}
        // </DefaultLayout>
        // // )
        // }
        
        // component={
        //     // (props) => (
        //   <DefaultLayout>
        //     {/* <Component {...props} /> */}
        //   </DefaultLayout>
        // // )
        // }
        element={<DefaultLayout/>}
      />
     </Routes>
      
    </>
  );
};

export default DefaultHOC;