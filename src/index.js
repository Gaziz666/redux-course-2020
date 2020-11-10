import './styles.css'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { rootReducer } from './redux/rootReducer';
import { asyncIncrement, changeTheme, decrement, increment } from './redux/actions';

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');

/*function logger(state) {
  return function(next){
    return function(action){
      console.log('sate', state);
      console.log('action', action);
      return next(action)
    }
  }
}*/

const store = createStore(
  rootReducer, 
  compose (
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


addBtn.addEventListener('click', () => {
 store.dispatch(decrement())
})

subBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') 
  ? 'dark'
  : 'light'

  store.dispatch(changeTheme(newTheme))
})

store.subscribe(()=>{
  const state = store.getState()
  counter.textContent = state.counter;
  document.body.className = state.theme.value;

  [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
    btn.disabled = state.theme.disabled
  });
})

store.dispatch({type: '__INIT_APPLICATION'})