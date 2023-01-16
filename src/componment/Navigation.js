import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";

function Navigation({settext,setrate})
 {

  return (
    
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Movies Kids</Navbar.Brand>
        <Navbar.Brand href="#">contact</Navbar.Brand>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Brand href="#">About</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <ReactStars
    count={5}
   
    size={40}
    activeColor="#ffd700"
    edit={true}
    onChange={(newRating) => setrate(newRating)}

  />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settext(e.target.value)}       
                   />
<Button
              variant="outline-success"
              style={{ backgroundColor: "red", border: "none", color: "white" }}
            >
              Search
            </Button>        
              </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default Navigation