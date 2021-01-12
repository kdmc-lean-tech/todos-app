
export const todoReducer = ( state, action ) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return [...state].filter(s => s.id !== action.payload);
    case 'toogle':
      return [...state].map(t => (t.id === action.payload ? { ...t, done: !t.done } : t));
    default:
      return state;
  }
}
