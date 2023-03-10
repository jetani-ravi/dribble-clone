import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import profilecard from '../../../assets/images/profile-card.svg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Pagination from 'react-bootstrap/Pagination';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { userData } from './responseData';

export function HomePage() {
  const [totalPage, setTotalPage ] = useState(userData?.total_pages);
  const [userDataList, setUserDataList] = useState(userData?.data);
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
                  {
                    userDataList?.map(val => {
                      return <>
                        <Col xs={12} md={3} lg={3}>
                          <Card className="user-card border-0 ">
                            <Card.Body className="p-0">
                              <div className="user-profile">
                                <div className="profile-img">
                                  <img src={val?.profile} alt="User" />
                                </div>
                                <div className="profile-block">
                                  <h3>
                                    {val?.first_name + ' ' + val?.last_name}
                                  </h3>
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
                                      className="me-1" />
                                    View Profile
                                  </Button>
                                </div>
                              </div>
                              <div className="designation-tag">
                                {val?.skills?.map(item => (
                                  <div className="tag">
                                    <span>
                                      <span>{item}</span>
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <div className="user-project">
                                <ul>
                                  <li>
                                    <img
                                      src={val?.portfolio[0]}
                                      alt="Portfolio" />
                                  </li>
                                  <li>
                                    <img
                                      src={val?.portfolio[0]}
                                      alt="Portfolio" />
                                  </li>
                                </ul>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </>;
                    })
                  }
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
