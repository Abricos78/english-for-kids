import { Dispatch } from 'redux';
import { getAllWordsAPI, resetWordsAPI, updateStatisticAPI } from '../api';
import { Word } from '../api/interface';
import { percent } from '../utills/index';

const GET_ALL_WORDS_START = 'GET_ALL_WORDS_START';
const GET_ALL_WORDS_SUCCESS = 'GET_ALL_WORDS_SUCCESS';
const GET_ALL_WORDS_FAILURE = 'GET_ALL_WORDS_FAILURE';
const UPDATE_STATISTICS = 'UPDATE_STATISTICS';
const SET_SORT_TYPE = 'SET_SORT_TYPE';
const RESET_WORDS = 'RESET_WORDS';

export interface StatisticsInterface {
    words: Array<Record<string, string | number>>,
    sortType: string,
    order: string,
    buttons: Array<string>,
    loading: boolean,
}

const initialState = {
  words: [],
  sortType: 'name',
  order: 'ASC',
  buttons: ['name', 'translation', 'category', 'clicks', 'correct', 'wrong', 'percent'],
  loading: false,
} as StatisticsInterface;

const statistics = (state = initialState, { type, payload }: Record<string, string>) => {
  switch (type) {
    case RESET_WORDS:
    case UPDATE_STATISTICS:
      return { ...state, words: payload };
    case SET_SORT_TYPE:
      if (state.sortType === payload) {
        return state.order === 'ASC' ? { ...state, order: 'DESC' } : { ...state, order: 'ASC' };
      }
      return { ...state, sortType: payload, order: 'ASC' };
    case GET_ALL_WORDS_START:
      return { ...state, loading: true };
    case GET_ALL_WORDS_SUCCESS:
      return { ...state, words: payload, loading: false };
    case GET_ALL_WORDS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export const getAllWords = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_ALL_WORDS_START,
  });
  try {
    const allWords = await getAllWordsAPI();
    dispatch({
      type: GET_ALL_WORDS_SUCCESS,
      payload: allWords,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_WORDS_FAILURE,
    });
  }
};

export const updateStatistics = (words: Word[], type: string, word: Word) => async (dispatch: Dispatch) => {
  const updatingWords = words.map((item) => {
    if (item.name === word.name) {
      switch (type) {
        case 'clicks':
          return { ...item, clicks: item.clicks + 1 };
        case 'correct':
          return { ...item, correct: item.correct + 1, percent: percent(item.correct + 1, item.wrong) };
        case 'wrong':
          return { ...item, wrong: item.wrong + 1, percent: percent(item.correct, item.wrong + 1) };
        default:
          return item;
      }
    }
    return item;
  });
  const currentWord = updatingWords.find((item) => item.name === word.name);
  if (currentWord) {
    dispatch({
      type: UPDATE_STATISTICS,
      payload: await updateStatisticAPI(currentWord),
    });
  }
};

export const setSortType = (word: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SORT_TYPE,
    payload: word,
  });
};

export const resetWords = () => async (dispatch: Dispatch) => {
  dispatch({
    type: RESET_WORDS,
    payload: await resetWordsAPI(),
  });
};

export default statistics;
