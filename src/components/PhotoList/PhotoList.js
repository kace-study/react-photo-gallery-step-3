import React from 'react';
import { Row, Col } from 'reactstrap';
import Photo from '../Photo/Photo';

const PhotoList = () =>  {
  return (
    <Row>
        {/* md="4" にしてレスポンシブに対応する */}
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
        <Col md="4"><Photo /></Col>
    </Row>
  );
}

export default PhotoList;