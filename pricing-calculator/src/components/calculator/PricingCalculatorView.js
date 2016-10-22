import React, {Component} from "react";
import {Panel, Row, Col} from "react-bootstrap";
import "./PricingCalculatorView.css";

class PricingCalculatorView extends Component {
    render() {
        return (
            <Panel>
                <Row>
                    <Col md={12} className="pricing-calculator__your-estimate">
                        Your estimate
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="pricing-calculator__line-item-name">
                        App Server
                    </Col>
                    <Col md={4} className="pricing-calculator__line-item-price">
                        $55.60
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="pricing-calculator__line-item-name">
                        Relational Database Server
                    </Col>
                    <Col md={4} className="pricing-calculator__line-item-price">
                        $12.00
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="pricing-calculator__line-item-name">
                        Message Queuing
                    </Col>
                    <Col md={4} className="pricing-calculator__line-item-price">
                        $7.00
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="pricing-calculator__total-price">
                        $74.60
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default PricingCalculatorView;
