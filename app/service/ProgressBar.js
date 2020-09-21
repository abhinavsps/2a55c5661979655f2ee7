import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';

const ProgressBar = (props) => {
  const { hide } = props;
    if (hide) {
      return null;
      } else {
        return (
          <Container>
            <Content>
              <Spinner />
            </Content>
          </Container>
        );
      }
};
  export default ProgressBar;