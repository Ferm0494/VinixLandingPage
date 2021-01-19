import React from 'react';
import {Header,AppleStoreButton,GoogleStoreButton, GradientButton} from './components'
import {SplitContainer} from './containers'
import {IOS_URL,ANDROID_URL} from './utils/const'
import {Col} from 'react-bootstrap'
import Image1 from './assets/1stImage.png'
import Image2 from './assets/2ndImage.png'
import Image3 from './assets/3rdImage.png'
import Image4 from './assets/4thImage.png'
import Image5 from './assets/5thImage.png'
import Image6 from './assets/6thImage.png'
import Image7 from './assets/7thImage.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {List,ListItem,ListItemIcon,ListItemText, ListSubheader} from '@material-ui/core'
import {CheckCircleOutline} from '@material-ui/icons'
import {FaFacebookF,AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube} from 'react-icons/all'





const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <div>
        <SplitContainer className="cont gray-background m-0 px-0">
         <Col className="d-md-block d-none" md={1}/>
         <Col className=" d-flex flex-column justify-content-center align-items-start" md={5} lg={3} >
      
         <h2> Build and Connect Vinix Blast App </h2>   
          <p>In publishing and graphic desing, Lorem ipsum is a place holder text commonly used to demonstrate form of a document or a typeface</p>
          <GradientButton   title="Get Vinix Blast" />
        
                  
         </Col>

         <Col className="d-flex justify-content-end px-0" md={6} lg={7} >
            <img src={Image1} className="image1"/>
         </Col>
        </SplitContainer>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#E0E0E3" fill-opacity="0.5" d="M0,192L48,208C96,224,192,256,288,229.3C384,203,480,117,576,112C672,107,768,181,864,181.3C960,181,1056,107,1152,101.3C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
           </svg>     
      </div>
      <SplitContainer>
            <Col className="d-flex justify-content-center" md={6}>
                <img src={Image2} className="image2"/>
            </Col>
            <Col md={4}>
            <h3>Header Title</h3>
              Amet voluptate veniam aliquip pariatur qui amet. Pariatur consectetur minim laboris elit sunt aute elit qui exercitation. Consequat qui pariatur nostrud ut adipisicing minim proident voluptate enim minim ut cillum non. Sint duis anim nostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt.

              Occaecat qui sint ullamco quis duis cillum aute id consequat id. Pariatur sunt excepteur irure ex est aliqua laborum ullamco id minim ad enim incididunt laboris. Nisi labore aliquip cillum deserunt cillum exercitation non culpa laboris pariatur amet esse ex voluptate. Eu est dolor est deserunt commodo consectetur ad id ipsum. Velit non laborum nisi cupidatat do amet culpa consequat cupidatat fugiat. Non officia ad aliquip eiusmod exercitation nostrud cillum velit.

              Do dolore amet magna magna non. Velit adipisicing ipsum deserunt culpa sit commodo adipisicing mollit cupidatat anim deserunt laborum. Sit velit sint cillum elit adipisicing nostrud. Commodo commodo adipisicing enim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.

              <div className="d-flex w-100 buttons-container">
               
              <AppleStoreButton url={IOS_URL}/>
              <GoogleStoreButton url={ANDROID_URL}/>
              
              </div>
              </Col>
      </SplitContainer>
      <SplitContainer>
        <Col md={3}>
        </Col>
         <Col md={6}>
            <div>
                <h3>Header Title</h3>
                >Tempor elit exercitation laboris consectetur velit pariatur. Incididunt ea cillum veniam sint minim sint reprehenderit veniam in enim. Anim dolor fugiat quis fugiat eu amet quis proident aute nostrud. Minim eiusmod dolore qui enim tempor officia.

                Commodo tempor minim nulla officia qui eiusmod ut consectetur eu excepteur consequat. Velit ex voluptate tempor Lorem voluptate cupidatat non ex nostrud. Dolor magna excepteur fugiat commodo occaecat aliqua aute incididunt est proident labore ullamco incididunt labore.

                Proident culpa nostrud ex occaecat cillum enim. Et irure mollit Lorem culpa esse. Velit enim cupidatat Lorem proident et culpa officia magna culpa est duis laboris est. Cillum veniam Lorem duis duis. Incididunt qui duis minim eiusmod cupidatat.
              <div className="position-absolute mt-5">
                <img src={Image3} className="w-100"/>
              </div> 
            </div>
         </Col> 
         <Col md={3}>
        </Col>
      </SplitContainer>
      <SplitContainer className="cont m-0">
        <Col id="waved">
          <div className="w-100 h-100 d-flex justify-content-between flex-column align-items-center" >
              <Col className="mt-5 pt-5  d-flex justify-content-around align-items-start" md={4} >
                  <GradientButton title="Windows" />
                  <GradientButton title="Linux" />
                  <GradientButton title="MacOS"/>
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column " md={6}>
                <h3>Pricing Plans </h3>
                <p> Ad ex ad dolore pariatur. Dolore aute commodo nostrud incididunt sunt. Incididunt fugiat ex duis elit incididunt officia reprehenderit eu. Aliqua elit cupidatat Lorem commodo adipisicing nisi aliqua. In excepteur in nisi deserunt irure amet consectetur id.</p>
              </Col>
          </div>
        </Col>
      </SplitContainer>
      <SplitContainer className=" fixed-container">
        <Col className="d-flex justify-content-center">
          <div className="grid-container">
          {/* FIRST CARD */}
          <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
                <h5>Free</h5>
                <p>Small text...</p>
                <h4>$0.00<span>/month</span></h4>
                <hr/>
                <List>
                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Title1" className="w-100 rounded gradient-button"/>
            </div>
            {/* SECOND CARD */}
            <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
                <h5>Free</h5>
                <p>Small text...</p>
                <h4>$0.00<span>/month</span></h4>
                <hr/>
                <List>
                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Title1" className="w-100 rounded gradient-button"/>
            </div>

            {/* THIRD CARD */}
            <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
                <h5>Free</h5>
                <p>Small text...</p>
                <h4>$0.00<span>/month</span></h4>
                <hr/>
                <List>
                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Title1" className="w-100 rounded gradient-button"/>
            </div>
            {/* FOURTH CARD */}
            <div>
            <div className="p-2 pricing-card card shadow-sm border-bottom-0">
                <h5>Free</h5>
                <p>Small text...</p>
                <h4>$0.00<span>/month</span></h4>
                <hr/>
                <List>
                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                  <ListItem className="p-0">
                    <ListItemIcon>
                      <CheckCircleOutline/>
                      <ListItemText secondary="Option 1 text goes here.Exercitation consequat duis est laborum velit eu pariatur laborum ullamco eiusmod amet." className="m-0 pl-2"/>
                    </ListItemIcon>
                  </ListItem>

                </List>
              </div>
              <GradientButton title="Title1" className="w-100 rounded gradient-button"/>
            </div>
          </div>
        </Col>

      </SplitContainer>
      <SplitContainer className="cont d-flex align-items-center">
       
             <Col md={3}/>
              <Col className="d-flex  align-items-center flex-column " md={6}>
                <h3>Vinix Features </h3>
                <p> Ad ex ad dolore pariatur. Dolore aute commodo nostrud incididunt sunt. Incididunt fugiat ex duis elit incididunt officia reprehenderit eu. Aliqua elit cupidatat Lorem commodo adipisicing nisi aliqua. In excepteur in nisi deserunt irure amet consectetur id.</p>
              </Col>
              <Col md={3}/>
      </SplitContainer>
      <SplitContainer>
            <Col className="d-flex justify-content-center" md={6}>
                <img src={Image4} className="image2"/>
            </Col>
            <Col md={4}>
            <h3>Header Title</h3>
              Amet voluptate veniam aliquip pariatur qui amet. Pariatur consectetur minim laboris elit sunt aute elit qui exercitation. Consequat qui pariatur nostrud ut adipisicing minim proident voluptate enim minim ut cillum non. Sint duis anim nostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt.

              Occaecat qui sint ullamco quis duis cillum aute id consequat id. Pariatur sunt excepteur irure ex est aliqua laborum ullamco id minim ad enim incididunt laboris. Nisi labore aliquip cillum deserunt cillum exercitation non culpa laboris pariatur amet esse ex voluptate. Eu est dolor est deserunt commodo consectetur ad id ipsum. Velit non laborum nisi cupidatat do amet culpa consequat cupidatat fugiat. Non officia ad aliquip eiusmod exercitation nostrud cillum velit.

              Do dolore amet magna magna non. Velit adipisicing ipsum deserunt culpa sit commodo adipisicing mollit cupidatat anim deserunt laborum. Sit velit sint cillum elit adipisicing nostrud. Commodo commodo adipisicing enim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.

              </Col>
      </SplitContainer>
      <SplitContainer className="cont pt-3">
            <Col md={1}/>
            <Col md={4}>
            <h3>Header Title</h3>
              Amet voluptate veniam aliquip pariatur qui amet. Pariatur consectetur minim laboris elit sunt aute elit qui exercitation. Consequat qui pariatur nostrud ut adipisicing minim proident voluptate enim minim ut cillum non. Sint duis anim nostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt.

              Occaecat qui sint ullamco quis duis cillum aute id consequat id. Pariatur sunt excepteur irure ex est aliqua laborum ullamco id minim ad enim incididunt laboris. Nisi labore aliquip cillum deserunt cillum exercitation non culpa laboris pariatur amet esse ex voluptate. Eu est dolor est deserunt commodo consectetur ad id ipsum. Velit non laborum nisi cupidatat do amet culpa consequat cupidatat fugiat. Non officia ad aliquip eiusmod exercitation nostrud cillum velit.

              Do dolore amet magna magna non. Velit adipisicing ipsum deserunt culpa sit commodo adipisicing mollit cupidatat anim deserunt laborum. Sit velit sint cillum elit adipisicing nostrud. Commodo commodo adipisicing enim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.
              </Col>
              <Col className="d-flex justify-content-center" md={6}>
                <img src={Image5} className="image2"/>
            </Col>
      </SplitContainer>
      <SplitContainer className="cont pt-3">
            <Col md={1}/>
            <Col  md={6}>
                <img src={Image6} className="image2"/>
            </Col>
            <Col md={4}>
            <h3>Header Title</h3>
              Amet voluptate veniam aliquip pariatur qui amet. Pariatur consectetur minim laboris elit sunt aute elit qui exercitation. Consequat qui pariatur nostrud ut adipisicing minim proident voluptate enim minim ut cillum non. Sint duis anim nostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt.

              Occaecat qui sint ullamco quis duis cillum aute id consequat id. Pariatur sunt excepteur irure ex est aliqua laborum ullamco id minim ad enim incididunt laboris. Nisi labore aliquip cillum deserunt cillum exercitation non culpa laboris pariatur amet esse ex voluptate. Eu est dolor est deserunt commodo consectetur ad id ipsum. Velit non laborum nisi cupidatat do amet culpa consequat cupidatat fugiat. Non officia ad aliquip eiusmod exercitation nostrud cillum velit.

              Do dolore amet magna magna non. Velit adipisicing ipsum deserunt culpa sit commodo adipisicing mollit cupidatat anim deserunt laborum. Sit velit sint cillum elit adipisicing nostrud. Commodo commodo adipisicing enim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.

              </Col>
      </SplitContainer>
      <SplitContainer className="cont pt-3">
            <Col md={1}/>
            <Col md={4}>
            <h3>Header Title</h3>
              Amet voluptate veniam aliquip pariatur qui amet. Pariatur consectetur minim laboris elit sunt aute elit qui exercitation. Consequat qui pariatur nostrud ut adipisicing minim proident voluptate enim minim ut cillum non. Sint duis anim nostrud proident esse. In consectetur dolor id non sint laboris non aliquip incididunt.

              Occaecat qui sint ullamco quis duis cillum aute id consequat id. Pariatur sunt excepteur irure ex est aliqua laborum ullamco id minim ad enim incididunt laboris. Nisi labore aliquip cillum deserunt cillum exercitation non culpa laboris pariatur amet esse ex voluptate. Eu est dolor est deserunt commodo consectetur ad id ipsum. Velit non laborum nisi cupidatat do amet culpa consequat cupidatat fugiat. Non officia ad aliquip eiusmod exercitation nostrud cillum velit.

              Do dolore amet magna magna non. Velit adipisicing ipsum deserunt culpa sit commodo adipisicing mollit cupidatat anim deserunt laborum. Sit velit sint cillum elit adipisicing nostrud. Commodo commodo adipisicing enim proident laborum nostrud occaecat Lorem nisi exercitation pariatur ad Lorem tempor.
              </Col>
              <Col className="d-flex justify-content-end " md={6}>
                <img src={Image7} className="image2"/>
            </Col>
      </SplitContainer>
      <SplitContainer className="small-container">
        <Col md={1}/>
        <Col md={10} id="info-matrix" className="rounded d-flex p-4 ">
          <Col>
              <h5 className="text-white ">A part of the Matrix ecosystem</h5>
              <p className="text-white"> officia mollit laboris id cillum. Nostrud tempor incididunt ex do dolor Lorem nostrud tempor. Laboris nostrud ea quis exercitation nulla enim consectetur Lorem officia veniam anim. Esse excepteur fugiat nulla velit labore duis tempor do consequat ea.

              Par. Eiusmod cupidatat do officia eiusmod esse pariatur do pariatur pariatur.</p>
          </Col>
          <Col className="d-flex justify-content-end align-items-end" >
          <GradientButton className="gray-button" title="Matrix.org"/>
          </Col>

        </Col>
        <Col md={1}/>
      </SplitContainer>
      <SplitContainer className="small-container mt-4">
          <Col md={4}/>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h3>Ready to get Started? </h3>
            <p className="px-5 py-4">Cupidatat exercitation qui dolor aliqua voluptate cillum voluptate pariatur.Occaecat pariatur aute ad aute eiusmod.  aute ad aute eiusmod</p>
            <GradientButton title="Get Vinix Blast" className="gradient-button"/>

          </Col>
          <Col md={4}/>
      </SplitContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <linearGradient id="my-cool-gradient" x2="1" y2="1" gradientTransform="rotate(335)">
            <stop offset="0%" stop-color="#af2d8c" />
            <stop offset="40%" stop-color="#af2d8c" />
            <stop offset="60%" stop-color="#5177b7" />
            <stop offset="100%" stop-color="#5177b7" />
        </linearGradient>
        <path className="fer" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,186.7C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      <SplitContainer className="small-container main-background m-0">
        <Col className="d-flex justify-content-around px-0 py-4">
        <div className="d-flex flex-column h-50 justify-content-around">
          <h5 className="text-white">VINIX</h5>
          <div>
            <FaFacebookF className="circle-icon"/>
            <AiOutlineTwitter className="circle-icon"/>
            <AiOutlineInstagram className="circle-icon"/>
            <AiFillYoutube className="circle-icon"/>
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
    </div>
  );
}

export default App;
