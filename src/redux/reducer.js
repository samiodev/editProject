const initialState = [
  {
    id: 0,
    name: 'Sami',
    descr: 'Hello sam'
  },
  {
    id: 1,
    name: 'Ali',
    descr: 'Hello ali'
  }
]

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      state = [...state, action.payload]
      return state;
    case 'UPDATE_PROJECT':
      const updateState = state.map(project => project.id === action.payload.id ? action.payload : project)
      state = updateState
      return state
    default: return state;
  }
}

export default projectReducer;