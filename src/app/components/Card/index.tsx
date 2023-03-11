import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardComponent = ({
  avatar,
  firstName,
  lastName,
  skills,
  portfolio,
  profilecard,
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/UserDetails/${id}`);
  }
  return (
    <Card className="user-card border-0 ">
      <Card.Body className="p-0">
        <div className="user-profile">
          <div className="profile-img">
            <img src={avatar} alt="User" />
          </div>
          <div className="profile-block">
            <h3>{firstName + ' ' + lastName}</h3>
            <p className="text-truncate">
              A problem well understood is a problem half solved
            </p>
            <Button variant="link" className="user-profile-view" onClick={handleClick}>
              <img src={profilecard} alt="Profile Card" className="me-1" />
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
              <img src={portfolio[0]?.url} alt="Portfolio" />
            </li>
            <li>
              <img src={portfolio[1]?.url} alt="Portfolio" />
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
