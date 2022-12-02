import './App.css';
import TopBar from './TopBar';
import MenuDrawer from './Drawer';
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';
import {useState} from 'react'

function App() {

  const [tabs, setTabs] = useState([])
  const [newTabName, setNewTabName] = useState('')
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => setOpen(!open)

  function clicked(event){
    event.preventDefault();
    const newTabs = [...tabs, newTabName]
    setTabs(newTabs)
  }

  return (
    <div className="App">
        <TopBar tabs={tabs} menuToggle={toggleDrawer}/>
        <MenuDrawer open={open} menuToggle={toggleDrawer}/>
        <form onSubmit={clicked}>
          <TextField variant="outlined" label={"New Tab Name"} onChange={(e) => setNewTabName(e.target.value)}></TextField>
          <Button type="submit">Add Tab</Button>
        </form>
    </div>
  );
}

export default App;
