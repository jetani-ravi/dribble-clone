import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserCard = styled.div`
  padding: 0;
  border-radius: 10px;
  margin-bottom: 50px;
  overflow: hidden;
  .user-profile {
    display: flex;
    padding: 14px 14px 0px 14px;
  }
`;
const ProfileImg = styled.div`
  width: 70px;
  display: block;
  img {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    object-fit: cover;
  }
`;
const ProfileBlock = styled.div`
  width: calc(100% - 70px);
  h3 {
    font-weight: 700;
    font-size: 19px;
    color: #131313;
    margin-bottom: 4px;
  }
  p {
    font-size: 14px;
    color: #646464;
    margin: 0;
  }
  .user-profile-view {
    font-size: 13px;
    color: #8f6fdb;
    padding: 0;
    img {
      width: 16px;
    }
  }
`;
const DesignationTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  padding: 10px;
  .tag {
    border-radius: 100px;
    margin: 3px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .tag:nth-child(odd) {
    background: linear-gradient(134.63deg, #fbda61 0%, #ff5acd 115.25%);
    padding: 1px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      background-color: #ffffff;
      border-radius: 100px;
      padding: 3px;
      span {
        background: linear-gradient(134.63deg, #fbda61 0%, #ff5acd 115.25%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
  .tag:nth-child(even) {
    background: linear-gradient(134.63deg, #00dbde 0%, #fc00ff 115.25%);
    padding: 1px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      background-color: #ffffff;
      border-radius: 100px;
      padding: 3px;
      span {
        background: linear-gradient(134.63deg, #00dbde 0%, #fc00ff 115.25%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
`;
const UserProject = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    li {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
`;

const CardComponent = ({
  avatar,
  firstName,
  lastName,
  headline,
  skills,
  portfolio,
  profilecard,
  id,
}) => {
  const defaultAvatarOnError =
    'https://s3.amazonaws.com/vivo.onrx.ca/dribble-photos/avtar-hd.png';
  const defaultPortfolioImageOnError = `https://s3.amazonaws.com/vivo.onrx.ca/dribble-photos/w1.jpg`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/UserDetails/${id}`);
  };
  return (
    <UserCard>
      <Card className="border-0" key={id}>
        <Card.Body className="p-0" id={id} key={id}>
          <div className="user-profile">
            <ProfileImg>
              <img
                src={avatar}
                key={`card_img_${id}`}
                alt="User avatar"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = defaultAvatarOnError;
                }}
              />
            </ProfileImg>
            <ProfileBlock>
              <h3>{firstName + ' ' + lastName}</h3>
              <p className="text-truncate">{headline}</p>
              <Button
                variant="link"
                className="user-profile-view"
                onClick={handleClick}
                key={`view_profile_btn_${id}`}
              >
                <img src={profilecard} alt="profile-card" className="me-1" />
                View Profile
              </Button>
            </ProfileBlock>
          </div>
          <DesignationTag>
            {skills?.map(item => (
              <div className="tag">
                <span>
                  <span>{item}</span>
                </span>
              </div>
            ))}
          </DesignationTag>
          <UserProject>
            <ul>
              <li>
                <img
                  src={portfolio[0]?.url}
                  alt="Portfolio"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = defaultPortfolioImageOnError;
                  }}
                />
              </li>
              <li>
                <img
                  src={portfolio[1]?.url}
                  alt="Portfolio"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = defaultPortfolioImageOnError;
                  }}
                />
              </li>
            </ul>
          </UserProject>
        </Card.Body>
      </Card>
    </UserCard>
  );
};

export default CardComponent;
