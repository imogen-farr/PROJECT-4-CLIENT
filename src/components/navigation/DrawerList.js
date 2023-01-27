import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const DrawerList = ({ toggleDrawer }) => {
  const navigate = useNavigate();

  return (
    <Box
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/pets')}>
            <ListItemText primary='ALL PETS' />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/messages')}>
            <ListItemText primary='MESSAGES' />
          </ListItemButton>
        </ListItem>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/pets/add-pet')}>
            <ListItemText primary='ADD PET' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DrawerList;
