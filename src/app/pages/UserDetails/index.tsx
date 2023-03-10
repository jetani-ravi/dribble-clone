import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import w1 from '../../../assets/images/w1.jpg';
import w2 from '../../../assets/images/w2.jpg';
import w3 from '../../../assets/images/w3.jpg';
import w4 from '../../../assets/images/w4.jpg';
import w5 from '../../../assets/images/w5.jpg';
import w6 from '../../../assets/images/w6.jpg';
import dribbble from '../../../assets/images/black-dribbble.png';
import behance from '../../../assets/images/black-be.png';
import instagram from '../../../assets/images/black-instagram.png';
import mapMarker from '../../../assets/images/map-gray.png';
import avtar from '../../../assets/images/avtar-hd.png';
import userbadge from '../../../assets/images/verify.svg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export function UserDetailsPage() {
  return (
    <>
      <Container fluid>
        <div className="page-content">
          <div className="gray-bg rounded-3 p-5">
            <Row>
              <Col xs={12} md={4} lg={3}>
                <div className="user-details-profile mt-80">
                  <div className="user-avtar">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="user-name-badge text-center">
                    <h2>
                      Ajay Pawriya <img src={userbadge} />
                    </h2>
                    <p>A problem well understood is a problem half solved</p>
                    <ul className="user-tag">
                      <li>
                        <span>Ui/Ux Designer</span>
                      </li>
                      <li>
                        <span>Product Designer</span>
                      </li>
                      <li>
                        <span>User Researcher</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button variant="primary" className="getintouch">
                      Get In Touch
                    </Button>
                  </div>
                  <p className="user-bio">
                    A successful UI UX designer is skilled in user-centered
                    design, design thinking, visual design, and has a deep
                    understanding of human-computer interaction.
                  </p>
                  <div className="user-location">
                    <img src={mapMarker} className="me-1"></img>
                    <span>Pakistan</span>
                  </div>
                  <div className="user-social">
                    <ul>
                      <li>
                        <img src={instagram} alt="" />
                      </li>
                      <li>
                        <img src={behance} alt="" />
                      </li>
                      <li>
                        <img src={dribbble} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={8} lg={9}>
                <Tabs
                  defaultActiveKey="work"
                  id="userdetailsTab"
                  className="user-details-tab mb-5"
                >
                  <Tab eventKey="work" title="Work">
                    <Row>
                      <Col xs={12} md={6} lg={6}>
                        <div className="user-work">
                          <img src={w1} alt="" />
                        </div>
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <div className="user-work">
                          <img src={w2} alt="" />
                        </div>
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <div className="user-work">
                          <img src={w3} alt="" />
                        </div>
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <div className="user-work">
                          <img src={w4} alt="" />
                        </div>
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <div className="user-work">
                          <img src={w5} alt="" />
                        </div>
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <div className="user-work">
                          <img src={w6} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="experience" title="Experience">
                    <Card className="border-0">
                      <Card.Body>
                        <h1 className="p-5 text-center">Working on it</h1>
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="education" title="Education">
                    <Card className="border-0">
                      <Card.Body>
                        <h1 className="p-5 text-center">Working on it</h1>
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="skills" title="Skills">
                    <Card className="border-0">
                      <Card.Body>
                        <h1 className="p-5 text-center">Working on it</h1>
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="certifications" title="Certifications">
                    <Card className="border-0">
                      <Card.Body>
                        <h1 className="p-5 text-center">Working on it</h1>
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="interests" title="Interests">
                    <Card className="border-0">
                      <Card.Body>
                        <h1 className="p-5 text-center">Working on it</h1>
                      </Card.Body>
                    </Card>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}
