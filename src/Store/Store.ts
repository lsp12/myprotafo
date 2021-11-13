import { configureStore } from '@reduxjs/toolkit'
import ActionReducer from './ActionReducer/ProjectAction'
import ProjectReducer from './ActionReducer/ProjectSlice'
import AuthReducer from './ActionAuth/AuthSlice'
import TechnologyReducer from './ActionTechnology/TechnologySlice'
import WebPageReducer from './ActionWebPage/WebPageSlice'
import OpenProyect from './OpenProyect/OpenProyectSlice'

export const store = configureStore({
  reducer: {
    actionOpen:ActionReducer,
    project:ProjectReducer,
    auth:AuthReducer,
    technology:TechnologyReducer,
    webPage:WebPageReducer,
    OpenProyect
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
