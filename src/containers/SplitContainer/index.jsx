import React from 'react';
import {Row} from 'react-bootstrap'
import './index.scss'

const SplitContainer = ({children,className}) => {
    return (
        <Row className={className?  className : 'cont'}>
            {children}
        </Row>
        
    );
}

export default SplitContainer;
