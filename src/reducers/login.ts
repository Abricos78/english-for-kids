import { Dispatch } from 'redux';
import {
  createCategoryAPI,
  createWordAPI,
  deleteCategoryAPI,
  deleteWordAPI,
  getAuthAPI,
  getCategoriesAPI, getWordsAPI, updateCategoryAPI, updateWordAPI,
} from '../api';
import { Category, Word } from '../api/interface';

const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
const CLOSE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
const SET_NAME = 'SET_NAME';
const SET_PASSWORD = 'SET_PASSWORD';
const CHECK_ADMIN_START = 'CHECK_ADMIN_START';
const CHECK_ADMIN_SUCCESS = 'CHECK_ADMIN_SUCCESS';
const CHECK_ADMIN_FAILURE = 'CHECK_ADMIN_FAILURE';
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const GET_CATEGORIES_ADMIN = 'GET_CATEGORIES_ADMIN';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const NEW_CATEGORY = 'NEW_CATEGORY';
const DELETE_NEW_CATEGORY = 'DELETE_NEW_CATEGORY';
const CREATE_NEW_CATEGORY_SUCCESS = 'CREATE_NEW_CATEGORY_SUCCESS';
const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
const TOGGLE_UPDATE = 'TOGGLE_UPDATE';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const SET_WORDS = 'SET_WORDS';
const SET_WORD = 'SET_WORD';
const SET_TRANSLATION = 'SET_TRANSLATION';
const DELETE_WORD = 'DELETE_WORD';
const SET_NEW_WORD = 'SET_NEW_WORD';
const SET_PREV_DATA = 'SET_PREV_DATA';
const UPDATE_WORD = 'UPDATE_WORD';
const CREATE_WORD = 'CREATE_WORD';
const CREATE_WORD_FAILURE = 'CREATE_WORD_FAILURE';
const SET_IMAGE = 'SET_IMAGE';
const SET_SOUND = 'SET_SOUND';
const LOG_OUT = 'LOG_OUT';

export interface LoginInterface {
  login: boolean
  name: string,
  password: string,
  loading: boolean,
  auth: boolean,
  currentCategory: string,
  categories: Category[],
  create: boolean,
  newCategory: string,
  newWord: string,
  update: boolean,
  words: Word[],
  data: Record<string, string>
}

const initialState = {
  login: false,
  name: '',
  password: '',
  loading: false,
  auth: false,
  currentCategory: '',
  categories: [],
  create: false,
  newCategory: '',
  update: false,
  newWord: '',
  words: [],
  data: {
    name: '',
    translation: '',
    logo: '',
  },
};

export const loginState = (state = initialState, { payload, type }: Record<string, string>) => {
  switch (type) {
    case TOGGLE_LOGIN_MODAL:
      return { ...state, login: !state.login };
    case CLOSE_LOGIN_MODAL:
      return { ...state, login: false };
    case SET_NAME:
      return { ...state, name: payload };
    case SET_PASSWORD:
      return { ...state, password: payload };
    case CHECK_ADMIN_START:
      return { ...state, loading: true };
    case CHECK_ADMIN_SUCCESS:
      return {
        ...state, loading: false, auth: true, login: false,
      };
    case CHECK_ADMIN_FAILURE:
      return {
        ...state, loading: false, login: false,
      };
    case SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: payload };
    case GET_CATEGORIES_ADMIN:
      return { ...state, categories: payload };
    case CREATE_CATEGORY:
      return { ...state, create: true, data: { name: '', logo: '', translation: '' } };
    case NEW_CATEGORY:
      return { ...state, newCategory: payload };
    case DELETE_NEW_CATEGORY:
      return {
        ...state, newCategory: '', create: false, update: false, currentCategory: '',
      };
    case CREATE_NEW_CATEGORY_SUCCESS:
      return {
        ...state, categories: payload, create: false, newCategory: '',
      };
    case DELETE_CATEGORY_SUCCESS:
      return { ...state, categories: payload };
    case TOGGLE_UPDATE:
      return { ...state, update: !state.update };
    case UPDATE_CATEGORY:
      return {
        ...state, update: false, categories: payload, newCategory: '', currentCategory: '',
      };
    case SET_WORDS:
    case DELETE_WORD:
    case UPDATE_WORD:
    case CREATE_WORD:
      return { ...state, words: payload, create: false };
    case SET_WORD:
      return { ...state, data: { ...state.data, name: payload.toLowerCase() } };
    case SET_TRANSLATION:
      return { ...state, data: { ...state.data, translation: payload.toLowerCase() } };
    case SET_NEW_WORD:
      return { ...state, newWord: payload, data: { ...state.data, oldName: payload } };
    case SET_PREV_DATA:
      return { ...state, data: payload };
    case CREATE_WORD_FAILURE:
      return { ...state, create: false };
    case SET_IMAGE:
      return { ...state, data: { ...state.data, logo: payload } };
    case SET_SOUND:
      return { ...state, data: { ...state.data, sound: payload } };
    case LOG_OUT:
      return { ...state, auth: false };
    default:
      return state;
  }
};

