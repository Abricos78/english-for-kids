import { Dispatch } from 'redux';
import { getCategoriesAPI } from '../api';
import { Category } from '../api/interface';

const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

export interface Categories {
  loading: boolean,
  categories: Category[],
  currentCategory: string
}

const initialState = {
  categories: [],
  currentCategory: '',
  loading: false,
};

const categories = (state = initialState, { payload, type }: Record<string, string>) => {
  switch (type) {
    case GET_CATEGORIES_START:
      return { ...state, loading: true };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, loading: false };
    case GET_CATEGORIES_FAILURE:
      return { ...state, loading: false };
    case SELECT_CATEGORY:
      return { ...state, currentCategory: payload };
    default:
      return state;
  }
};

export const getCategories = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_CATEGORIES_START,
  });
  try {
    const allCategories = await getCategoriesAPI();
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: allCategories,
    });
  } catch (e) {
    dispatch({
      type: GET_CATEGORIES_FAILURE,
    });
  }
};

export const selectCategory = (category: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SELECT_CATEGORY,
    payload: category,
  });
};

export default categories;
