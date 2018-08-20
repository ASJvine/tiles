/* eslint-disable no-unused-expressions, implicit-arrow-linebreak */
import {
  TILES_GAME_LOCALSTORAGE_KEY,
  TOP_SCORES_LIST_LENGTH,
} from '../utils/constants';
import {
  setItemToLocalStorage,
  getItemParsedFromLocalStorage,
} from '../utils/utils';
import {
  MAX_TILES_GAME_LEVEL,
} from '../tiles/constants';

export const isWinner = score => score === MAX_TILES_GAME_LEVEL;

export const descSortScoreList = scoreList => scoreList.sort((a, b) => b.score - a.score);

export const isScoreHighEnough = (userScore, list) => userScore > list[list.length - 1].score;

export const isListMaxLength = list => list.length === TOP_SCORES_LIST_LENGTH;

export const addUserToExistingList = (user, list) => {
  const isListMax = isListMaxLength(list);

  if (!isListMax) {
    const arr2 = descSortScoreList([].concat(list, [user]));
    setItemToLocalStorage(TILES_GAME_LOCALSTORAGE_KEY, arr2);
  }

  if (isListMaxLength(list) && isScoreHighEnough(user.score, list)) {
    const arr1 = descSortScoreList([].concat(list, [user]));
    setItemToLocalStorage(TILES_GAME_LOCALSTORAGE_KEY, arr1.slice(0, TOP_SCORES_LIST_LENGTH));
  }
};

export const updateScoreListLocalStorage = (user) => {
  const userArr = [user];
  const scoreListLS = getItemParsedFromLocalStorage(TILES_GAME_LOCALSTORAGE_KEY);

  if (!scoreListLS) {
    setItemToLocalStorage(TILES_GAME_LOCALSTORAGE_KEY, userArr);
    return;
  }

  addUserToExistingList(user, scoreListLS);
};
