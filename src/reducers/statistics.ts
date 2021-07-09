import { Dispatch } from 'redux';
import { percent } from '../utills';

const CREATE_DATA = 'CREATE_DATA';
const UPDATE_STATISTICS = 'UPDATE_STATISTICS';
const SET_SORT_TYPE = 'SET_SORT_TYPE';
const RESET_WORDS = 'RESET_WORDS';

export interface StatisticsInterface {
    words: Array<Record<string, string | number>>,
    sortType: string,
    order: string,
    buttons: Array<string>
}

const initialState = {
  words: [],
  sortType: 'word',
  order: 'ASC',
  buttons: ['word', 'translation', 'category', 'clicks', 'correct', 'wrong', 'percent'],
} as StatisticsInterface;

export const statistics = (state = initialState, { type, payload }: Record<string, string>) => {
  switch (type) {
    case CREATE_DATA:
    case RESET_WORDS:
    case UPDATE_STATISTICS:
      return { ...state, words: payload };
    case SET_SORT_TYPE:
      if (state.sortType === payload) {
        return state.order === 'ASC' ? { ...state, order: 'DESC' } : { ...state, order: 'ASC' };
      }
      return { ...state, sortType: payload, order: 'ASC' };
    default:
      return state;
  }
};

export const createData = (data: Record<string, Record<string, Record<string, string | number>>>) => (dispatch: Dispatch) => {
  let result: Record<string, Record<string, string | number>> = {};
  if (!localStorage.getItem('statistics')) {
    const keys = Object.keys(data);
    keys.forEach((category) => {
      const words = Object.keys(data[category]);
      words.forEach((word) => {
        result[word] = {
          translation: data[category][word].translate,
          category,
          clicks: 0,
          correct: 0,
          wrong: 0,
          percent: 0.00,
          logo: data[category][word].logo,
        };
      });
    });
    localStorage.setItem('statistics', JSON.stringify(result));
  } else {
    result = JSON.parse(localStorage.getItem('statistics')!);
  }
  dispatch({
    type: CREATE_DATA,
    payload: result,
  });
};

export const updateStatistics = (type: string, word: string) => (dispatch: Dispatch) => {
  const statistic = JSON.parse(localStorage.getItem('statistics')!);
  switch (type) {
    case 'clicks':
      statistic[word].clicks += 1;
      break;
    case 'correct':
      statistic[word].correct += 1;
      statistic[word].percent = percent(statistic[word].correct, statistic[word].wrong);
      break;
    case 'wrong':
      statistic[word].wrong += 1;
      statistic[word].percent = percent(statistic[word].correct, statistic[word].wrong);
      break;
    default:
      return;
  }
  dispatch({
    type: UPDATE_STATISTICS,
    payload: statistic,
  });
  localStorage.setItem('statistics', JSON.stringify(statistic));
};

export const setSortType = (word: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SORT_TYPE,
    payload: word,
  });
};

export const resetWords = () => (dispatch: Dispatch) => {
  const words = JSON.parse(localStorage.getItem('statistics')!);
  const arr = Object.keys(words);
  arr.forEach((item) => {
    const keys = Object.keys(words[item]);
    keys.forEach((word) => {
      switch (word) {
        case 'clicks':
        case 'correct':
        case 'wrong':
        case 'percent':
          words[item][word] = 0;
          break;
        default:
          break;
      }
    });
  });
  localStorage.setItem('statistics', JSON.stringify(words));
  dispatch({
    type: RESET_WORDS,
    payload: words,
  });
};
