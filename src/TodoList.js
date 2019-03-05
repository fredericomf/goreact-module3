import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// NOTA_ESTUDO: O connect é responsável por conectar as informações do reducer
import { connect } from 'react-redux';

// NOTA_ESTUDO: Seta o dispatch em cada uma das actions importadas (vide mapDispatchToProps)
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>REMOVE</button>
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo('Nuevo todo')}>ADD</button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

// NOTA_ESTUDO: Essa função vai transformar algumas informações do estado do redux em propriedades para o componente
// NOTA_ESTUDO: O state é toda a informação contida no redux
const mapStateToProps = state => ({
  todos: state.todos,
});

// NOTA_ESTUDO: As linhas abaixo são um código antigo para demonstração das dispatch actions.
// NOTA_ESTUDO: Não é uma boa prática deixar as nossas actions dentro do componente, como está aqui. Separaremos na pasta actions da store
// NOTA_ESTUDO: mapDispatchToProps são as actions do redux...
// const mapDispatchToProps = dispatch => ({
// addTodo: text => dispatch({
//   // NOTA_ESTUDO: Tudo o que estiver aqui dentro meus reducers vão receber/ouvir
//   type: 'ADD_TODO',
//   payload: { text }, // NOTA_ESTUDO: payload é um padrão de codificação(boa prática). Toda vez que vamos passar informações/dados passamos dentro do payload
// }),
// });

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
