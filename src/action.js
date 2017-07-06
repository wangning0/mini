import {
    CHANGE_BUBBLES
} from './actionTypes';

export function changeBubbles(bubbles) {
    return {
        type: CHANGE_BUBBLES,
        result: bubbles
    }
}