import React, {Component} from "react";
import {Panel, Row, Col} from "react-bootstrap";
import "./NoSqlSystemFormView.css";

class NoSqlSystemFormView extends Component {
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

export default NoSqlSystemFormView;
