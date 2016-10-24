import React, {Component} from "react";
import {Panel, Row, Col} from "react-bootstrap";
import "./AppServerFormView.css";

class AppServerFormView extends Component {
    render() {
        return (
            <Panel>
                <Row>
                    <Col md={12} className="">
                        App Server options
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default AppServerFormView;
