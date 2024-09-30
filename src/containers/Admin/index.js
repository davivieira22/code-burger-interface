import React from 'react'
import {ContainerAdmin,ContainerItems} from './style'
import { Orders } from './Orders'
import{SideMenu} from '../../components'
import {ListProducts} from './ListProducts'
import PropTypes from 'prop-types'
import paths from '../../constants/paths'

export const Admin = (props) =>{

   console.log(props)

   
    return(
   
        <ContainerAdmin>
                 <SideMenu/>
                 <ContainerItems> 
                    
                   <ListProducts/> 
             
       
            </ContainerItems>
            
        </ContainerAdmin>
    )
}
Admin.propTypes ={
    match:PropTypes.shape({
        path:PropTypes.string
    })
}