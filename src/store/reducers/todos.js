const INITIAL_STATE = [{ id: 1, text: 'Fazer café' }, { id: 2, text: 'Estudar React' }];

// NOTA_ESTUDO: O parâmetro state é o nosso estado antes da alteração no reducer

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
