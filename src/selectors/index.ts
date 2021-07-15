import { Categories } from '../reducers/categories';
import { LoginInterface } from '../reducers/login';
import { StateInterface } from '../reducers/state';
import { StatisticsInterface } from '../reducers/statistics';
import { Words } from '../reducers/words';

export const getCategories = (state: Categories | LoginInterface) => state.categories;

export const getStatusGame = (state: StateInterface) => state.game;

export const getCurrentCategory = (state: Categories | LoginInterface) => state.currentCategory;

export const getModal = (state: StateInterface) => state.showModal;

export const getWords = (state: Words | StatisticsInterface | LoginInterface) => state.words;

export const getStart = (state: StateInterface) => state.start;

export const getCurrentWord = (state: StateInterface) => state.currentWord;

export const getWindowAfterGame = (state: StateInterface) => state.windowAfterGame;

export const getRating = (state: StateInterface) => state.rating;

export const getAllMistakes = (state: StateInterface) => state.allMistakes;

export const getWordsForStatistics = ({ words, sortType, order }: StatisticsInterface) => {
  words.sort((a, b) => {
    if (order === 'ASC' ? a[sortType] > b[sortType] : a[sortType] < b[sortType]) {
      return 1;
    }
    if (order === 'ASC' ? a[sortType] < b[sortType] : a[sortType] > b[sortType]) {
      return -1;
    }
    return 0;
  });
  return words;
};

export const getButtons = (state: StatisticsInterface) => state.buttons;

export const getOrder = (state: StatisticsInterface) => state.order;

export const getSortType = (state: StatisticsInterface) => state.sortType;

export const getLoading = (state: Categories | LoginInterface) => state.loading;

export const getLogin = (state: LoginInterface) => state.login;

export const getName = (state: LoginInterface) => state.name;

export const getPassword = (state: LoginInterface) => state.password;

export const getAuth = (state: LoginInterface) => state.auth;

export const getCreate = (state: LoginInterface) => state.create;

export const getNewCategory = (state: LoginInterface) => state.newCategory;

export const getUpdate = (state: LoginInterface) => state.update;

export const getWordsForAdmin = (state: LoginInterface) => state.words;

export const getNewWord = (state: LoginInterface) => state.newWord;

export const getWord = (state: LoginInterface) => state.data.name;

export const getTranslation = (state: LoginInterface) => state.data.translation;

export const getData = (state: LoginInterface) => state.data;
