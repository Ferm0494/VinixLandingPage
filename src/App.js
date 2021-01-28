import React from 'react';
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
import {FaFacebookF,AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube,FaWindows,DiApple,FaLinux} from 'react-icons/all'





const App = () => {
  
  return (
    <div>
      {
        window.innerWidth > 767.98 ?<Header/> : null
      }
      <div>
        <SplitContainer className="cont gray-background m-0 px-0 d-lg-block d-flex  align-items-start" id="first-container">
         <Col className="d-md-block d-none"  xs={1} lg={2}/>
         <Col className=" d-flex flex-column justify-content-center mt-7 align-items-md-start" xs={8} md={5} lg={3} >
      
          <h2> Build and Connect Vinix Blast App </h2>   
          <p className="jumbo mb-4">In publishing and graphic desing, Lorem ipsum is a place holder text commonly used to demonstrate form of a document or a typeface</p>
          <GradientButton   title="Get Vinix Blast" />
        
                  
         </Col>

         <Col className=" d-none d-md-flex  justify-content-end px-0"  md={6} lg={7} >
            <img src={Image1} className="image1"/>
         </Col>
        </SplitContainer>
            
      </div>
      <div className=" grid-features container ">
            
                <img src={Image2} className="image2 "/>
            
            <div className="align-self-center">
            <h3>Vinix Blast Users</h3>
            <Row className="px-0">
              <Col lg={9}>
                  <p className="fw-bold">Ea nisi fugiat nostrud duis ss sdsdf tetur labore eiusmod amet et qui veniam cillum ullamc sdfsdf sdfsdo.</p> 
                  <p> Amet voluptate veniam alinostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt snsdooi osdoisid oidjosdij 
                    Occaecat qui sint ullamco quis duis cillum autit velit sint cinim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>
              </Col>
              
            </Row>

              <div className="d-flex w-100 mt-2">
               
              <AppleStoreButton url={IOS_URL}/>
              <GoogleStoreButton url={ANDROID_URL}/>
              
              </div>
              </div>
             
      </div>
      <SplitContainer className="medium-container mt-6  ">
        <Col md={1} lg={2}>
        </Col>
         <Col lg={8} md={10}>
         <Row>
          <Col lg={2}/>
          <Col lg={8}>
                  <h3 className="text-center">Vinix Blast Developers</h3>
                  <p className="pt-2 mb-0"> runt commodo consectetur ad idillum velit.
                  Do dolore amet magna magna non. Velit adipisicing ipsum deseruntt commodo adipisicing mollit cupidatat anim deserunt laborum. Sit velit sint cillum elit adipisicing nostrud. Commodo commodo adipisicing enim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.</p>
              
            </Col>
            <Col lg={2}/>
            <Col>
              <img src={Image3} className="position-absolute image2  w-100"/>
            </Col>

         </Row>
           
         </Col>
             
         <Col  md={1} lg={2}>
        </Col>
      </SplitContainer>
      <SplitContainer className="small-cont m-0">
        <Col id="waved">
          <div className="w-100 pt-4 d-flex justify-content-between flex-column align-items-md-center" >
              <Col className="pt-5 d-flex justify-content-around align-items-start buttons-container" xs={12} md={4} >
                  <GradientButton title="Windows" Logo={<FaWindows/>} onClick={()=>window.open(WINDOWS_INSTALLER)} />
                  <GradientButton title="Linux" Logo={<FaLinux/>}  onClick={()=>window.open(LINUX_INSTALLER)}/>
                  <GradientButton title="MacOS" Logo={<DiApple/>} onClick={()=>window.open(MAC_OS_INSTALLER)} />
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column pb-1 pt-5  mt-5 " md={8} lg={4}>
                <h3 className="mt-5">Pricing Plans </h3>
                <p className="text-center"> Ad ex ad da elit cupidatat Lorem commodo adipisicing nisi aliqua. In excepteur in nisi deserunt irure amet consectetur id.</p>
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
      <SplitContainer className="small-container my-md-4 my-2  d-flex flex-column justify-content-end  ">
       
             <Col  />
              <Col md={8} lg={4}>
                <h3 className="text-center">Vinix Features </h3>
                <p className="text-lg-center"> Ad ex ad dolore pariatur. Dolore aute commodo nostrud incididunt sunt. Incididunt fugiat ea. In excepteur in nisi deserunt irure amet consectetur id.</p>
              </Col>
              <Col/>
      </SplitContainer>
     <div  className="grid-features fixed-container container mb-md-5">
        <img src={Image4} className="image2" />
        <div className="align-self-center">
        
          <h4>Team Chat</h4>
          <p>Exercitation labore cupidatat et irure mollit nostrud aliquip anim laborum proident deserunt incididunt incididunt tempor. Veniam qui nulla nulla ex anim. Ullamco labore fugiat ex elit quis sit cupidatat deserunt proident exercitation exercitation veniam. Duis Lorem exercitation exercitation ullamco laboris officia ullamco. Cupidatat consectetur ad fugiat officia consequat irure esse ea irure ut sit ad. </p>
         
        </div>
        <div className="align-self-center">
        
          <h4>Text Messaging</h4>
          <p>Exercitation labore cupidatat et irure mollit nostrud aliquip anim laborum proident deserunt incididunt incididunt tempor. Veniam qui nulla nulla ex anim. Ullamco labore fugiat ex elit quis sit cupidatat deserunt proident exercitation exercitation veniam. Duis Lorem exercitation exercitation ullamco laboris officia ullamco. Cupidatat consectetur ad fugiat officia consequat irure esse ea irure ut sit ad. </p>
         
        </div>
        <img src={Image5} className="image2"/>
        <img src={Image6} className="image2" />
        <div className="align-self-center">
        
          <h4>Voice Video Calls</h4>
          <p>Exercitation labore cupidatat et irure mollit nostrud aliquip anim laborum proident deserunt incididunt incididunt tempor. Veniam qui nulla nulla ex anim. Ullamco labore fugiat ex elit quis sit cupidatat deserunt proident exercitation exercitation veniam. Duis Lorem exercitation exercitation ullamco laboris officia ullamco. Cupidatat consectetur ad fugiat officia consequat irure esse ea irure ut sit ad. </p>
         
        </div>

        <div className="align-self-center">
        
          <h4>Text Messaging</h4>
          <p>Exercitation labore cupidatat et irure mollit nostrud aliquip anim laborum proident deserunt incididunt incididunt tempor. Veniam qui nulla nulla ex anim. Ullamco labore fugiat ex elit quis sit cupidatat deserunt proident exercitation exercitation veniam. Duis Lorem exercitation exercitation ullamco laboris officia ullamco. Cupidatat consectetur ad fugiat officia consequat irure esse ea irure ut sit ad. </p>
         
        </div>
        <img src={Image7} className="image2 mx-auto"/>
     </div>
   
     
      <SplitContainer className="fixed-container container">
        
        <Col xs={12} id="info-matrix" className="rounded d-flex p-4 flex-lg-row flex-column ">
          <Col xs={12}  lg={6}>
              <h4 className="text-white ">A part of the Matrix ecosystem</h4>
              <p className="text-white"> officia mollit laboris id cillum. Nostrud tempor incididunt ex do dolor Lorem nostrud tempor. Laboris nostrud ea quis exercitation nulla enim consectetur Lorem officia veniam anim. Esse excepteur fugiat nulla velit labore duis tempor do consequat ea.

              Par. Eiusmod cupidatat do officia eiusmod esse pariatur do pariatur pariatur.</p>
          </Col>
          <Col className="d-flex justify-content-md-end justify-content-start align-items-end  " lg={6} >
          <img src={"https://matrix.org/images/matrix-logo-white.svg"} className="mr-3 pr-2 mb-2" />
          <GradientButton className="gray-button" title="Matrix.org" onClick={()=> window.open(MATRIX_URL) }/>
          </Col>

        </Col>
      
      </SplitContainer>
      <SplitContainer className="medium-container mt-4 d-flex flex-column justify-content-center ali">
          <Col lg={4} md={2}/>
          <Col className="d-md-flex flex-column align-items-center justify-content-around  small-container ">
            <h3>Ready to get Started?</h3>
            <p >Cupidatat exercitation qui dolor aliqua voluptate cillum voluptate pariatur.Occaecat pariatur aute ad aute eiusmod.  aute ad aute eiusmod</p>
            <GradientButton title="Get Vinix Blast" className="gradient-button"/>

          </Col>
          <Col lg={4} md={2}/>
      </SplitContainer>
      <footer>
      <SplitContainer className="small-container h-100 d-md-flex flex-column justify-content-end ">
            <Col className="d-md-flex justify-content-around px-0 py-4 grid-footer" >
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

            
          </SplitContainer>
     

      </footer>
      
    </div>
  );
}

export default App;
