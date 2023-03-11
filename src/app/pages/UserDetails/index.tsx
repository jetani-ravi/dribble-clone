import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import timer1 from '../../../assets/images/timer1.png';
import Illustrator from '../../../assets/images/Illustrator_icon.png';
import photoshop from '../../../assets/images/photoshop_icon.png';
import figma from '../../../assets/images/figma.png';
import timerstart from '../../../assets/images/timerstart.png';
import dribbble from '../../../assets/images/dribbble.png';
import behance from '../../../assets/images/be.png';
import instagram from '../../../assets/images/instagram.png';
import mapMarker from '../../../assets/images/map-marker-blue.png';
import userbadge from '../../../assets/images/verify.svg';
import ButtonComponent from 'app/components/Button';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';

export function UserDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState<any>();
  const getUserDetails = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_CLIENT_API_ENDPOINT}/users/${id}`,
      );
      setUserData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  const categories = [
    'Work',
    'Experience',
    'Education',
    'Skills',
    'Certification',
    'Interests',
  ];
  return (
    <>
      <Container fluid>
        <div className="page-content">
          <div className="gray-bg rounded-3 p-5">
            <Row>
              <Col xs={12} md={4} lg={3}>
                <div className="user-details-profile paid-user bg-white p-4">
                  <div className="user-avtar">
                    <img src={userData?.profileUrl} alt="" />
                  </div>
                  <div className="user-name-badge text-center">
                    <h2>
                      {userData?.firstName + ' ' + userData?.lastName}{' '}
                      {userData?.isVerified && <img src={userbadge} />}
                    </h2>
                    <p>A problem well understood is a problem half solved</p>
                    <div className="user-tag">
                      {userData?.skills?.map(val => (
                        <ButtonComponent label={val} />
                      ))}
                    </div>
                  </div>
                  <div className="text-center getintouch">
                    <ButtonComponent label="Get In Touch" />
                  </div>
                  <p className="user-bio">{userData?.summary}</p>
                  <div className="user-location">
                    <img src={mapMarker} className="me-1"></img>
                    <span>{userData?.location}</span>
                  </div>
                  {userData?.isVerified && (
                    <div>
                      <div className="user-social active">
                        <ul>
                          <li>
                            <a href={userData?.instagramLink}>
                              <img src={instagram} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href={userData?.behanceLink}>
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
                            <span className="me-1">
                              {userData?.jobPreferences[0]}
                            </span>
                          </li>
                          <li>
                            <img src={timerstart} />
                            <span className="me-1">
                              {userData?.jobPreferences[1]}
                              <small>
                                Availability: Within the next few weeks
                              </small>
                            </span>
                          </li>
                        </ul>
                        <div className="send-offer">
                          <ButtonComponent label="Send Custom Offer" />
                        </div>
                      </div>
                      <div className="user-details-more">
                        <h3>About</h3>
                        <p>
                          As a UI/UX designer, I specialize in creating visually
                          stunning and user-friendly digital experiences. With a
                          passion for both design and technology, I approach
                          every project with a user-centered mindset, striving
                          to create intuitive interfaces and streamlined user
                          flows that prioritize the needs of the end-users.
                        </p>
                        <p>
                          My skills and expertise extend across a range of
                          design disciplines, including user research,
                          wireframing, prototyping, visual design, and design
                          systems. I am committed to staying up-to-date with the
                          latest design trends and technologies, ensuring that
                          the digital products I design are both aesthetically
                          pleasing and technologically advanced.
                        </p>
                        <p>
                          I believe that great design is not just about creating
                          beautiful visuals, but about solving problems and
                          delivering value to users. With that in mind, I am
                          dedicated to collaborating closely with clients and
                          stakeholders to understand their unique needs and
                          goals, and delivering designs that meet or exceed
                          their expectations.
                        </p>
                        <p>
                          Whether working on a mobile app, website, or other
                          digital product, I am committed to delivering
                          exceptional results that help my clients achieve their
                          business objectives and create memorable user
                          experiences.
                        </p>
                      </div>
                      <div className="user-details-education">
                        <h3>Education</h3>
                        {userData?.educations?.map(val => (
                          <div className="user-degree">
                            <p>
                              <strong>{val?.courseName}</strong>
                            </p>
                            <p>{val?.university + ', ' + val?.country}</p>
                            <p>({val?.startYear + '-' + val?.endYear})</p>
                          </div>
                        ))}
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
                        {userData?.certifications?.map(val => (
                          <div className="user-degree">
                            <p>
                              <strong>{val?.certificateName}</strong>
                            </p>
                            <p>{val?.provider + ',' + val?.course}</p>
                            <p>{moment(val?.date).format('MMMM-YYYY')}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Col>
              <Col xs={12} md={8} lg={9}>
                {categories?.map(val => (
                  <ButtonComponent label={val} />
                ))}
                <Row className="mt-5">
                  {userData?.portfolio?.map(val => (
                    <Col xs={12} md={6} lg={6}>
                      <div className="user-work">
                        <img src={val?.url} alt="" />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}
