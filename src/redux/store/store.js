import { configureStore } from "@reduxjs/toolkit";
import creatorReducer from "./creatorSlice";
import gameReducer from "./gameSlice";
import storeReducer from "./storeSlice";
import sidebarReducer from "./sidebarSlice";
import genreReducer from "./genreSlice";



const store = configureStore({
    reducer: {
        genre: genreReducer,
        game: gameReducer,
        sidebar: sidebarReducer,
        store: storeReducer,
        creator: creatorReducer,

    }
});

export default store;