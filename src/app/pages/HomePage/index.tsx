import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import profilecard from '../../../assets/images/profile-card.svg';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import avtar1 from '../../../assets/images/user1.jpg';
import { userData } from './responseData';

export function HomePage() {
  const [totalPage, setTotalPage ] = useState(0);
  const [userDataList, setUserDataList] = useState([]);
  const skills = ['Product designer', 'PROTOTYPER', 'RESEARCHER', 'ARCHITECT'];
  const portfolio = [
    'https://reqres.in/img/faces/10-image.jpg',
    'https://reqres.in/img/faces/10-image.jpg',
  ];
  const getUserData = async pageNumber => {
    try {
      const data = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
      console.log('data: ', data?.data?.data);
      setTotalPage(data?.data?.total_pages);
      setUserDataList(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePageClick = (data) => {
    getUserData(data+1);
  }
  
  useEffect(()=>{
    getUserData(1);
  },[])
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
                    userDataList?.length > 0 && userDataList?.map(val => <>
                      <Col xs={12} md={3} lg={3}>
                        <Card className="user-card border-0 ">
                          <Card.Body className="p-0">
                            <div className="user-profile">
                              <div className="profile-img">
                                <img src={avtar1} alt="User" />
                              </div>
                              <div className="profile-block">
                                <h3>Amit Trivedi</h3>
                                <p className="text-truncate">
                                  A problem well understood is a problem
                                  half solved
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
                              {skills?.map(item => (
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
                                    src={portfolio[0]}
                                    alt="Portfolio" />
                                </li>
                                <li>
                                  <img
                                    src={portfolio[1]}
                                    alt="Portfolio" />
                                </li>
                              </ul>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>)
                  }
                </Row>
                   <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={totalPage}
                    previousLabel="Previous"
                    activeClassName="activePage"
                    containerClassName="paginationContainer"
                    previousClassName="previousButton"
                    nextClassName="previousButton"
                    pageClassName="nextPageButton"
                  />
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
