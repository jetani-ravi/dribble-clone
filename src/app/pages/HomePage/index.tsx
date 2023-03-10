import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import avtar1 from '../../../assets/images/user1.jpg';
import avtar2 from '../../../assets/images/user2.png';
import avtar3 from '../../../assets/images/user3.png';
import avtar4 from '../../../assets/images/user4.png';
import avtar5 from '../../../assets/images/user5.png';
import avtar6 from '../../../assets/images/user6.png';
import avtar7 from '../../../assets/images/user7.png';
import profilecard from '../../../assets/images/profile-card.svg';
import cardPortfolio1 from '../../../assets/images/b1.jpg';
import cardPortfolio2 from '../../../assets/images/b2.jpg';
import cardPortfolio3 from '../../../assets/images/b3.jpg';
import cardPortfolio4 from '../../../assets/images/b4.jpg';
import cardPortfolio5 from '../../../assets/images/b5.jpg';
import cardPortfolio6 from '../../../assets/images/b6.jpg';
import cardPortfolio7 from '../../../assets/images/b7.jpg';
import cardPortfolio8 from '../../../assets/images/b8.jpg';
import cardPortfolio9 from '../../../assets/images/b9.jpg';
import cardPortfolio10 from '../../../assets/images/b10.jpg';
import cardPortfolio11 from '../../../assets/images/b11.jpg';
import cardPortfolio12 from '../../../assets/images/b12.jpg';
import cardPortfolio13 from '../../../assets/images/b13.jpg';
import cardPortfolio14 from '../../../assets/images/b14.jpg';
import cardPortfolio15 from '../../../assets/images/b15.jpg';
import cardPortfolio16 from '../../../assets/images/b16.jpg';
import cardPortfolio17 from '../../../assets/images/b17.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Pagination from 'react-bootstrap/Pagination';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export function HomePage() {
  return (
    <>
      <Container fluid>
        <div className="page-content">
          <div className="gray-bg rounded-3 p-5">
            <Tabs
              defaultActiveKey="all"
              id="justify-tab-example"
              className="mb-5"
            >
              <Tab eventKey="all" title="All">
                <Row>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar1} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Ajay Pawriya</h3>
                            <p className="text-truncate">
                              A problem well understood is a problem half solved
                            </p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>Product Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Prototyper</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Researcher</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio1} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio2} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar2} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Prinyanka Dine</h3>
                            <p className="text-truncate">Interior Designer</p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>Architect</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Prototyper</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Researcher</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio3} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio4} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar3} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Lisa Perry</h3>
                            <p className="text-truncate">
                              User Experience Designer
                            </p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>User researcher</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Prototyper</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Researcher</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio5} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio6} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar1} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Ajay Pawriya</h3>
                            <p className="text-truncate">
                              A problem well understood is a problem half solved
                            </p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>Product Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Prototyper</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Researcher</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio7} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio8} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar4} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Ajay Pawriya</h3>
                            <p className="text-truncate">Branding Expert</p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>BRand Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Prototyper</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Researcher</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio9} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio10} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar5} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Vikram Kaushal</h3>
                            <p className="text-truncate">Branding Expert</p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>BRand Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Web Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Content creator</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio11} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio12} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar6} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Mylz Blake</h3>
                            <p className="text-truncate">Website Designer</p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>BRand Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Web Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Content creator</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio13} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio14} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <Card className="user-card border-0 ">
                      <Card.Body className="p-0">
                        <div className="user-profile">
                          <div className="profile-img">
                            <img src={avtar7} alt="User" />
                          </div>
                          <div className="profile-block">
                            <h3>Barbiana Liu</h3>
                            <p className="text-truncate">
                              Crafting visual experience for modern brands.
                            </p>
                            <Button
                              variant="link"
                              className="user-profile-view"
                            >
                              <img
                                src={profilecard}
                                alt="Profile Card"
                                className="me-1"
                              />
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <div className="designation-tag">
                          <div className="tag">
                            <span>
                              <span>BRand Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Web Designer</span>
                            </span>
                          </div>
                          <div className="tag">
                            <span>
                              <span>Content creator</span>
                            </span>
                          </div>
                        </div>
                        <div className="user-project">
                          <ul>
                            <li>
                              <img src={cardPortfolio17} alt="Portfolio" />
                            </li>
                            <li>
                              <img src={cardPortfolio16} alt="Portfolio" />
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <div className="my-pagination">
                  <Button variant="light">
                    <FiArrowLeft />
                    <span>Previous</span>
                  </Button>
                  <ul>
                    <li>
                      <a href="#link" className="active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#link">2</a>
                    </li>
                    <li>
                      <a href="#link">3</a>
                    </li>
                    <li>
                      <a href="#link">.</a>
                    </li>
                    <li>
                      <a href="#link">.</a>
                    </li>
                    <li>
                      <a href="#link">.</a>
                    </li>
                    <li>
                      <a href="#link">8</a>
                    </li>
                    <li>
                      <a href="#link">9</a>
                    </li>
                    <li>
                      <a href="#link">10</a>
                    </li>
                  </ul>
                  <Button variant="light">
                    <span>Next</span>
                    <FiArrowRight />
                  </Button>
                </div>
              </Tab>
              <Tab eventKey="design" title="Design"></Tab>
              <Tab eventKey="socialmedia" title="Social Media"></Tab>
              <Tab eventKey="videoediting" title="Video Editing"></Tab>
              <Tab eventKey="uiuxdesigner" title="Ui/Ux Designer"></Tab>
              <Tab
                eventKey="adobecreativesuite"
                title="Adobe Creative Suite"
              ></Tab>
              <Tab eventKey="brandexpert" title="Brand Expert"></Tab>
              <Tab eventKey="visualdesigner" title="Visual Designer"></Tab>
              <Tab eventKey="aftereffects" title="After Effects"></Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  );
}
