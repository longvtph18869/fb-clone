import { configureStore } from "@reduxjs/toolkit";

import layoutReducer from '../reducers/layoutSlice'
// import multiLangReducer from '../services/multiLangSilce'
import menuReducer from '../reducers/sidebarSlice'
import userInfoReducer from '../reducers/userSlice'
import spinnerSlice from '../reducers/spinnerSlice'

const store = configureStore({
    reducer: {
        layout: layoutReducer,
        // language: multiLangReducer,
        menus: menuReducer,
        userInfo: userInfoReducer,
        spinner: spinnerSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false })
        // .concat(createLogger())
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch