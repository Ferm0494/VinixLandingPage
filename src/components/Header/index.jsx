import React from 'react';
import {AppBar,Toolbar,makeStyles,Button} from '@material-ui/core'
import {Col,Row} from 'react-bootstrap'
import './header.scss'
import Logo from '../../assets/Logo1.svg'
import GradientButton from '../GradientButton'


const Header = ()=>{
    return(
        <AppBar position="absolute" className="header position-absolute d-flex  " color="transparent" style={{boxShadow:'none'}} >
        <Toolbar className=" px-lg-3 px-md-0">
         <Row className="w-100">
         <Col/>
         <Col md={2} lg={1} className="d-flex align-items-center">
            <img src={Logo} className="logo" /> 
         </Col>        
                <Col md={10} lg={9} className="options d-flex px-0 justify-content-center">
               
                 <Button className="options mx-4">Product</Button>
               
                <Button className="options mx-4">Why Vinix Blast?</Button>
           
                <Button className="options mx-4">Pricing?</Button> 

                <Button className="options mx-4">About</Button> 

                <Button className="options mx-4 ">Resources</Button> 

                <Button className="options mx-4">Blog</Button> 
          
                <GradientButton title="Download Now" className="gradient-button px-0 px-lg-4 "/> 
                
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