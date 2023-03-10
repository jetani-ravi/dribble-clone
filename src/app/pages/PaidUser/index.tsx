import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import w1 from '../../../assets/images/w1.jpg';
import w2 from '../../../assets/images/w2.jpg';
import w3 from '../../../assets/images/w3.jpg';
import w4 from '../../../assets/images/w4.jpg';
import w5 from '../../../assets/images/w5.jpg';
import w6 from '../../../assets/images/w6.jpg';
import timer1 from '../../../assets/images/timer1.png';
import Illustrator from '../../../assets/images/Illustrator_icon.png';
import photoshop from '../../../assets/images/photoshop_icon.png';
import figma from '../../../assets/images/figma.png';
import timerstart from '../../../assets/images/timerstart.png';
import dribbble from '../../../assets/images/dribbble.png';
import behance from '../../../assets/images/be.png';
import instagram from '../../../assets/images/instagram.png';
import mapMarker from '../../../assets/images/map-marker-blue.png';
import avtar from '../../../assets/images/avtar-hd.png';
import userbadge from '../../../assets/images/verify.svg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export function PaidUserPage() {
  return (
    <>
      <Container fluid>
        <div className="page-content">
          <div className="gray-bg rounded-3 p-5">
            <Row>
              <Col xs={12} md={4} lg={3}>
                <div className="user-details-profile paid-user bg-white p-4">
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
                  <div className="user-social active">
                    <ul>
                      <li>
                        <a href="">
                          <img src={instagram} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src={behance} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src={dribbble} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="user-hire">
                    <h3 className="">Hire Me</h3>
                    <ul>
                      <li>
                        <img src={timer1} />
                        <span className="me-1">Short Term Project</span>
                      </li>
                      <li>
                        <img src={timerstart} />
                        <span className="me-1">
                          Long Term Project
                          <small>Availability: Within the next few weeks</small>
                        </span>
                      </li>
                    </ul>
                    <Button variant="primary" className="send-offer">
                      Send Custom Offer
                    </Button>
                  </div>
                  <div className="user-details-more">
                    <h3>About</h3>
                    <p>
                      As a UI/UX designer, I specialize in creating visually
                      stunning and user-friendly digital experiences. With a
                      passion for both design and technology, I approach every
                      project with a user-centered mindset, striving to create
                      intuitive interfaces and streamlined user flows that
                      prioritize the needs of the end-users.
                    </p>
                    <p>
                      My skills and expertise extend across a range of design
                      disciplines, including user research, wireframing,
                      prototyping, visual design, and design systems. I am
                      committed to staying up-to-date with the latest design
                      trends and technologies, ensuring that the digital
                      products I design are both aesthetically pleasing and
                      technologically advanced.
                    </p>
                    <p>
                      I believe that great design is not just about creating
                      beautiful visuals, but about solving problems and
                      delivering value to users. With that in mind, I am
                      dedicated to collaborating closely with clients and
                      stakeholders to understand their unique needs and goals,
                      and delivering designs that meet or exceed their
                      expectations.
                    </p>
                    <p>
                      Whether working on a mobile app, website, or other digital
                      product, I am committed to delivering exceptional results
                      that help my clients achieve their business objectives and
                      create memorable user experiences.
                    </p>
                  </div>
                  <div className="user-details-education">
                    <h3>Education</h3>
                    <div className="user-degree">
                      <p>
                        <strong>Bachelors of Arts</strong>
                      </p>
                      <p>University of Education, Lahore</p>
                      <p>(2016-2022)</p>
                    </div>
                    <div className="user-degree">
                      <p>
                        <strong>Masters in Brand strategy</strong>
                      </p>
                      <p>University of Education, Lahore</p>
                      <p>(2022)</p>
                    </div>
                  </div>
                  <div className="user-details-education">
                    <h3>Skills</h3>
                    <div className="user-skills">
                      <ul>
                        <li>
                          <img src={Illustrator} alt="" />
                        </li>
                        <li>
                          <img src={photoshop} alt="" />
                        </li>
                        <li>
                          <img src={figma} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="user-details-education">
                    <h3>Certifications</h3>
                    <div className="user-degree">
                      <p>
                        <strong>Ui/Ux Certified</strong>
                      </p>
                      <p>Coursera, Ux Design course</p>
                      <p>April, 2020</p>
                    </div>
                    <div className="user-degree">
                      <p>
                        <strong>Brand Expert by Coursera</strong>
                      </p>
                      <p>Branding and Positioning of the product</p>
                      <p>June, 2020</p>
                    </div>
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
