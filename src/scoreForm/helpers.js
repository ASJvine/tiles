/* eslint-disable no-unused-expressions, implicit-arrow-linebreak */
import {
  TILES_GAME_LOCALSTORAGE_KEY,
  TOP_SCORES_LIST_LENGTH,
} from '../utils/constants';
import {
  setItemToLocalStorage,
  getItemParsedFromLocalStorage,
} from '../utils/utils';

export const descSortScoreList = scoreList => scoreList.sort((a, b) => b.score - a.score);

export const isScoreListUpdated = (userScore, list) =>
  list.length < TOP_SCORES_LIST_LENGTH || list[list.length - 1].score < userScore;

export const updateScoreListLocalStorage = (user) => {
  const userArr = [user];
  const localStorageData = getItemParsedFromLocalStorage(TILES_GAME_LOCALSTORAGE_KEY);

  if (!localStorageData) {
    setItemToLocalStorage(TILES_GAME_LOCALSTORAGE_KEY, userArr);
    return;
  }

  if (isScoreListUpdated(user.score, localStorageData)) {
    const updatedArray = descSortScoreList([].concat(localStorageData, userArr));
    setItemToLocalStorage(TILES_GAME_LOCALSTORAGE_KEY, updatedArray);
  }
};
