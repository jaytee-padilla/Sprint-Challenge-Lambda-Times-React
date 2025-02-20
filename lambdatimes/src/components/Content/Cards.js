import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import uuid from 'uuid';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

          {props.cards.map(card => <Card card={card} key={uuid.v4()} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;