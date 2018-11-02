import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class SearchBox extends React.Component {
  render() {
    return (
      <InputGroup>
        <Input type="search" name="search" placeholder="Enter Keyword!">
        </Input>
        <InputGroupAddon addonType="append">
          <Button color="dark">検索</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default SearchBox;