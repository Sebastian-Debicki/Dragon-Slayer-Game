import * as actionTypes from './actionTypes';
import firebase from 'firebase';
import axios from 'axios';
import { shop } from '../../data/shop';

export const saveChangedGameStatistics = (data) => {
  return dispatch => {
    firebase.database().ref('games/' + data.id + '/games').set({
      ...data.games
    })
  }
}

export const newUserStartGame = (token, userId) => {
  const data = {
    userId,
    games: {
      game1: {
        newGame: true,
        gold: 0,
        shop
      },
      game2: {
        newGame: true,
        gold: 0,
        shop
      },
      game3: {
        newGame: true,
        gold: 0,
        shop
      }
    }
  }
  return dispatch => {
    axios.post('https://game-4af87.firebaseio.com/games.json?auth=' + token, data)
    dispatch(fetchGamesSuccess(data))
  }
}

export const fetchGamesStart = () => {
  return {
    type: actionTypes.FETCH_START
  }
}

export const fetchGamesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    data
  }
}

export const fetchGamesFail = (error) => {
  return {
    type: actionTypes.FETCH_FAIL,
    error
  }
}

export const fetchGames = (token, userId) => {
  return dispatch => {
    dispatch(fetchGamesStart())
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://game-4af87.firebaseio.com/games.json' + queryParams)
      .then(res => {
        let fetchedData;
        for (let key in res.data) {
          fetchedData = {
            userId: res.data[key].userId,
            games: res.data[key].games,
            id: key
          }
        }
        dispatch(fetchGamesSuccess(fetchedData))
      })
      .catch(err => dispatch(fetchGamesFail(err)))
  }
}