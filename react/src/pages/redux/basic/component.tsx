import { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { addTodo, setVisibilityFilter, toggleTodo } from "./action";
import { FilterAction, State, TodoAction, TodoData, VisibilityFilter } from "./type";

type AddTodoProps = {
  dispatch: Dispatch<TodoAction>,
}

const AddTodo = ({ dispatch }: AddTodoProps) => {
  const [input, setInput] = useState<string>();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input?.trim()) {
            return;
          }
          dispatch(addTodo(input));
          setInput("");
        }}>
        <input onChange={e => setInput(e.currentTarget.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export const AddNewTodo = connect()(AddTodo);


type TodoItemProps = {
  id: string,
  text: string,
  completed: boolean,
  onClick: () => void,
}

const TodoItem = ({ completed, text, onClick }: TodoItemProps): JSX.Element => (
  <li
    className={completed ? "line-through" : "no-underline"}
    onClick={onClick}
  >
    {text}
  </li>
);

type TodoListProps = {
  todos: Array<TodoData>;
  onTodoClick: (id: string) => void;
}

const TodoList = ({ todos, onTodoClick }: TodoListProps): JSX.Element => (
  <ul>
    {
      todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))
    }
  </ul>
);

export const VisibleTodoList = connect(
  (state: State) => (
    {
      todos: state.todos
    }
  ),
  (dispatch: Dispatch<TodoAction>) => (
    {
      onTodoClick: (id: string) => dispatch(toggleTodo(id))
    }
  ),
)(TodoList);


type LinkProps = {
  active: boolean;
  onClick: () => void;
  children: string | JSX.Element;
}

const Link = ({ active, onClick, children }: LinkProps): JSX.Element => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="#!"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const FilterLink = connect(
  (state: State, ownProps: { filter: VisibilityFilter }) => (
    {
      active: state.filter === ownProps.filter
    }
  ),
  (dispatch: Dispatch<FilterAction>, ownProps: { filter: VisibilityFilter }) => (
    {
      onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
  )
)(Link);


export const Footer = (): JSX.Element => (
  <p>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);
