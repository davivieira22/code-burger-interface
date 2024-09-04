import {createBrowserRouter}from 'react-router-dom';
import PrivateRoute from './private-route'
import {Home,Login,Registro,Products,Cart,Admin} from '../containers';


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
                    path:'/pedidos',
            
                    element:<Admin/>,
            
                },
            
            
         
            { 
            PrivateRoute,
                path:'/',
        
                element:<Home/>,
        
            },
           
     {
        path:'/produtos',

        element:<Products/>,

    },
     {
        path:'/carinho',

        element:<Cart/>,

    },
  
   
       
 


]);

