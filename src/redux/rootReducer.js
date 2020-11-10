import { combineReducers } from 'redux'
import { DISABLE_BTN, ENABLE_BTN, CHANGE_THEME, INCREMENT, DECREMENT } from './types'

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT){
    return state - 1
  }else if (action.type === DECREMENT){
    return state + 1
  }
  return state
}

const initialThemeState ={
  value: 'light',
  disabled: false
}

function themeReducer(state = initialThemeState, action){
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, value: action.payLoad}
    case DISABLE_BTN:
      return {...state, disabled: true}
    case ENABLE_BTN:
        return {...state, disabled: false}
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})