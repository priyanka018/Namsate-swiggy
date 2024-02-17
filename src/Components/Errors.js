import React from "react";
import { useRouteError } from "react-router-dom";

const Errors = ()=>{
const err = useRouteError();

return(
    <>
    <h3>Something Went Wrong!!</h3>
    <h1>{err.status}: {err.statusText}</h1>
    </>
)

}


export default Errors;