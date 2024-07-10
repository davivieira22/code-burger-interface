import React from "react";
import {Route, redirect } from "react-router-dom";
import PropTypes from 'prop-types'
 

async function PrivateRoute ({element,...rest}) {
    const user = await localStorage.getUser('codeburguer:userData')
    

    if(!user){
        return redirect("/login") 
    }
    return <Route {...rest} element={element}/>

    

}

export default PrivateRoute 


PrivateRoute.propTypes ={
    element:PropTypes.oneOfType([PropTypes.func,PropTypes.element])
}

