import React from 'react';
import styled from "styled-components";
import { Banner, ImageSlider, Preloader, Title } from '../../components/common';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGames, selectAllGamesStatus } from '../../redux/store/gameSlice';
import { useEffect } from 'react';
import { fetchAsyncGames } from '../../redux/utils/gameUtils';
import { STATUS } from '../../utils/status';
import GameList from '../../components/game/GameList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);

  useEffect(() => {
    dispatch(fetchAsyncGames());
  }, [dispatch])

  const rendredPopularGames = <>
    <GameList sliceValue={9} games={games} />
    <div className="d-flex justify-content-center">
      <Link to='/games' className='section-btn'>See More Games</Link>
    </div>
  </>;

  return (
    <HomeWrapper>
      <Banner />

      <section className='section sc-popular'>
        <div className="container">
          <Title titleName={{ firstText: 'Top popular', secondText: 'Games' }} />
          {
            gamesStatus === STATUS.LOADING ? <Preloader /> : games?.length > 0 ? rendredPopularGames : 'No Games Found!'
          }
        </div>
      </section>

      <ImageSlider/>
    </HomeWrapper>
  )
}

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular{
    background-color: var(--clr-violet-dark-active);
    .section-btn{
      margin-top: 60px;
    }
  }

  .sc-join{
    min-height: 640px;

    .join-content{
      max-width: 600px;
    }

    .join-title{
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span{
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres{
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores{
    min-height: 841px;
  }
`;
