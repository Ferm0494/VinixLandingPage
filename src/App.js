import React from 'react';
import {Header,AppleStoreButton,GoogleStoreButton, GradientButton} from './components'
import {SplitContainer} from './containers'
import {IOS_URL,ANDROID_URL} from './utils/const'
import {Col} from 'react-bootstrap'
import Image1 from './assets/1stImage.png'
import Image2 from './assets/2ndImage.png'
import Image3 from './assets/3rdImage.png'
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    <div>
      <Header/>
      <div>
        <SplitContainer>
          <Col xs={1} className="gray-background">
          </Col>
         <Col className="d-flex flex-column justify-content-center align-items-center gray-background ">
         <h3>
                  Header title
         </h3>
                  Nisi sint ipsum laborum sunt nulla quis sit cupidatat voluptate. Id pariatur quis cupidatat duis amet pariatur do anim eiusmod ullamco culpa aute nulla proident. Adipisicing eiusmod labore deserunt adipisicing cupidatat ex. Occaecat duis id duis irure tempor magna qui sit fugiat exercitation minim eu laboris sunt.

                  Deserunt amet excepteur nostrud culpa eiusmod. Eiusmod ullamco reprehenderit non dolor sit est mollit ut aliquip enim laboris cillum labore. Ad eiusmod sit aliquip et cupidatat dolor labore amet aliquip occaecat. Laboris elit dolore aute qui elit id in enim anim esse est laborum non.

                  Ullamco velit aliqua cupidatat est magna exercitation ea id. Est ipsum sint elit aliqua aliqua Lorem duis consectetur ad cupidatat sunt. Reprehenderit cupidatat dolor proident consequat eiusmod fugiat tempor ad veniam. Proident nostrud nulla commodo occaecat ullamco labore do consectetur proident laboris.    
         </Col>

         <Col className="d-flex flex-column justify-content-start gray-background align-items-end p-0 ">
            <img src={Image1} className="image1"/>
         </Col>
        </SplitContainer>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#E0E0E3" fill-opacity="0.5" d="M0,192L48,208C96,224,192,256,288,229.3C384,203,480,117,576,112C672,107,768,181,864,181.3C960,181,1056,107,1152,101.3C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
           </svg>     
      </div>
      <SplitContainer>
            <Col className="d-flex justify-content-center">
                <img src={Image2} className="image2"/>
            </Col>
            <Col>
            <h2>Header Title</h2>
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
      <SplitContainer>
        <Col>
          <div id="waved" className="w-100 h-100 d-flex justify-content-between flex-column align-items-center" >
              <Col className="mt-5 pt-5  d-flex justify-content-around align-items-start" md={4} >
                  <GradientButton title="Windows" />
                  <GradientButton title="Linux" />
                  <GradientButton title="MacOS"/>
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column " md={6}>
                <h3>Pricing Plans </h3>
                <p> Ad ex ad dolore pariatur. Dolore aute commodo nostrud incididunt sunt. Incididunt fugiat ex duis elit incididunt officia reprehenderit eu. Aliqua elit cupidatat Lorem commodo adipisicing nisi aliqua. In excepteur in nisi deserunt irure amet consectetur id.

                      Enim cupidatat quis enim ea nostrud adipisicing consequat aliquip anim sunt voluptate. Anim voluptate eu eu consectetur commodo eiusmod qui amet cupidatat duis incididunt consequat cupidatat. Consequat ad veniam voluptate magna ipsum non labore do dolore dolor quis aliqua eu. Duis reprehenderit fugiat adipisicing pariatur voluptate laboris laboris esse consectetur velit. Ipsum consequat veniam velit consectetur adipisicing irure nostrud laboris. Aliquip ex nisi nostrud cillum qui velit cupidatat duis.

                      Non esse exercitation ullamco ea eu aliquip. Cillum nostrud amet anim veniam sunt amet pariatur eiusmod in quis ea Lorem id. Duis elit enim irure officia veniam adipisicing eiusmod magna aliqua dolor in nulla duis. Sint eu voluptate ipsum incididunt est velit. Deserunt nostrud deserunt est sint officia do amet qui. Consectetur elit officia laboris reprehenderit fugiat dolore do eiusmod sint cillum aliquip reprehenderit commodo eu. </p>
              </Col>
          </div>
        </Col>
      </SplitContainer>
    </div>
  );
}

export default App;
