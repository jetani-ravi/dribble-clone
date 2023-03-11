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
  const [userDataList, setUserDataList] = useState<any[]>([]);
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
  const getUserData = async pageNumber => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_CLIENT_API_ENDPOINT}/users`,
        {
          params: {
            page: pageNumber,
          },
        },
      );
      setTotalPage(data?.data?.totalPages);
      setUserDataList(data?.data?.results);
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
                        id={val?.id}
                        avatar={val?.profileUrl}
                        firstName={val?.firstName}
                        lastName={val?.lastName}
                        skills={val?.skills}
                        portfolio={val?.portfolio}
                        profilecard={profilecard}
                      />
                    </Col>
                  </>
                ))}
            </Row>
            {totalPage > 1 && (
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
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
