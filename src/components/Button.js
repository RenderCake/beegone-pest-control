import React from 'react'
import styled from 'react-emotion'
import { primaryColor } from './theme'

export const ButtonLink = styled.a`
  appearance: none;
  background: ${props => (props.secondary ? '#000' : primaryColor)};
  color: ${props => (props.secondary ? '#fff' : '#000')};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  font-family: Lato, sans-serif;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: normal;
  font-size: 0.9rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 19px 40px 20px;
  display: block;
  transition: all 420ms;
  &:hover {
    box-shadow: ${props =>
    (props.secondary
      ? 'inset 0 0 0 2px #FFCC00'
      : '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)')};
  }
`
