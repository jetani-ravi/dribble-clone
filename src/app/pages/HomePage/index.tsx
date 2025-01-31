import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { profilecard } from '../../constant/images';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import CardComponent from 'app/components/Card';
import ButtonComponent from 'app/components/Button';

interface IUserQueryParams {
  page: number;
  skills?: string;
}

export function HomePage() {
  const [totalPage, setTotalPage] = useState(0);
  const [userDataList, setUserDataList] = useState<any[]>([]);
  const [skillCategory, setSkillCategory] = useState<any['']>([]);
  const [skillFilter, setSkillFilter] = useState<any['All']>([]);
  const getUserData = async (queryParams: IUserQueryParams) => {
    try {
      if (!queryParams.skills || queryParams.skills === 'All') {
        delete queryParams.skills;
      }
      const data = await axios.get(
        `${process.env.REACT_APP_CLIENT_API_ENDPOINT}/users`,
        { params: queryParams },
      );
      setTotalPage(data?.data?.totalPages);
      setUserDataList(data?.data?.results);
    } catch (error) {
      console.error(
        `Unknown exception occurred while fetching user data`,
        error,
      );
      throw new Error('Unknown exception occurred while fetching user data');
    }
  };
  const getSkillCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_CLIENT_API_ENDPOINT}/users/categories`,
      );
      if (response?.data) {
        const { skills: skillCategory } = response.data?.[0];

        setSkillCategory(['All', ...skillCategory].sort());
      }
    } catch (error) {
      console.error(
        `Unknown exception occurred while fetching skill categories`,
        error,
      );
      throw new Error(
        'Unknown exception occurred while fetching skill categories',
      );
    }
  };

  const handlePageChange = data => {
    const pageIncrement = 1;
    const nextPageNo = parseInt(data?.selected) + pageIncrement;
    const queryParams: IUserQueryParams = {
      page: nextPageNo,
      skills: skillFilter,
    };
    getUserData(queryParams);
  };

  const onFilterChange = event => {
    const queryParams: IUserQueryParams = {
      page: 1,
      skills: event?.target?.value,
    };
    setSkillFilter(event?.target?.value);
    getUserData(queryParams);
  };

  useEffect(() => {
    const defaultFilter = 'All';
    getSkillCategories();
    const queryParams: IUserQueryParams = {
      page: 1,
    };
    getUserData(queryParams);
    setSkillFilter(defaultFilter);
  }, []);
  return (
    <>
      <Container fluid>
        <div className="page-content">
          <div className="gray-bg rounded-3 p-xxl-5 p-xl-4 p-lg-4 p-md-4 p-sm-4 p-3">
            {skillCategory?.map((category, index) => (
              <ButtonComponent
                label={category}
                value={category}
                className={category === skillFilter ? 'active' : ''}
                key={String(index)}
                handleOnClick={onFilterChange}
              />
            ))}
            <Row className="mt-xxl-5 mt-md-2 mt-lg-3 mt-xl-3 mt-3">
              {userDataList?.length > 0 &&
                userDataList?.map((user, index) => (
                  <>
                    <Col xs={12} md={6} lg={6} xl={4} xxl={3}>
                      <CardComponent
                        id={user?.id}
                        key={`user_card_${user?.id}`}
                        avatar={user?.profileUrl}
                        firstName={user?.firstName}
                        lastName={user?.lastName}
                        skills={user?.skills}
                        headline={user?.headline}
                        portfolio={user?.portfolio}
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
                onPageChange={handlePageChange}
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
