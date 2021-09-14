import { createStore, combineReducers} from 'redux';
import { chatsReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    items: chatsReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);