import React,{useState} from 'react';
import clsx from 'clsx'
import {AppBar,Toolbar,makeStyles,Button,IconButton,Drawer,List,ListItem,ListItemText,Divider,ListSubheader} from '@material-ui/core'
import {GetApp} from '@material-ui/icons'
import {Col,Row} from 'react-bootstrap'
import { HiMenuAlt1 } from "react-icons/hi";
import './header.scss'
import Logo from '../../assets/Logo1.svg'
import GradientButton from '../GradientButton'

const options = ["Product", "Why Vinix Blast", "Pricing", "About", "Resources","Blog"]
const anchor = "right"

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },

  font:{
    fontSize: '2em',
    fontFamily: 'Poppins'
  }

});

const Header = ()=>{
  const classes = useStyles();
  const [state,setState]=useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListSubheader className="d-flex justify-content-center py-4" >
              <img src={Logo} className="logo2  " /> 
          </ListSubheader>
          <Divider/>
        {options.map((text) => (
          <ListItem button key={text} >
          
            <ListItemText primary={text} classes={{primary: classes.font}}/>
            <Divider/>
          </ListItem>

        ))}
      </List>
     
    </div>
  );


    return(
     
      <AppBar position="absolute" className="position-fixed  header  d-flex w-100 " color="transparent" style={{boxShadow:'none'}} >
      <Toolbar className=" px-lg-3 px-md-0">
       <Row className="d-none d-md-flex w-100 ">
       <Col/>
       <Col md={2} lg={1} className="d-flex align-items-lg-center">
          <img src={Logo} className="logo" /> 
       </Col>        
              <Col md={9} lg={9} className="options d-flex px-0 justify-content-lg-center justify-content-md-start">

              {
                options.map(option=><Button className="options mx-4">{option}</Button>)
              }
             
              <GradientButton title="Download Now" className="gradient-button  px-lg-4 "/> 
              
          </Col>
       </Row>
      <Row className="d-flex d-md-none w-100 p-4 ">
       <Col xs={3} className="d-flex align-items-lg-center">
          <img src={Logo} className="logo" /> 
       </Col>
       <Col xs={9} className="d-flex justify-content-end">
        
        
            <React.Fragment key={anchor}>
                <IconButton className="menu" onClick={toggleDrawer(true)}>
                    <HiMenuAlt1/>
                </IconButton>
                <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)} classes={{paper: `bg-light `}} >
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        
        
            <IconButton className="main-background getapp">
                <GetApp/>
            </IconButton>
            
       </Col>        
             
       </Row>
   
      </Toolbar>
    </AppBar>
  )
  }

export default Header