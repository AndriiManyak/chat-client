import {CREATE_SOCKET} from "./actionConsts";
import socketCreation from "../utils/socketCreation";

export const createSocket = () => {
    const socket = socketCreation();

    return {
        type: CREATE_SOCKET,
        payload: socket,
    };
};