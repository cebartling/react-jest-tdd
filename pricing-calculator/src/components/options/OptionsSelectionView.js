import React, {Component} from "react";
import {Panel, Row, Col} from "react-bootstrap";
import "./OptionsSelectionView.css";

class OptionsSelectionView extends Component {
    render() {
        return (
            <Panel>
                <Row>
                    <Col md={12} className="">
                        Select an option...
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default OptionsSelectionView;
