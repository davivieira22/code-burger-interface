import {createBrowserRouter}from 'react-router-dom';
import {Login} from '../containers/Login';
import {Registro} from '../containers/Registro';
import {Home}from '../containers/Home';
import PrivateRoute from './private-route'

export const router = createBrowserRouter([

     {
        path:'/login',

        element:<Login/>,

    },
        
            {
                path:'/cadastro',
        
                element:<Registro/>,
        
            },
            
            
         
            { 
            PrivateRoute,
                path:'/',
        
                element:<Home/>,
        
            }
        
  
 


]);

