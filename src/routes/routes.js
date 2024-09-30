import {createBrowserRouter}from 'react-router-dom';
import PrivateRoute from './private-route'
import {Home,Login,Registro,Products,Cart,Admin} from '../containers';
import paths from '../constants/paths'

export const router = createBrowserRouter([

         
            { 
            PrivateRoute,
                path:'/',
        
                element:<Home/>,
        
            },
            { 
                PrivateRoute,
                    path:paths.Products,
                    element:<Admin/>,
            
                },
            
            { 
                PrivateRoute,
                    path:paths.Order,
            
                    element:<Admin/>,
            
                },
            
           
     {
        path:'/produtos',

        element:<Products/>,

    },
     {
        path:'/carinho',

        element:<Cart/>,

    },
  
    {
        path:'/login',

        element:<Login/>,

    },
        
            {
                path:'/cadastro',
        
                element:<Registro/>,
        
            },     
          
            
   
       
 


]);

