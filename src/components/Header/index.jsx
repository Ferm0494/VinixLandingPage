import React from 'react';
import {AppBar,Toolbar,makeStyles,Button} from '@material-ui/core'
import {Col,Row} from 'react-bootstrap'
import './header.scss'
import Logo from '../../assets/Logo1.png'
import GradientButton from '../GradientButton'


const Header = ()=>{
    return(
        <AppBar position="static" className="header position-absolute " color="transparent" style={{boxShadow:'none'}} >
        <Toolbar className=" px-3">
         <Row className="w-100">
         <Col md={2} lg={1} className="d-flex align-items-center">
            <img src={Logo} className="logo" /> 
         </Col>        
                <Col md={10} lg={9} className="options  d-flex align-items-center justify-content-around">
               
                 <Button className="options">Product</Button>
               
                <Button className="options">Why Vinix Blast?</Button>
           
                <Button className="options">Pricing?</Button> 

                <Button className="options">About</Button> 

                <Button className="options">Resources</Button> 

                <Button className="options">Blog</Button> 
          
                <GradientButton title="Download Now" className="gradient-button"/> 
                
            </Col>
         </Row>
     
        </Toolbar>
      </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default Header