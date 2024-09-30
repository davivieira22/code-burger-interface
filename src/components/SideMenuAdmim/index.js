import { Container, ItemContainer, ListLinks } from "./styles.js";
import LogoutIcon from '@mui/icons-material/Logout';
import { listLinks } from "./menu-list.js";
import {useUser} from '../../hooks/UserContext.js'
export const SideMenu = () => {
  const {logout} = useUser()
  return (
    <Container>
      <hr></hr>
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={true}>
          <item.icon className='icon'/>
          <ListLinks to={item.link}>{item.label}</ListLinks>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{position:'absolute', bottom:'30px'}}>
        <LogoutIcon style={{color:'#ffffff', marginRight:'20px'}}/>
        <ListLinks to="/login" onClick={logout}>Sair</ListLinks>
      </ItemContainer>
    </Container>
  );
};
