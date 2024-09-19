import React, { useEffect } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleStores, selectSingleStoresStatus } from '../../redux/store/storeSlice';
import { useParams } from 'react-router-dom';
import { fetchAsyncStoresDetails } from '../../redux/utils/storeUtils';
import { Breadcrumb, Preloader } from '../../components/common';
import { STATUS } from '../../utils/status';
import { StoreDetails } from '../../components/store';

const StoreDetailsPage = () => {
    const { storeId } = useParams();
    const dispatch = useDispatch();
    const singleStoreData = useSelector(selectSingleStores);
    const singleStoreStatus = useSelector(selectSingleStoresStatus);

    useEffect(() => {
        dispatch(fetchAsyncStoresDetails(storeId));
    }, [dispatch, storeId])

    const gameNameById = {
        [singleStoreData.id]: singleStoreData.name
    }
    return (
        <StoreDetailsPageWrapper>
            <div className="sc-details">
                <div className="container">
                    <Breadcrumb dataNameById={gameNameById} />
                    {
                        singleStoreStatus === STATUS.LOADING ? <Preloader /> : <StoreDetails storeData={singleStoreData} />
                    }

                </div>
            </div>
        </StoreDetailsPageWrapper>
    )
}

export default StoreDetailsPage;

const StoreDetailsPageWrapper = styled.div`
    background: var(--clr-violet-dark-active);
    
    .sc-details{
        min-height: 100vh;
        padding-top: 65px;
        padding-bottom: 65px;
    }
`;
