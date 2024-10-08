import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { API_KEY } from "../../api/api_key";
import { apiURL } from '../../constants';

export const fetchAsyncGames = createAsyncThunk('games/fetch', async (page = 1) => {
    const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&page=${page}`);
    return data;
});

export const fetchAsyncGameDetails = createAsyncThunk('game/details/fetch', async (id) => {
    const { data } = await axios.get(`${apiURL.gamesURL}/${id}?${API_KEY}`);
    return data;
});
