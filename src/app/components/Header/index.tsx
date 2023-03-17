import * as React from 'react';
import styled from 'styled-components';
import {
  logo,
  HomeIcon,
  JobIcon,
  MessagingIcon,
  NotificationsIcon,
  MyNetworkIcon,
  ProfileAvtar,
} from '../../constant/images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown, Form } from 'react-bootstrap';
import { FiMenu, FiSearch } from 'react-icons/fi';
const ThemeHeader = styled.div`
  .main-header {
    background-color: var(--white);
    padding: 10px 60px;
    .navbar-nav {
      width: 100%;
      justify-content: space-around;
    }
    .nav-link {
      font-family: 'helvetica';
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      padding: 0 20px;
      margin: 0 5px;
      min-width: fit-content;
      color: var(--textcolor);
      .nav-icon {
        width: 30px;
        margin-bottom: 6px;
      }
    }
    .header-search {
      position: relative;
      width: 100%;
      .form-control {
        padding-left: 55px !important;
        border-color: #e9e9e9 !important;
        background-color: #e9e9e9 !important;
        border-radius: 10px;
        height: 55px;
        &:focus {
          border-color: var(--textcolor) !important;
          outline: none;
          box-shadow: none;
        }
      }
      svg {
        position: absolute;
        left: 20px;
        font-size: 20px;
        top: 18px;
        color: #606470;
      }
    }

    .avtar-profile {
      font-family: 'helvetica';
      .dropdown-toggle {
        padding: 0;
        font-family: 'helvetica';
        background-color: transparent;
        border: none;
        color: var(--textcolor);
        img {
          width: 40px;
        }
        &::after {
          position: absolute;
          right: -1px;
          bottom: 10px;
        }
      }
    }
  }
  .navbar-toggler {
    font-size: 30px;
    height: 45px;
    padding: 0;
    width: 45px;
    color: #ffffff;
    background: linear-gradient(180deg, #2e6ecc 0%, #0b6af7 100%);
    border: none;
    padding: 0;
    align-items: center;
    justify-content: center;
  }
  .btn-close:focus {
    outline: 0;
    box-shadow: none !important;
  }
`;
export function Header() {
  return (
    <ThemeHeader>
      {['xl'].map(expand => (
        <Navbar key={expand} className="main-header mb-3" expand={expand}>
          <Container fluid>
            <Navbar.Brand href="/">
              <img className="Logo" src={logo} alt="clockup logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <FiMenu />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
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
                    <img
                      className="nav-icon"
                      src={MyNetworkIcon}
                      alt="NavIcon"
                    />
                    <span className="nav-link">My Network</span>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <img className="nav-icon" src={JobIcon} alt="NavIcon" />
                    <span className="nav-link">Jobs</span>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <img
                      className="nav-icon"
                      src={MessagingIcon}
                      alt="NavIcon"
                    />
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </ThemeHeader>
  );
}
