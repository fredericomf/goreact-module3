export const addTodo = text => ({
  // NOTA_ESTUDO: Tudo o que estiver aqui dentro meus reducers vão receber/ouvir
  type: 'ADD_TODO',
  payload: { text }, // NOTA_ESTUDO: payload é um padrão de codificação(boa prática). Toda vez que vamos passar informações/dados passamos dentro do payload
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: { id },
});
