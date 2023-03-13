import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    <Card className="user-card border-0" key={id}>
      <Card.Body className="p-0" id={id} key={id}>
        <div className="user-profile">
          <div className="profile-img">
            <img
              src={avatar}
              key={`card_img_${id}`}
              alt="User avatar"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = defaultAvatarOnError;
              }}
            />
          </div>
          <div className="profile-block">
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
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
