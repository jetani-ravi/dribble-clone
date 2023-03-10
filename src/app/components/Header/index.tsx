import * as React from 'react';
import logo from '../../../assets/images/logo.svg';
import HomeIcon from '../../../assets/images/home.png';
import JobIcon from '../../../assets/images/job.png';
import MessagingIcon from '../../../assets/images/messaging.png';
import NotificationsIcon from '../../../assets/images/notifications.png';
import MyNetworkIcon from '../../../assets/images/my-network.png';
import ProfileAvtar from '../../../assets/images/avtar.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { FiSearch, FiUser } from 'react-icons/fi';

export function Header() {
  return (
    <>
      <Navbar className="main-header" expand="lg">
        <Container fluid className="">
          <Navbar.Brand href="#home">
            <img className="Logo" src={logo} alt="clockup logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex header-search ms-5">
              <Form.Control
                type="search"
                placeholder="Search designers, product managers etc"
                className="me-2 "
                aria-label="Search"
              />
              <FiSearch className="search-icon" />
            </Form>
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <img className="nav-icon" src={HomeIcon} alt="NavIcon" />
                <span className="nav-link">Home</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <img className="nav-icon" src={MyNetworkIcon} alt="NavIcon" />
                <span className="nav-link">My Network</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <img className="nav-icon" src={JobIcon} alt="NavIcon" />
                <span className="nav-link">Jobs</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <img className="nav-icon" src={MessagingIcon} alt="NavIcon" />
                <span className="nav-link">Messaging</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <img
                  className="nav-icon"
                  src={NotificationsIcon}
                  alt="NavIcon"
                />
                <span className="nav-link">Notifications</span>
              </Nav.Link>
              <Dropdown align="end" className="avtar-profile">
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={ProfileAvtar} alt="ProfileAvtar" />
                  <p className="m-0 text-center helvetica">Me</p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
