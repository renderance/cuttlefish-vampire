import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function getTabFor(text){
    return <Button key={text} variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {text}
    </Button>
}

export default function TopBar(tabProps){
    return (
    <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={tabProps.menuToggle}
          >
            <MenuIcon />
          </IconButton>
          {tabProps.tabs.map(getTabFor)}
        </Toolbar>
        </AppBar>
    )
}