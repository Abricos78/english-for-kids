import { Dispatch } from 'redux';
import { soundPlay } from '../utills';

const TOGGLE_GAME = 'TOGGLE_GAME';
const SHOW_MODAL = 'SHOW_MODAL';
const RESET_CURRENT_CATEGORY = 'RESET_CURRENT_CATEGORY';
const CLOSE_MODAL = 'CLOSE_MODAL';
const START_GAME = 'START_GAME';
const FINISH_GAME = 'FINISH_GAME';
const SET_RANDOM_WORD_ORDER = 'SET_RANDOM_WORD_ORDER';
const SET_CURRENT_WORD = 'SET_CURRENT_WORD';
const NEXT_WORD = 'NEXT_WORD';
const CHANGE_RATING = 'CHANGE_RATING';
const SET_MISTAKE = 'SET_MISTAKE';
const OPEN_WINDOW_AFTER_GAME = 'OPEN_WINDOW_AFTER_GAME';

export interface StateInterface {
    game: boolean,
    showModal: boolean,
    start: boolean,
    finish: boolean,
    currentWord: string,
    randomWordOrder: Array<string>,
    rating: Array<string>,
    allMistakes: number,
    windowAfterGame: boolean,
}

const initialState = {
  game: false,
  showModal: false,
  start: false,
  finish: false,
  currentWord: '',
  randomWordOrder: [],
  rating: [],
  allMistakes: 0,
  windowAfterGame: false,
} as StateInterface;

export const data = (state = initialState, { type, payload }: Record<string, string>) => {
  const currentNum = state.randomWordOrder.indexOf(state.currentWord);
  const nextWord = state.randomWordOrder[currentNum + 1];
  switch (type) {
    case TOGGLE_GAME:
      return { ...state, game: !state.game };
    case SHOW_MODAL:
      return { ...state, showModal: !state.showModal };
    case RESET_CURRENT_CATEGORY:
      return { ...state, currentCategory: '' };
    case CLOSE_MODAL:
      return { ...state, showModal: false };
    case START_GAME:
      return { ...state, start: true };
    case FINISH_GAME:
      return {
        ...state,
        start: false,
        finish: true,
        rating: [],
        allMistakes: 0,
        currentWord: '',
        windowAfterGame: false,
        randowWordOrder: [],
      };
    case SET_RANDOM_WORD_ORDER:
      return { ...state, randomWordOrder: payload };
    case SET_CURRENT_WORD:
      return { ...state, currentWord: payload };
    case NEXT_WORD:
      if (nextWord !== undefined) {
        setTimeout(() => soundPlay(nextWord), 1000);
        return { ...state, currentWord: nextWord };
      }
      return { ...state, currentWord: 'END' };
    case CHANGE_RATING:
      return { ...state, rating: [...state.rating, payload] };
    case SET_MISTAKE:
      return { ...state, allMistakes: state.allMistakes + 1 };
    case OPEN_WINDOW_AFTER_GAME:
      return { ...state, windowAfterGame: true };
    default:
      return state;
  }
};

export const toggleGame = () => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_GAME,
  });
};

export const showModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: SHOW_MODAL,
  });
};

export const resetCurrentCategory = () => (dispatch: Dispatch) => {
  dispatch({
    type: RESET_CURRENT_CATEGORY,
  });
};

export const closeModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
  });
};

export const startGame = () => (dispatch: Dispatch) => {
  dispatch({
    type: START_GAME,
  });
};

export const finishGame = () => (dispatch: Dispatch) => {
  dispatch({
    type: FINISH_GAME,
  });
};

const setCurrentWord = (word: string) => ({
  type: SET_CURRENT_WORD,
  payload: word,
});

export const setRandomWordOrder = (order: Array<string>) => (dispatch: Dispatch) => {
  dispatch(setCurrentWord(order[0]));
  dispatch({
    type: SET_RANDOM_WORD_ORDER,
    payload: order,
  });
};

export const nextWord = () => (dispatch: Dispatch) => {
  dispatch({
    type: NEXT_WORD,
  });
};

export const changeRating = (type: string) => (dispatch: Dispatch) => {
  dispatch({
    type: CHANGE_RATING,
    payload: type,
  });
};

export const setMistake = () => (dispatch: Dispatch) => {
  dispatch({
    type: SET_MISTAKE,
  });
};

export const openWindowAfterGame = () => (dispatch: Dispatch) => {
  dispatch({
    type: OPEN_WINDOW_AFTER_GAME,
  });
};
