import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import {
  timer,
  timerstart,
  illustrator,
  photoshop,
  figma,
  dribbble,
  behance,
  dribbbleBlack,
  behanceBlack,
  instagramBlack,
  instagram,
  mapMarker,
  mapMarkerGray,
  userBadge,
} from '../../constant/images';
import ButtonComponent from 'app/components/Button';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const ProfileDetails = styled.div`
  .user-avtar {
    text-align: center;
    margin-bottom: 10px;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 100px;
    }
  }
  .user-name-badge {
    text-align: center;
    h2 {
      font-weight: 700;
      font-size: 22px;
      text-align: center;
      background: linear-gradient(270deg, #fd6b5b 14.79%, #768adb 84.79%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    p {
      font-size: 16px;
      text-align: center;
      font-weight: 300;
      width: 80%;
      margin: 10px auto;
      color: #5e5e5e;
    }
    .user-tag {
      margin: 0 0 20px 0;
      text-align: center;
      padding: 0;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      button {
        margin: 5px;
      }
    }
  }
  .getintouch {
    button {
      border-radius: 100px;
      background: linear-gradient(180deg, #2e6ecc 0%, #0b6af7 100%);
      color: var(--white);
      width: 70%;
      font-size: 15px;
      padding: 8px 10px;
    }
  }
  .user-bio {
    font-size: 13px;
    color: #5e5e5e;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .user-location {
    text-align: center;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    color: rgba(94, 94, 94, 1);
    img {
      margin-right: 5px;
    }
  }
  .user-social {
    margin-top: 20px;
    text-align: center;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 7px;
      }
    }
  }
  .user-work {
    margin-bottom: 30px;
    img {
      border-radius: 10px;
    }
  }
  .paid-user {
    .user-tag {
      .btn-primary {
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.21);
      }
    }
    .user-location {
      color: var(--blue);
      img {
        width: 20px;
      }
    }
    .user-social.active {
      img {
        width: 24px;
      }
    }
    .user-hire {
      background: #ffffff;
      border: 1px solid #cedeff;
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
      border-radius: 11px;
      margin-top: 20px;
      padding: 25px;
      .send-offer {
        button {
          color: #ffffff;
          width: 100%;
          margin-top: 20px;
          border-radius: 100px;
          font-size: 15px;
          border-radius: 100px;
          background: linear-gradient(180deg, #2e6ecc 0%, #0b6af7 100%);
        }
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-weight: 600;
        font-size: 14px;
        color: #5e5e5e;
        li {
          border-top: 1px solid #cedeff;
          padding: 14px 0;
          // border-bottom: 1px solid #cedeff;
          display: flex;
          align-items: flex-start;
          img {
            margin-right: 5px;
          }
          small {
            font-weight: 400;
            width: 100%;
            display: inline-block;
          }
        }
      }
      h3 {
        font-weight: 700;
        font-size: 16px;
        color: #5e5e5e;
      }
    }
    .user-details-more {
      margin-top: 30px;
      h3 {
        font-size: 16px;
        color: #5e5e5e;
      }
      p {
        font-size: 13px;
        font-weight: 300;
        line-height: 20px;
        margin-bottom: 5px;
        color: #5e5e5e;
      }
    }
    .user-details-education {
      margin-top: 30px;
      h3 {
        font-size: 16px;
        color: #5e5e5e;
      }
      .user-degree {
        margin-bottom: 20px;
        p {
          font-size: 13px;
          line-height: 14px;
          margin-bottom: 5px;
          color: #5e5e5e;
          strong {
            font-weight: 600;
          }
        }
      }
    }
    .user-skills {
      ul {
        margin: 0;
        list-style: none;
        display: flex;
        padding: 0;
        li {
          margin-right: 5px;
        }
      }
    }
  }
`;
export function UserDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState<any>();
  const [sectionFilter, setSectionFilter] = useState<any>();
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
  const onSectionChange = event => {
    setSectionFilter(event?.target?.value);
  };

  useEffect(() => {
    getUserDetails();
    const defaultSectionFilter = 'Work';
    setSectionFilter(defaultSectionFilter);
  }, [getUserDetails, id]);

  const sections = [
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
          <div className="gray-bg rounded-3 p-xxl-5 p-xl-4 p-lg-4 p-md-4 p-sm-4 p-3">
            <ProfileDetails>
              <Row>
                <Col xs={12} md={5} lg={4} xl={3}>
                  <div
                    className={
                      'user-details-profile p-4 ' +
                      (userData?.isVerified ? 'paid-user bg-white' : 'mt-50')
                    }
                  >
                    <div className="user-avtar">
                      <img src={userData?.profileUrl} alt="" />
                    </div>
                    {userData?.firstName && userData?.lastName && (
                      <div className="user-name-badge text-center">
                        <h2>
                          {userData?.firstName + ' ' + userData?.lastName}{' '}
                          {userData?.isVerified && (
                            <img src={userBadge} alt="Dribble verified" />
                          )}
                        </h2>
                        <p>
                          A problem well understood is a problem half solved
                        </p>
                        <div className="user-tag">
                          {userData?.skills?.map((value, index) => (
                            <ButtonComponent
                              label={value}
                              key={`user_skills_${index}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    {userData?.firstName && userData?.lastName && (
                      <div className="text-center getintouch">
                        <ButtonComponent
                          label="Get In Touch"
                          key={'getInTouchBtn'}
                        />
                      </div>
                    )}
                    <p className="user-bio">{userData?.summary}</p>
                    {userData?.location && (
                      <div className="user-location">
                        <img
                          src={userData?.isVerified ? mapMarker : mapMarkerGray}
                          className="me-1"
                          alt="user is verified"
                        ></img>
                        <span>{userData?.location}</span>
                      </div>
                    )}
                    {userData?.isVerified ? (
                      <>
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
                              <a href={userData?.behanceLink}>
                                <img src={dribbble} alt="" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="user-social">
                          <ul>
                            <li>
                              <a href={instagramBlack}>
                                <img src={instagramBlack} alt="Instagram" />
                              </a>
                            </li>
                            <li>
                              <a href={behanceBlack}>
                                <img src={behanceBlack} alt="Behance" />
                              </a>
                            </li>
                            <li>
                              <a href={dribbbleBlack}>
                                <img src={dribbbleBlack} alt="Dribble" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}

                    {userData?.isVerified && (
                      <div>
                        <div className="user-hire">
                          <h3 className="">Hire Me</h3>
                          {userData?.jobPreferences.map(jobType => {
                            return (
                              <>
                                <ul>
                                  <li>
                                    <img
                                      src={
                                        jobType
                                          ?.toLowerCase()
                                          .includes('long term')
                                          ? timer
                                          : timerstart
                                      }
                                      alt="job preferences"
                                    />
                                    <span className="me-1">{jobType}</span>
                                  </li>
                                </ul>
                              </>
                            );
                          })}
                          <div className="send-offer">
                            <ButtonComponent
                              label="Send Custom Offer"
                              key={'send_custom_offer'}
                            />
                          </div>
                        </div>
                        <div className="user-details-more">
                          <h3>About</h3>
                          <p>
                            As a UI/UX designer, I specialize in creating
                            visually stunning and user-friendly digital
                            experiences. With a passion for both design and
                            technology, I approach every project with a
                            user-centered mindset, striving to create intuitive
                            interfaces and streamlined user flows that
                            prioritize the needs of the end-users.
                          </p>
                          <p>
                            My skills and expertise extend across a range of
                            design disciplines, including user research,
                            wireframing, prototyping, visual design, and design
                            systems. I am committed to staying up-to-date with
                            the latest design trends and technologies, ensuring
                            that the digital products I design are both
                            aesthetically pleasing and technologically advanced.
                          </p>
                          <p>
                            I believe that great design is not just about
                            creating beautiful visuals, but about solving
                            problems and delivering value to users. With that in
                            mind, I am dedicated to collaborating closely with
                            clients and stakeholders to understand their unique
                            needs and goals, and delivering designs that meet or
                            exceed their expectations.
                          </p>
                          <p>
                            Whether working on a mobile app, website, or other
                            digital product, I am committed to delivering
                            exceptional results that help my clients achieve
                            their business objectives and create memorable user
                            experiences.
                          </p>
                        </div>
                        <div className="user-details-education">
                          <h3>Education</h3>
                          {userData?.educations?.map(data => (
                            <div className="user-degree">
                              <p>
                                <strong>{data?.courseName}</strong>
                              </p>
                              <p>{data?.university + ', ' + data?.country}</p>
                              <p>({data?.startYear + '-' + data?.endYear})</p>
                            </div>
                          ))}
                        </div>
                        <div className="user-details-education">
                          <h3>Skills</h3>
                          <div className="user-skills">
                            <ul>
                              <li>
                                <img src={illustrator} alt="" />
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
                <Col xs={12} md={7} lg={8} xl={9}>
                  {sections?.map((sectionValue, index) => (
                    <ButtonComponent
                      key={`section_${index}`}
                      label={sectionValue}
                      value={sectionValue}
                      handleOnClick={onSectionChange}
                      className={sectionFilter === sectionValue ? 'active' : ''}
                    />
                  ))}
                  <Row className="mt-xxl-5 mt-md-2 mt-lg-3 mt-xl-3">
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
            </ProfileDetails>
          </div>
        </div>
      </Container>
    </>
  );
}
