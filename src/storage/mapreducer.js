export const MAP_ARRAY = 'MAP_ARRAY'

const initialState = {
  obj: []
}

const mapArray = (state = initialState, action) => {
  switch (action.type) {
    case MAP_ARRAY: return {
      ...state,
      obj: action.payload
    }
    default: return state
  }
}

export default mapArray
