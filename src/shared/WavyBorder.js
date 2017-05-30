import React, { Component } from 'react';
import { Div } from 'glamorous';

class WavyBorder extends Component {
  render() {
    const rules = {
      border: '3px solid transparent',
      borderImage: 'url("/wavy-border.svg") round',
      borderImageSlice: 8,
      borderImageWidth: '10px',
    };
      
    return (
      <Div css={rules} {...this.props}>{this.props.children}</Div>
    );
  }
}

export default WavyBorder;
