import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCreators, selectAllCreatorsStatus, selectCreatorsNextPage, selectCreatorsPrevPage } from '../../redux/store/creatorSlice';
import { fetchAsyncCreators } from '../../redux/utils/creatorUtils';
import { Pagination, Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
const CreatorAllPage = () => {
    const dispatch = useDispatch();
    const creators = useSelector(selectAllCreators);
    const creatorsStatus = useSelector(selectAllCreatorsStatus);
    const nextPage = useSelector(selectCreatorsNextPage);
    const prevPage = useSelector(selectCreatorsPrevPage);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchAsyncCreators(page));
    }, [dispatch, page]);

    const pageHandler = (pageValue) => setPage(pageValue);

    return (
        <CreatorAllPageWrapper>
            <div className='sc-creators section'>
                <div className='container'>
                    <Title titleName={{
                        firstText: "all ",
                        secondText: "Creators"
                    }} />
                </div>
            </div>
        </CreatorAllPageWrapper>
    )
}

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
    background-color: var(--clr-violet-dark-active);
    .sc-creators{
        min-height: 100vh;
        padding-top: 65px;
    }
`;