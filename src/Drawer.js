import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import { Mail, Inbox, ChevronLeft } from '@mui/icons-material'

export default function MenuDrawer(props){

    return (
        <Drawer
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        <div>MENU</div>
        <IconButton onClick={props.menuToggle}>
            <ChevronLeft />
        </IconButton>
        <Divider />
        <div>PROFESSIONAL</div>
        <List>
          {['CV', 'Projects', 'Personality'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <div>CREATIVE</div>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}