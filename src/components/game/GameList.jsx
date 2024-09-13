import React from 'react';
import styled from "styled-components";
import GameItem from './GameItem';
import propTypes from 'prop-types';

const GameList = ({ games, sliceValue = games.length }) => {
  return (
    <GameListWrapper>
      <div className="card-list">
        {
          games?.slice(0, sliceValue).map(item => (
            <GameItem key={item.id} gameItem={item} />
          ))
        }
      </div>
    </GameListWrapper>
  )
}

export default GameList;

GameList.propTypes = {
  games: propTypes.array,
  sliceValue: propTypes.number
}

const GameListWrapper = styled.div`
  
`;
