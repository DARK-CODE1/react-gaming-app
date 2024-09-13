import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGames, fetchAsyncGamesDetails } from "../utils/gameUtils";

const initialState = {
    games: [],
    gamesStatus: STATUS.IDLE,
    gameSingle: [],
    gameSingleStatus: STATUS.IDLE,
    gameDetails: []
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGames.pending, (state) => {
            state.gamesStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncGames.fulfilled, (state, action) => {
            state.games = action.payload;
            state.gamesStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGames.rejected, (state) => {
            state.gamesStatus = STATUS.FAILED;
        })

        builder.addCase(fetchAsyncGamesDetails.pending, (state) => {
            state.gameSingleStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncGamesDetails.fulfilled, (state, action) => {
            state.gameSingle = action.payload;
            state.gameSingleStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGamesDetails.rejected, (state) => {
            state.gameSingleStatus = STATUS.FAILED;
        })
    },
    reducers: {}
});

export const selectAllGames=(state)=> state.game.games.results;
export const selectAllGamesStatus=(state)=> state.game.gamesStatus;
export const selectAllNextPage=(state)=> state.game.games.next;
export const selectAllPrevPage=(state)=> state.game.games.Previous;
export const selectSnigleGame=(state)=> state.game.gamesSnigle;
export const selectSnigleGameStatus=(state)=> state.game.gamesSnigleStatus;
export const selectGamesDetails=(state)=> state.game.gamesDetails;

export default gameSlice.reducer;