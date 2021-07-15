import { Dispatch } from 'redux';
import { getDifficultWordsAPI, getWordsAPI } from '../api';
import { Word } from '../api/interface';

const GET_WORDS_START = 'GET_WORDS_START';
const GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS';
const GET_WORDS_FAILURE = 'GET_WORDS_FAILURE';
const GET_DIFFICULT_WORDS = 'GET_DIFFICULT_WORDS';

export interface Words {
  loading: boolean,
  words: Word[]
}

const initialState = {
  words: [],
  loading: false,
};

const words = (state = initialState, { payload, type }: Record<string, string>) => {
  switch (type) {
    case GET_WORDS_START:
      return { ...state, loading: true };
    case GET_WORDS_SUCCESS:
      return { ...state, loading: false, words: payload };
    case GET_WORDS_FAILURE:
      return { ...state, loading: false };
    case GET_DIFFICULT_WORDS:
      return { ...state, words: payload };
    default:
      return state;
  }
};

export const getWords = (categoryName: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_WORDS_START,
  });
  try {
    const allWords = await getWordsAPI(categoryName);
    dispatch({
      type: GET_WORDS_SUCCESS,
      payload: allWords,
    });
  } catch (e) {
    dispatch({
      type: GET_WORDS_FAILURE,
    });
  }
};

export const getDifficultWords = () => async (dispatch: Dispatch) => {
  const difficultWords = await getDifficultWordsAPI();
  dispatch({
    type: GET_DIFFICULT_WORDS,
    payload: difficultWords,
  });
};

export default words;
