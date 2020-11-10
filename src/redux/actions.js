import { ENABLE_BTN, DISABLE_BTN, CHANGE_THEME, INCREMENT, DECREMENT } from "./types";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function disableBtn() {
  return {
    type: DISABLE_BTN
  }
}

export function enableBtn() {
  return {
    type: ENABLE_BTN
  }
}

export function asyncIncrement(disabled) {
  return function(dispatch) {
    dispatch(disableBtn())
    setTimeout(()=> {
      dispatch(enableBtn())
      dispatch(increment());
    }, 1500)
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payLoad: newTheme
  }
}