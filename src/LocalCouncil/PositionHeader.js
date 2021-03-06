import React from 'react';
import { H3, Div } from 'glamorous';
import { headingFamily } from '../styles/fonts';

const containerRules = {
  position: 'relative',
  padding: '20px',
  margin: '0 0 40px 0',
  alignSelf: 'stretch',
  
  background: 'black',
  color: 'white',

  fontSize: '24px',
  textTransform: 'uppercase',
  fontFamily: headingFamily,
  textAlign: 'center',
}

const shadowRules = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: '-5px',
  bottom: '-5px',
  border: '1px solid black'
}

function PositionHeader(props) {
  return (
    <H3 css={containerRules}>
      {props.title} position
      <Div css={shadowRules}></Div>
    </H3>
  );
}

export default PositionHeader;
