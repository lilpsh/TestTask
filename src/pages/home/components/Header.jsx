import React,{useState} from 'react'
import { ReactComponent as Logo } from '../images/Logo.svg'
import Drawer from '@material-ui/core/Drawer';
import IconButton  from '@material-ui/core/IconButton';
import { ReactComponent as Menu } from '../images/Menu.svg'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';




import './header.scss'


const useStyles = makeStyles({
  root: {
    "& .MuiTypography-root":{    
      fontFamily:'Nunito',
      fontSize: "16px",
      lineHeight: "26px",
      color: "#000000",
    }
  }
});


const Header = () => {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false)

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(!drawer);
  };

  return (
    <header className="home_header">
      <div className="block">
      <a href="#"><Logo /></a>
        <div className="block2">
          <a href="#signUp" className="home_header-a">About me</a>
          <a href="#signUp" className="home_header-a">Relationships</a>
          <a href="#signUp" className="home_header-a">Requirements</a>
          <a href="#signUp" className="home_header-a">Users</a>
          <a href="#signUp" className="home_header-a">Sign Up</a>
        </div>
        <div className="mobile">
          <IconButton  onClick={toggleDrawer}><Menu /></IconButton >
          <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
            {
              <div className="mobile-menu">
                <Logo className="mobile-menu-logo"/>
                <Divider />
                <List className="mobile-menu-list" style={{padding:'17px 16px'}}>
                  {['About me', 'Relationship', 'Users', 'Sign up', 'Terms and Conditions'].map((text, index) => (
                    <a className="mobile-menu-list-item" style={{color:'black', textDecoration:'none'}} onClick={toggleDrawer} href="#signUp">
                      <ListItem button key={text}>
                        <ListItemText classes={{
                            root: classes.root, // class name, e.g. `classes-nesting-root-x`
                            // input: classes.input, // class name, e.g. `classes-nesting-label-x
                        }} primary={text} />
                      </ListItem>
                    </a>
                  ))}
                </List>
                <Divider />
                <List className="mobile-menu-list" style={{padding:'17px 16px'}}>
                  {['How it works', 'Partnership', 'Help', 'Level testimonial', 'Contact us'].map((text, index) => (
                    <a className="mobile-menu-list-item" style={{color:'black', textDecoration:'none'}} onClick={toggleDrawer} href="#signUp">
                      <ListItem button key={text}>
                        <ListItemText classes={{
                            root: classes.root, // class name, e.g. `classes-nesting-root-x`
                            // input: classes.input, // class name, e.g. `classes-nesting-label-x
                        }} primary={text} />
                      </ListItem>
                    </a>
                  ))}
                </List>
                <Divider />
                <List className="mobile-menu-list" style={{padding:'17px 16px'}}>
                  {['Articles', 'Our news', 'Testimonials', 'Licenses', 'Privacy Policy'].map((text, index) => (
                    <a className="mobile-menu-list-item" style={{color:'black', textDecoration:'none'}} onClick={toggleDrawer} href="#signUp">
                      <ListItem button key={text}>
                        <ListItemText classes={{
                            root: classes.root, // class name, e.g. `classes-nesting-root-x`
                            // input: classes.input, // class name, e.g. `classes-nesting-label-x
                        }} primary={text} />
                      </ListItem>
                    </a>
                  ))}
                </List>
              </div>
            }
          </Drawer>
        </div>
      </div>
    </header>
  )
}

export default Header
