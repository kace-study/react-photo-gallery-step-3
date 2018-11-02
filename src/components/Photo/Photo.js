import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import './Photo.css';

const Photo = () =>  {
  return (
    <Card className="mb-3 text-center">
      <CardImg top width="250px" height="250px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/>
      <CardBody>
        <CardText>Dummy</CardText>
      </CardBody>
    </Card>
  );
}

export default Photo;