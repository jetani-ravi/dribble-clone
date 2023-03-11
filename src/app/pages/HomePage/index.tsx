import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profilecard from '../../../assets/images/profile-card.svg';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import CardComponent from 'app/components/Card';
import avtar1 from '../../../assets/images/user1.jpg';
import ButtonComponent from 'app/components/Button';

export function HomePage() {
  const [totalPage, setTotalPage] = useState(0);
  const [userDataList, setUserDataList] = useState([]);
  const skills = ['Product designer', 'PROTOTYPER', 'RESEARCHER', 'ARCHITECT'];
  const categories = [
    'All',
    'Design',
    'Social Media',
    'Ui/Ux Designer',
    'Adobe Creatrive Suite',
    'Brand Expert',
    'Visual Designer',
    'After Effects',
  ];
  const portfolio = [
    'https://reqres.in/img/faces/10-image.jpg',
    'https://reqres.in/img/faces/10-image.jpg',
  ];
  const getUserData = async pageNumber => {
    console.log('pageNumber: ', pageNumber);
    try {
      const data = await axios.get(
        `https://reqres.in/api/users?page=${pageNumber}`,
      );
      console.log('data: ', data?.data?.data);
      setTotalPage(data?.data?.total_pages);
      setUserDataList(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = data => {
    getUserData(data?.selected + 1);
  };

  useEffect(() => {
    getUserData(1);
  }, []);
  return (
    <>
      <Container fluid>
        <div className="page-content">
          <div className="gray-bg rounded-3 p-5">
            {categories?.map(val => (
              <ButtonComponent label={val} />
            ))}
            <Row className="mt-5">
              {userDataList?.length > 0 &&
                userDataList?.map(val => (
                  <>
                    <Col xs={12} md={3} lg={3}>
                      <CardComponent
                        avatar={avtar1}
                        firstName="Amit"
                        lastName="Trivedi"
                        skills={skills}
                        portfolio={portfolio}
                        profilecard={profilecard}
                      />
                    </Col>
                  </>
                ))}
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
          </div>
        </div>
      </Container>
    </>
  );
}
