import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import classes from './Admin.module.css';

class Admin extends Component {

  render() {
    return(
      <div className={classes.Admin}>
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Email must be an admin.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row> 
          </Form>
        </Container>
      </div>
    );
  }
}

export default Admin;