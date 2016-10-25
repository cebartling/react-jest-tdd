import React, {Component} from "react";
import "./AppLayout.css";
import {Grid, Row, Col, Panel, PageHeader} from "react-bootstrap";
import PricingCalculatorView from "./calculator/PricingCalculatorView";

class AppLayout extends Component {

    render() {
        return (
            <div>
                <PageHeader>
                    Pricing Calculator
                </PageHeader>
                <Grid>
                    <Row className="">
                        <Col xs={12} md={8}>
                            <Panel>
                                {this.props.children}
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
                            <PricingCalculatorView></PricingCalculatorView>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default AppLayout;
