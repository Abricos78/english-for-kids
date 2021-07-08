import { Dispatch } from 'redux';
import { sound } from '../utills';

const TOGGLE_GAME = 'TOGGLE_GAME';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
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
const CREATE_DIFFICULT_WORDS = 'CREATE_DIFFICULT_WORDS';

export interface StateInterface {
    categories: Array<Record<string, string>>,
    words: Record<string, Record<string, Record<string, string>>>,
    currentCategory: string,
    game: boolean,
    showModal: boolean,
    start: boolean,
    finish: boolean,
    currentWord: string,
    randomWordOrder: Array<string>,
    rating: Array<string>,
    allMistakes: number,
    windowAfterGame: boolean
}

const initialState = {
  categories: [
    {
      category: 'Action (set A)',
      logo: 'https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg',
    },
    {
      category: 'Action (set B)',
      logo: 'https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg',
    },
    {
      category: 'Action (set C)',
      logo: 'https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg',
    },
    {
      category: 'Adjective',
      logo: 'https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg',
    },
    {
      category: 'Animal (set A)',
      logo: 'https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg',
    },
    {
      category: 'Animal (set B)',
      logo: 'https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg',
    },
    {
      category: 'Clothes',
      logo: 'https://english-for-kids.netlify.app/static/media/blouse.37a6d8fa.jpg',
    },
    {
      category: 'Emotion',
      logo: 'https://english-for-kids.netlify.app/static/media/smile.f55cb470.jpg',
    },
  ],
  words: {
    'Action (set A)': {
      cry: {
        translate: 'плакать',
        logo: 'https://english-for-kids.netlify.app/static/media/cry.26a84a2c.jpg',
      },
      dance: {
        translate: 'танцевать',
        logo: 'https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg',
      },
      dive: {
        translate: 'нырять',
        logo: 'https://english-for-kids.netlify.app/static/media/dive.41b7d509.jpg',
      },
      draw: {
        translate: 'рисовать',
        logo: 'https://english-for-kids.netlify.app/static/media/draw.82be9665.jpg',
      },
      fish: {
        translate: 'ловить рыбу',
        logo: 'https://english-for-kids.netlify.app/static/media/fish.27eb7746.jpg',
      },
      fly: {
        translate: 'летать',
        logo: 'https://english-for-kids.netlify.app/static/media/fly.6122fa03.jpg',
      },
      hug: {
        translate: 'обнимать',
        logo: 'https://english-for-kids.netlify.app/static/media/hug.9dda3c46.jpg',
      },
      jump: {
        translate: 'прыгать',
        logo: 'https://english-for-kids.netlify.app/static/media/jump.ac945820.jpg',
      },
    },
    'Action (set B)': {
      open: {
        translate: 'открывать',
        logo: 'https://english-for-kids.netlify.app/static/media/open.191b88af.jpg',
      },
      play: {
        translate: 'играть',
        logo: 'https://english-for-kids.netlify.app/static/media/play.75cbc10c.jpg',
      },
      point: {
        translate: 'указывать',
        logo: 'https://english-for-kids.netlify.app/static/media/point.ba50996a.jpg',
      },
      ride: {
        translate: 'ездить',
        logo: 'https://english-for-kids.netlify.app/static/media/ride.b7a77474.jpg',
      },
      run: {
        translate: 'бегать',
        logo: 'https://english-for-kids.netlify.app/static/media/run.0e8d157f.jpg',
      },
      sing: {
        translate: 'петь',
        logo: 'https://english-for-kids.netlify.app/static/media/sing.d2d52786.jpg',
      },
      skip: {
        translate: 'пропускать, прыгать',
        logo: 'https://english-for-kids.netlify.app/static/media/skip.081bf61e.jpg',
      },
      swim: {
        translate: 'плавать',
        logo: 'https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg',
      },
    },
    'Action (set C)': {
      argue: {
        translate: 'спорить',
        logo: 'https://english-for-kids.netlify.app/static/media/argue.06b9a73a.jpg',
      },
      build: {
        translate: 'строить',
        logo: 'https://english-for-kids.netlify.app/static/media/build.0ddc52ca.jpg',
      },
      carry: {
        translate: 'нести',
        logo: 'https://english-for-kids.netlify.app/static/media/carry.4e29617e.jpg',
      },
      catch: {
        translate: 'ловить',
        logo: 'https://english-for-kids.netlify.app/static/media/catch.02ee0391.jpg',
      },
      drive: {
        translate: 'водить машину',
        logo: 'https://english-for-kids.netlify.app/static/media/drive.7756db52.jpg',
      },
      drop: {
        translate: 'падать',
        logo: 'https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg',
      },
      pull: {
        translate: 'тянуть',
        logo: 'https://english-for-kids.netlify.app/static/media/pull.958b53a6.jpg',
      },
      push: {
        translate: 'толкать',
        logo: 'https://english-for-kids.netlify.app/static/media/push.f5183491.jpg',
      },
    },
    Adjective: {
      big: {
        translate: 'большой',
        logo: 'https://english-for-kids.netlify.app/static/media/big.15366658.jpg',
      },
      small: {
        translate: 'маленький',
        logo: 'https://english-for-kids.netlify.app/static/media/small.a9f7a59d.jpg',
      },
      fast: {
        translate: 'быстрый',
        logo: 'https://english-for-kids.netlify.app/static/media/fast.2d5d071e.jpg',
      },
      slow: {
        translate: 'медленный',
        logo: 'https://english-for-kids.netlify.app/static/media/slow.7bbcaa16.jpg',
      },
      friendly: {
        translate: 'дружелюбный',
        logo: 'https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg',
      },
      unfriendly: {
        translate: 'недружелюбный',
        logo: 'https://english-for-kids.netlify.app/static/media/unfriendly.9bb158bd.jpg',
      },
      young: {
        translate: 'молодой',
        logo: 'https://english-for-kids.netlify.app/static/media/young.7498933a.jpg',
      },
      old: {
        translate: 'старый',
        logo: 'https://english-for-kids.netlify.app/static/media/old.76174203.jpg',
      },
    },
    'Animal (set A)': {
      cat: {
        translate: 'кошка',
        logo: 'https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg',
      },
      chick: {
        translate: 'цыпленок',
        logo: 'https://english-for-kids.netlify.app/static/media/chick.11bf9adb.jpg',
      },
      chicken: {
        translate: 'курица',
        logo: 'https://english-for-kids.netlify.app/static/media/chicken.915430df.jpg',
      },
      dog: {
        translate: 'собака',
        logo: 'https://english-for-kids.netlify.app/static/media/dog.109811ba.jpg',
      },
      horse: {
        translate: 'лошадь',
        logo: 'https://english-for-kids.netlify.app/static/media/horse.8a825b3b.jpg',
      },
      pig: {
        translate: 'свинья',
        logo: 'https://english-for-kids.netlify.app/static/media/pig.72810927.jpg',
      },
      rabbit: {
        translate: 'кролик',
        logo: 'https://english-for-kids.netlify.app/static/media/rabbit.7242c16a.jpg',
      },
      sheep: {
        translate: 'овца',
        logo: 'https://english-for-kids.netlify.app/static/media/sheep.8d2deb43.jpg',
      },
    },
    'Animal (set B)': {
      bird: {
        translate: 'птица',
        logo: 'https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg',
      },
      fish: {
        translate: 'рыба',
        logo: 'https://english-for-kids.netlify.app/static/media/fish1.296cfcd4.jpg',
      },
      frog: {
        translate: 'лягушка',
        logo: 'https://english-for-kids.netlify.app/static/media/frog.e8a07dca.jpg',
      },
      giraffe: {
        translate: 'жираф',
        logo: 'https://english-for-kids.netlify.app/static/media/giraffe.32ab22c7.jpg',
      },
      lion: {
        translate: 'лев',
        logo: 'https://english-for-kids.netlify.app/static/media/lion.273c0650.jpg',
      },
      mouse: {
        translate: 'мышь',
        logo: 'https://english-for-kids.netlify.app/static/media/mouse.a73259d9.jpg',
      },
      turtle: {
        translate: 'черепаха',
        logo: 'https://english-for-kids.netlify.app/static/media/turtle.b1e5849e.jpg',
      },
      dolphin: {
        translate: 'дельфин',
        logo: 'https://english-for-kids.netlify.app/static/media/dolphin.905447d1.jpg',
      },
    },
    Clothes: {
      skirt: {
        translate: 'юбка',
        logo: 'https://poshivm.ru/blog/img/items/i-16.jpg',
      },
      pants: {
        translate: 'брюки',
        logo: 'https://images.ru.prom.st/791403737_w500_h500_adidas-bryuki-sportivnye.jpg',
      },
      blouse: {
        translate: 'блузка',
        logo: 'https://i.etsystatic.com/19861253/d/il/bfe168/1932269032/il_340x270.1932269032_bhxs.jpg?version=1',
      },
      dress: {
        translate: 'платье',
        logo: 'https://prformula.ru/wp-content/uploads/2019/05/3-1-300x200.jpg',
      },
      boot: {
        translate: 'ботинок',
        logo: 'https://images.ru.prom.st/675422978_w200_h200_hummer-botinki-rabochie.jpg',
      },
      shirt: {
        translate: 'рубашка',
        logo: 'https://mirnadivane.ru/wp-content/uploads/2017/05/effekt-ot-otbelivateley-s-hlorom-zametney-vsego-no-300x200.jpg',
      },
      coat: {
        translate: 'пальто',
        logo: 'http://mywishlist.ru/pic/i/wish/300x300/008/450/708.jpeg',
      },
      shoe: {
        translate: 'туфли',
        logo: 'https://kzn-ritual.ru/upload/iblock/a53/a53ec334b89baa9efc4af2af1f2a7abd.jpg',
      },
    },
    Emotion: {
      sad: {
        translate: 'грустный',
        logo: 'http://vsknebo.ru/wp-content/uploads/2018/03/3774469-300x200.jpg',
      },
      angry: {
        translate: 'сердитый',
        logo: 'https://arulchandrana.files.wordpress.com/2011/10/jangan-buat-dia-keras-dan-marah-hatinya.jpg',
      },
      happy: {
        translate: 'счастливый',
        logo: 'http://russiantourism.ru/netcat_files/2343_8023.jpg',
      },
      tired: {
        translate: 'уставший',
        logo: 'https://ideasqueinspiran.com/wp-content/uploads/2016/04/sindrome-de-burnout-en-el-docente-300x200.jpg',
      },
      surprised: {
        translate: 'удивленный',
        logo: 'https://wikimedspravka.ru/wp-content/public_images2/26e34439168bd4edaf34375aafb04d6f-300x200.jpg',
      },
      scared: {
        translate: 'испуганный',
        logo: 'http://gracieraleigh.com/wp-content/uploads/2015/08/bigstock-Young-Angry-boy-yelling-84661142-300x200.jpg',
      },
      smile: {
        translate: 'улыбка',
        logo: 'http://www.americaru.com/i/n/2015-09-291443536083.jpg',
      },
      laugh: {
        translate: 'смех',
        logo: 'https://miro.medium.com/max/300/0*pSxV30GVEVbJGXHU.jpg',
      },
    },
    'Difficult Words': {},
  },
  currentCategory: '',
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
    case SELECT_CATEGORY:
      return { ...state, currentCategory: payload };
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
        ...state, start: false, finish: true, rating: [], allMistakes: 0, currentWord: '', windowAfterGame: false,
      };
    case SET_RANDOM_WORD_ORDER:
      return { ...state, randomWordOrder: payload };
    case SET_CURRENT_WORD:
      return { ...state, currentWord: payload };
    case NEXT_WORD:
      if (nextWord !== undefined) {
        setTimeout(() => sound(nextWord), 1000);
        return { ...state, currentWord: nextWord };
      }
      return { ...state, currentWord: undefined };
    case CHANGE_RATING:
      return { ...state, rating: [...state.rating, payload] };
    case SET_MISTAKE:
      return { ...state, allMistakes: state.allMistakes + 1 };
    case OPEN_WINDOW_AFTER_GAME:
      return { ...state, windowAfterGame: true };
    case CREATE_DIFFICULT_WORDS:
      return { ...state, words: { ...state.words, 'Difficult Words': payload } };
    default:
      return state;
  }
};

export const toggleGame = () => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_GAME,
  });
};

export const selectCategory = (category: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SELECT_CATEGORY,
    payload: category,
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

export const createDifficultWords = (words:Array<Record<string, string|number>>) => (dispatch: Dispatch) => {
  const copy = [...words];
  const result: Record<string, Record<string, string | number>> = {};
  copy.sort((a, b) => {
    if (a.percent < b.percent) {
      return 1;
    }
    if (a.percent > b.percent) {
      return -1;
    }
    return 0;
  });
  copy.filter(
    (item, index) => (item.percent > 0 && index < 8),
  ).forEach(({ word, translation, logo }) => {
    result[word] = {
      translate: translation,
      logo,
    };
  });
  dispatch({
    type: CREATE_DIFFICULT_WORDS,
    payload: result,
  });
};