export const toggleLoginModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_LOGIN_MODAL,
  });
};

export const closeLoginModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: CLOSE_LOGIN_MODAL,
  });
};

export const setName = (value: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: value.trim(),
  });
};

export const setPassword = (value: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_PASSWORD,
    payload: value.trim(),
  });
};

export const checkAdmin = (name: string, password: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: CHECK_ADMIN_START,
  });
  try {
    const data = await getAuthAPI();
    if (data.name === name && data.password === password) {
      dispatch({
        type: CHECK_ADMIN_SUCCESS,
      });
    } else {
      dispatch({
        type: CHECK_ADMIN_FAILURE,
      });
    }
  } catch (e) {
    dispatch({
      type: CHECK_ADMIN_FAILURE,
    });
  }
};

export const setCurrentCategory = (name: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_CURRENT_CATEGORY,
    payload: name,
  });
};

export const getCategoriesAdmin = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_CATEGORIES_ADMIN,
    payload: await getCategoriesAPI(),
  });
};

export const createCategory = () => (dispatch: Dispatch) => {
  dispatch({
    type: CREATE_CATEGORY,
  });
};

export const newCategory = (val: string) => (dispatch: Dispatch) => {
  dispatch({
    type: NEW_CATEGORY,
    payload: val,
  });
};

export const deleteNewCategory = () => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_NEW_CATEGORY,
  });
};

export const createNewCategory = (val: string) => async (dispatch: Dispatch) => {
  if (val === '') {
    dispatch({
      type: DELETE_NEW_CATEGORY,
    });
  }
  const data = {
    name: val.toLowerCase(),
  };
  try {
    const categories = await createCategoryAPI(data);
    if (categories.length > 0) {
      dispatch({
        type: CREATE_NEW_CATEGORY_SUCCESS,
        payload: categories,
      });
    } else {
      dispatch({
        type: DELETE_NEW_CATEGORY,
      });
    }
  } catch (e) {
    dispatch({
      type: DELETE_NEW_CATEGORY,
    });
  }
};

export const deleteCategory = (name: string) => async (dispatch: Dispatch) => {
  const categories = await deleteCategoryAPI(name);
  if (categories.length > 0) {
    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: categories,
    });
  }
};

export const updateCategory = (name: string, newName: string) => async (dispatch: Dispatch) => {
  const categories = await updateCategoryAPI(name, newName);
  if (categories.length > 0) {
    dispatch({
      type: UPDATE_CATEGORY,
      payload: categories,
    });
  }
};

export const toggleUpdate = () => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_UPDATE,
  });
};

export const setWords = (categoryName: string) => async (dispatch: Dispatch) => {
  const words = await getWordsAPI(categoryName);
  if (words.length > 0) {
    dispatch({
      type: SET_WORDS,
      payload: words,
    });
  }
};

export const setWord = (val: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_WORD,
    payload: val,
  });
};

export const setTranslation = (val: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_TRANSLATION,
    payload: val,
  });
};

export const deleteWord = (categoryName: string, name: string) => async (dispatch: Dispatch) => {
  const words = await deleteWordAPI(categoryName, name);
  dispatch({
    type: DELETE_WORD,
    payload: words,
  });
};

export const setNewWord = (newWord: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_NEW_WORD,
    payload: newWord,
  });
};

export const setPrevData = (data: Record<string, string>) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_PREV_DATA,
    payload: data,
  });
};

export const updateWord = (categoryName: string, data: Record<string, string>) => async (dispatch: Dispatch) => {
  const words = await updateWordAPI(categoryName, data);
  dispatch({
    type: UPDATE_WORD,
    payload: words,
  });
};

export const createWord = (categoryName: string, data: Record<string, string>) => async (dispatch: Dispatch) => {
  if (!data.name) {
    dispatch({
      type: CREATE_WORD_FAILURE,
    });
  }
  try {
    const words = await createWordAPI(categoryName, data);
    dispatch({
      type: CREATE_WORD,
      payload: words,
    });
  } catch (e) {
    dispatch({
      type: CREATE_WORD_FAILURE,
    });
  }
};

export const setImage = (image: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_IMAGE,
    payload: image,
  });
};

export const setSound = (sound: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SOUND,
    payload: sound,
  });
};

export const logOut = () => (dispatch: Dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};

export default loginState;
