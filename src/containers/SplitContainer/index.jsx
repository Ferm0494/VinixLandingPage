import React from 'react';
import {Row,Container} from 'react-bootstrap'
import './index.scss'

const SplitContainer = ({children,className}) => {
    return (
        <Container className={className?  `${className} px-0` : 'cont m-0 px-0'} fluid>
            <Row className="m-0" >
                {children}
            </Row>

        </Container>
        
        
    );
}

export default SplitContainer;
