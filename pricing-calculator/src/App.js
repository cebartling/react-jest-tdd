import React, {Component} from "react";
import "./App.css";
import {Grid, Row, Col, Panel, PageHeader} from "react-bootstrap";
import PricingCalculatorView from "./components/calculator/PricingCalculatorView";

class App extends Component {
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
                                Main content
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

export default App;
