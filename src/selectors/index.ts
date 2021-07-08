import { StateInterface } from '../reducers/state';
import { StatisticsInterface } from '../reducers/statistics';

export const getCategories = (state: StateInterface) => state.categories;

export const getStatusGame = (state: StateInterface) => state.game;

export const getCurrentCategory = (state: StateInterface) => state.currentCategory;

export const getModal = (state: StateInterface) => state.showModal;

export const getWords = (state: StateInterface) => state.words[state.currentCategory];

export const getStart = (state: StateInterface) => state.start;

export const getCurrentWord = (state: StateInterface) => state.currentWord;

export const getWindowAfterGame = (state: StateInterface) => state.windowAfterGame;

export const getRating = (state: StateInterface) => state.rating;

export const getAllMistakes = (state: StateInterface) => state.allMistakes;

export const getAllWords = (state: StateInterface) => state.words;

interface MyInterface {
  word: string,
  translation: string,
  category: number,
  clicks: number,
  correct: number,
  wrong: number,
  percent: number,
  logo: string
}

export const getWordsForStatistics = ({ words, sortType, order }: StatisticsInterface) => {
  const keys: Array<string> = Object.keys(words);
  const arr = keys.map((item: string): MyInterface => {
    const result = {
      word: item,
      translation: words[item].translation,
      category: words[item].category,
      clicks: words[item].clicks,
      correct: words[item].correct,
      wrong: words[item].wrong,
      percent: words[item].percent,
      logo: words[item].logo,
    };
    return result;
  });
  arr.sort((a: MyInterface, b: MyInterface) => {
    if (order === 'ASC' ? a[sortType] > b[sortType] : a[sortType] < b[sortType]) {
      return 1;
    }
    if (order === 'ASC' ? a[sortType] < b[sortType] : a[sortType] > b[sortType]) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const getButtons = (state: StatisticsInterface) => state.buttons;

export const getOrder = (state: StatisticsInterface) => state.order;

export const getSortType = (state: StatisticsInterface) => state.sortType;
