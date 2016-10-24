import React, {Component} from "react";
import {Panel, Row, Col} from "react-bootstrap";
import "./DatabaseServerFormView.css";

class DatabaseServerFormView extends Component {
    render() {
        return (
            <Panel>
                <Row>
                    <Col md={12} className="">
                        Database Server options
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default DatabaseServerFormView;
