import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBox from '../SearchBox/SearchBox';
import PhotoList from '../PhotoList/PhotoList';
import './Gallery.css';

class Gallery extends Component {
  render() {
    return (
        <Container className="gallery-container">
          <Row className="mb-5">
            {/*  */}
            <Col md={{ size: 6, offset: 3 }}>
              <SearchBox />  
            </Col>
          </Row>
          <PhotoList />
        </Container>
    );
  }
}

export default Gallery;