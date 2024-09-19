import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllStores, selectAllStoresStatus } from '../../redux/store/storeSlice';
import { Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { fetchAsyncStores } from '../../redux/utils/storeUtils';
import { StoreList } from '../../components/store';
const StoreAllPage = () => {
  const dispatch = useDispatch();
  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);

  useEffect(() => {
    dispatch(fetchAsyncStores());
  }, [dispatch]);
  return (
    <StoreAllPageWrapper>
      <div className='sc-games section'>
        <div className='container'>
          <Title titleName={{
            firstText: "all ",
            secondText: "Stores"
          }} />
          {
            storesStatus === STATUS.LOADING ? <Preloader /> : stores?.length > 0 ? <>
              <StoreList stores={stores} />
            </> : "No games found!"
          }
        </div>
      </div>
    </StoreAllPageWrapper>
  )
}

export default StoreAllPage;

const StoreAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  .sc-stores{
    min-height: 100vh;
    padding-top: 65px;
  }
`;
