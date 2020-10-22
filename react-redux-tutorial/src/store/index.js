import { createStore } from 'redux'

const initialState = {
    color: ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'],
    colornow: 0,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGECOLORNOW') {
    return Object.assign({}, state, {
        colornow: state.colornow + 1
    })
  }

  if (action.type === 'RESETCOLOR') {
    return Object.assign({}, state, {
        colornow: 0
    })
  }

  return state
}

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store