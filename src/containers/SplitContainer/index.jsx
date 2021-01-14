import React from 'react';
import {Row} from 'react-bootstrap'
import './index.scss'

const SplitContainer = ({children}) => {
    return (
        <Row className="cont">
            {children}
        </Row>
        
    );
}

export default SplitContainer;
