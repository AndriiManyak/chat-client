import rootReducer from "./rootReducer";
import {createStore, applyMiddleware} from "redux";
import socketMiddleware from "./middlewares/socketMiddleware";

const store = createStore(
    rootReducer,
    applyMiddleware(socketMiddleware),
);

export default store;
