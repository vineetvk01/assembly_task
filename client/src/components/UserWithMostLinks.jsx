import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.p`
  text-align:center;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`

const User = styled.p`
  text-align:center;
  font-size: 10px;
  font-weight: 400;
  color: #333;
  text-transform: uppercase;
`

export const UserWithMostLinks = ({ userSharedMostLinks = [] }) => {

  return (
    <Card>
      <Card.Body style={{ padding: '10px' }}>
        <Title>User shared most links</Title>
        <div>
          {userSharedMostLinks.map((userLink) => {
            return <User>{userLink.name} ( {userLink.count} )</User>
          })}
        </div>
      </Card.Body>
    </Card>
  )
}