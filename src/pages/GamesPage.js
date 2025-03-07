import React from 'react';
import styled from 'styled-components';

const GameList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px;
  list-style: none;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GameItem = styled.li`
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  img {
    max-width: 100%;
    height: auto;
  }
`;

const GameTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
`;

const games = [
  {
    title: 'Game 1',
    description: 'Game 1 : Desc',
    imageUrl: '/assets/images/game1.png',
  },
  {
    title: 'Game 2',
    description: 'Game 2 : Desc',
    imageUrl: '/assets/images/game2.png',
  },
  // 추가적인 게임 정보
];

function GamesPage() {
  return (
    <GameList>
      {games.map((game) => (
        <GameItem key={game.title}>
          <img src={game.imageUrl} alt={game.title} />
          <GameTitle>{game.title}</GameTitle>
          <p>{game.description}</p>
        </GameItem>
      ))}
    </GameList>
  );
}

export default GamesPage;