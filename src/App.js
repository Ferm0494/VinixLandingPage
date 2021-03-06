import React,{useRef} from 'react';
import {Header,AppleStoreButton,GoogleStoreButton, GradientButton} from './components'
import {SplitContainer} from './containers'
import {IOS_URL,ANDROID_URL,location, FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE, WINDOWS_INSTALLER, LINUX_INSTALLER, MAC_OS_INSTALLER, MATRIX_URL} from './utils/const'
import {Col,Row} from 'react-bootstrap'
import Image1 from './assets/img-01.png'
import Image2 from './assets/img-02.png'
import Image3 from './assets/img-03.png'
import Image4 from './assets/img-04.png'
import Image5 from './assets/img-05.png'
import Image6 from './assets/img-06.png'
import Image7 from './assets/img-07.png'
import Logo2 from './assets/Logo2.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {List,ListItem,ListItemIcon,ListItemText, ListSubheader} from '@material-ui/core'
import {CheckCircleOutline} from '@material-ui/icons'
import {FaFacebookF,AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube,FaWindows,DiApple,FaLinux,BsArrowUpRight} from 'react-icons/all'





const App = () => {

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();


  
  return (
    <div>
  
      <Header callBack={executeScroll}/>
      <div>
        <SplitContainer className="cont gray-background m-0 px-0 d-lg-block d-flex  align-items-start" id="first-container">
         <Col className="d-md-block"  xs={1} lg={2}/>
         <Col className=" d-flex flex-column justify-content-around welcome-container justify-content-md-center  mt-7 align-items-md-start align-items-center" xs={10} md={5} lg={3} >
      
          <h2 className="text-sm-center text-md-left"> Build and Connect Vinix Blast App </h2>   
          <p className="jumbo mb-4 text-sm-center text-md-left">In publishing and graphic desing, Lorem ipsum is a place holder text commonly used to demonstrate form of a document or a typeface</p>
          <GradientButton   title="Get Vinix Blast" onClick={executeScroll} />
        
                  
         </Col>

         <Col className=" d-none d-md-flex  justify-content-end px-0" xs={1}  md={6} lg={7} >
            <img src={Image1} className="d-none d-md-block image1 m-md-0"/>
         </Col>
        </SplitContainer>
            
      </div>
      <div className=" grid-features container mt-16 ">
            
                <img src={Image2} className="image2 "/>
            
            <div className="align-self-center">
            <h3 className="text-sm-center text-md-left">Vinix Blast Users</h3>
          
              <Col md={8} lg={9} >
                  <p className="fw-bold text-sm-center text-md-left px-4 px-md-0 ">Ea nisi fugiat nostrud duis ss sdsdf tetur labore eiusmod amet et qui veniam cillum uo.</p> 
                  <p className="  px-4 px-md-0 "> Amet voluptate veniam alinostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt snsdooi osdoisid oidjosdij 
                    Occaecat qui sint ullamco quis duis cillum autit velit sint cinim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>
              </Col>
            

              <div className="d-flex  w-100 mt-2 buttons-container justify-content-center justify-content-md-start">
               
              <AppleStoreButton url={IOS_URL}/>
              <GoogleStoreButton url={ANDROID_URL}/>
              
              </div>
              </div>
             
      </div>
      <SplitContainer className="medium-container  mt-7 mt-none pt-3 ">
        <Col md={1} lg={2}>
        </Col>
         <Col lg={8} md={10} ref={myRef} >

        
         
                  <h3 className="text-center">Vinix Blast Developers</h3>
                  <p className="pt-2 mb-0 px-4 px-md-0 "> runt commodo consectetur ad idillum velit.
                  Do dolore amet magna magna non. Velit adipisicing ipsum deseruntt commodo adipisicing mollit cupidatat anim deserunt laborum. Sit velit sint cillum elit adipisicing nostrud. Commodo commodo adipisicing enim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>

           
         </Col>
             
         <Col md={1} lg={2}/>
         <img  src={Image3} className="position-relative mx-auto mw-100 h-100"/>
       
      </SplitContainer>
      <SplitContainer className="small-cont m-0">
        <Col id="waved">
          <div className="medium-container w-100 pt-4 d-flex justify-content-between flex-column align-items-md-center" >
              <div className=" h-50 d-flex w-100 justify-content-center align-items-md-center align-items-end mt-5"  >
                  <GradientButton title="Mac OS" Logo={<DiApple/>} onClick={()=>window.open(MAC_OS_INSTALLER)} font='Mada-Semi' weight="Bold" width="220px" />
                  <GradientButton title="Windows (64 bit)" Logo={<FaWindows/>} onClick={()=>window.open(WINDOWS_INSTALLER)}  font='Mada-Semi' weight="Bold" className=" gradient-button px-4 ml-3"  />
                  <GradientButton title="Linux (64 bit)" Logo={<FaLinux/>}  onClick={()=>window.open(LINUX_INSTALLER)}  font='Mada-Semi' weight="Bold" width="220px"  className=" gradient-button px-4 ml-3"/>
                 
              </div>
              <Col    md={5} lg={4}>
                <Row className="  d-flex justify-content-center align-items-center flex-column  ">
                  <h3 className="mt-5">Pricing Plans </h3>
                  <p className="text-center px-4 px-md-0 "> Ad ex ad da elit cupidatat Lorem commodo adipisicing nisi aliqua. In excepteur in nisi deserunt irure amet consectetur id.</p>
                </Row>
                
              </Col>
          </div>
        </Col>
      </SplitContainer>
      <SplitContainer className=" fixed-container mt-md-4">
        <Col className="d-flex justify-content-center">
          <div className="grid-container">
          {/* FIRST CARD */}
          <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
              <div className="d-flex flex-column justify-content-around align-items-center">
                <h5>Free</h5>
                <p>Small text...</p>
                <h5>$0.00<span className="month">/month</span></h5>

              </div>
                
                <hr/>
                <List>
                  <ListSubheader className="text-center pricing-subheader" disableSticky={true}>
                      All of these porwerful features    
                  </ListSubheader>
                  <ListItem >
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exeullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation amco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes herr laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Eorum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Get Started" className="w-100 rounded gradient-button-curved" font="Mada-Semi"  weight="bolder"/>
            </div>
            {/* SECOND CARD */}
            <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
              <div className="d-flex flex-column justify-content-around align-items-center">
                <h5>Free</h5>
                <p>Small text...</p>
                <h5>$0.00<span className="month">/month</span></h5>

              </div>
                
                <hr/>
                <List>
                <ListSubheader className="text-center pricing-subheader" disableSticky={true}>
                      All of these porwerful features    
                  </ListSubheader>
                  <ListItem >
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exeullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation amco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes herr laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Eorum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Get Started" className="w-100 rounded gradient-button-curved" font="Mada-Semi"  weight="bolder"/>
            </div>

            {/* THIRD CARD */}
            <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
              <div className="d-flex flex-column justify-content-around align-items-center">
                <h5>Free</h5>
                <p>Small text...</p>
                <h5>$0.00<span className="month">/month</span></h5>

              </div>
                
                <hr/>
                <List>
                <ListSubheader className="text-center pricing-subheader" disableSticky={true}>
                      All of these porwerful features    
                  </ListSubheader>
                  <ListItem >
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exeullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation amco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes herr laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Eorum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Get Started" className="w-100 rounded gradient-button-curved" font="Mada-Semi"  weight="bolder"/>
            </div>
            {/* FOURTH CARD */}
            <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
              <div className="d-flex flex-column justify-content-around align-items-center">
                <h5>Free</h5>
                <p>Small text...</p>
                <h5>$0.00<span className="month">/month</span></h5>

              </div>
                
                <hr/>
                <List>
                <ListSubheader className="text-center pricing-subheader" disableSticky={true}>
                      All of these porwerful features    
                  </ListSubheader>
                  <ListItem >
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exeullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation amco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes herr laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Eorum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Get Started" className="w-100 rounded gradient-button-curved" font="Mada-Semi" weight="bolder"/>
            </div>
          </div>
        </Col>

      </SplitContainer>
      <SplitContainer className="small-container mt-md-4 mb-md-5 my-2  d-flex flex-column justify-content-end  ">
       
             <Col  />
              <Col md={5} lg={4}>
                <h3 className="text-center">Vinix Features </h3>
                <p className="text-md-center px-4 px-md-0 "> Ad ex ad dolore pariatur. Dolore aute commodo nostrud incididunt sunt. Incididunt fugiat ea. In excepteur in nisi deserunt irure amet consectetur id.</p>
              </Col>
              <Col/>
      </SplitContainer>
     <div  className="grid-features fixed-container container mb-md-5">
        <img src={Image4} className="image2 grid-item-1" />
        <div className=" align-self-center grid-item-2">
        
          <h4 className="text-center text-md-left">Team Chat</h4>
          <Row className="px-0">
              <Col md={8} lg={9}>
                  <p className="px-4 px-md-0 "> Amet voluptate veniam alinostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt snsdooi osdoisid oidjosdij 
                    Occaecat qui sint ullamco quis duis cillum autit velit sint cinim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>
              </Col>
              
          </Row>         
        </div>
        <div className="align-self-center grid-item-4 ">
        
          <h4 className="text-center text-md-left">Text Messaging</h4>
          <Row className="px-0">
              <Col md={8} lg={9}>
                  <p className="px-4 px-md-0 "> Amet voluptate veniam alinostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt snsdooi osdoisid oidjosdij 
                    Occaecat qui sint ullamco quis duis cillum autit velit sint cinim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>
              </Col>
              
          </Row>          
        </div>
        <img src={Image5} className="image2 grid-item-3  "/>
        <img src={Image6} className="image2 " />
        <div className="align-self-center ">
        
          <h4 className="text-center text-md-left">Voice Video Calls</h4>
          <Row className="px-0">
              <Col md={8} lg={9}>
                  <p className="px-4 px-md-0 "> Amet voluptate veniam alinostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt snsdooi osdoisid oidjosdij 
                    Occaecat qui sint ullamco quis duis cillum autit velit sint cinim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>
              </Col>
              
          </Row>          
        </div>

        <div className="align-self-center grid-item-8 ">
        
          <h4 className="text-center text-md-left">Text Messaging</h4>
          <Row className="px-0">
              <Col md={8} lg={9}>
                  <p className="px-4 px-md-0 "> Amet voluptate veniam alinostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt snsdooi osdoisid oidjosdij 
                    Occaecat qui sint ullamco quis duis cillum autit velit sint cinim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>
              </Col>
              
        </Row>          
        </div>
        <img src={Image7} className="image2 mx-auto grid-item-7"/>
     </div>
   
     
      <SplitContainer className="container  mt-7  px-4 px-md-0 ">
        
        <Col xs={12}  id="info-matrix" className=" d-flex p-4 flex-lg-row flex-column justify-content-around justify-content-md-start ">
       

          <Col xs={12}  md={6} className=" px-5 px-md-3">
              <h5 className="text-white text-center  text-md-left">A part of the Matrix ecosystem</h5>
              <Col lg={10} className="px-0">
                    <p className="text-white text-center  text-md-left"> officia mollit laboris id cillum. Nostrud tempor incididunt ex do dolor Lorem nostrud tempor. Laboris nostrud ea quis exercitation nulla enim consectetur Lorem officia veniam anim. Esse excepteur fugiat nulla velit labore duis tempor do consequat ea.

      Par. Eiusmod cupidatat do officia eiusmod esse pariatur do pariatur pariatur.</p>
              </Col>
          </Col>
          <Col className="d-flex justify-content-md-end justify-content-center align-items-end " lg={6} >
          <img src={"https://matrix.org/images/matrix-logo-white.svg"} className="mr-3 pr-2 mb-2" />
          <GradientButton Logo={<BsArrowUpRight/>} className="gray-button" title="Matrix.org" onClick={()=> window.open(MATRIX_URL) } right={true} />
          </Col>

        </Col>
      
      </SplitContainer>
      <SplitContainer className="medium-container mt-4 d-flex flex-column justify-content-center ali">
          <Col lg={4} md={3}/>
          <Col className="d-flex flex-column align-items-center justify-content-md-around justify-content-between  small-container ">
            <h3>Ready to get Started?</h3>
            <p className="text-center" >Cupidatat exercitation qui dolor aliqua voluptate cillum voluptate pariatur.Occaecat pariatur aute ad aute eiusmod.  aute ad aute eiusmod</p>
            <GradientButton title="Get Vinix Blast" className="gradient-button" onClick={executeScroll} />

          </Col>
          <Col lg={4} md={3}/>
      </SplitContainer>
      <footer>
      <SplitContainer className="h-100 d-md-flex flex-column justify-content-end ">
            <Col className="d-md-flex justify-content-around px-0 py-4 grid-footer " >
            <div className="d-flex flex-column h-50 justify-content-around align-self-center logo-cont ">
            
                <img src={Logo2} />
               
              <div>
                <FaFacebookF className="circle-icon" onClick={()=>window.open(FACEBOOK)}/>
                <AiOutlineTwitter className="circle-icon" onClick={()=>window.open(TWITTER)}/>
                <AiOutlineInstagram className="circle-icon" onClick={()=>window.open(INSTAGRAM)}/>
                <AiFillYoutube className="circle-icon" onClick={()=>window.open(YOUTUBE)}/>
              </div>
            </div>

            
              
              <List className="text-white">
                <ListSubheader>
                    <strong className="text-white">Company</strong> 
                </ListSubheader>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
              </List>

              <List className="text-white">
                <ListSubheader>
                    <strong className="text-white">Company</strong> 
                </ListSubheader>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
              </List>

              <List className="text-white">
                <ListSubheader>
                    <strong className="text-white">Company</strong> 
                </ListSubheader>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
              </List>

              <List className="text-white">
                <ListSubheader>
                    <strong className="text-white">Company</strong> 
                </ListSubheader>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
                <ListItem>
                  Product
                </ListItem>
              </List>


            

            </Col>

           
           <Col xs={12}>
              <p className="text-center text-white"> Author rights </p>
           </Col>

            
          </SplitContainer>
     
      </footer>
      
    </div>
  );
}

export default App;
