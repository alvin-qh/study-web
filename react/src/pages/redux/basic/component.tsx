import { Button, InputGroup, Intent } from "@blueprintjs/core";
import { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { addTodo, setVisibilityFilter, toggleTodo } from "./action";
import { FilterAction, State, TodoAction, TodoData, VisibilityFilter } from "./type";

type AddTodoProps = {
  dispatch: Dispatch<TodoAction>,
}

const _AddTodo = ({ dispatch }: AddTodoProps) => {
  const [input, setInput] = useState<string>("");

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
        <div
          className="flex items-center space-x-2"
        >
          <InputGroup
            large={true}
            onChange={e => setInput(e.currentTarget.value)}
            className="flex-1 focus:outline-none shadow-md"
            value={input}
          />
          <Button
            type="submit"
            large={true}
            intent={Intent.PRIMARY}
            icon="saved"
            className="flex-0 focus:outline-none shadow-md"
          />
        </div>
      </form>
    </div>
  );
}

export const AddTodo = connect()(_AddTodo);


type TodoItemProps = {
  id: string,
  text: string,
  completed: boolean,
  onClick: () => void,
}

const TodoItem = ({ completed, text, onClick }: TodoItemProps): JSX.Element => (
  <li
    className={`${completed ? "line-through bg-sky-100" : "no-underline bg-green-100 font-medium"} px-4 py-2 border-b border-gray-300`}
    onClick={onClick}
  >
    {text}
  </li>
);

type TodoListProps = {
  todos: Array<TodoData>;
  onTodoClick: (id: string) => void;
}

const _TodoList = ({ todos, onTodoClick }: TodoListProps): JSX.Element => (
  <ul
    style={{ minHeight: "200px" }}
    className="border shadow-md rounded-md bg-white"
  >
    {
      todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))
    }
  </ul>
);

const _todoListMapStateToProps = (state: State): Omit<TodoListProps, "onTodoClick"> => {
  const visibleFilter = (todos: Array<TodoData>, filter: VisibilityFilter): Array<TodoData> => {
    switch (filter) {
      case VisibilityFilter.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      case VisibilityFilter.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VisibilityFilter.SHOW_ALL:
      default:
        return todos;
    }
  }

  return {
    todos: visibleFilter(state.todos, state.filter)
  }
}

const _todoListMapDispathToProps = (dispatch: Dispatch<TodoAction>): Omit<TodoListProps, "todos"> => {
  return {
    onTodoClick: (id: string) => dispatch(toggleTodo(id))
  }
}

export const TodoList = connect(_todoListMapStateToProps, _todoListMapDispathToProps)(_TodoList);

type LinkProps = {
  active: boolean;
  onClick: () => void;
  children: string | JSX.Element;
}

const _Link = ({ active, onClick, children }: LinkProps): JSX.Element => {
  if (active) {
    return <span className="text-gray-500 font-bold px-2 py-1 bg-gray-100">{children}</span>
  }

  return (
    <a
      href="#!"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      className="hover:no-underline text-sky-600 px-2 py-1 bg-gray-100"
    >
      {children}
    </a>
  );
};

type LinkExternProps = {
  filter: VisibilityFilter
}

const _linkStateToProps = (state: State, ownProps: LinkExternProps): Omit<LinkProps, "onClick" | "children"> => (
  {
    active: state.filter === ownProps.filter
  }
);

const _linkMapDispathToProps = (dispatch: Dispatch<FilterAction>, ownProps: LinkExternProps): Omit<LinkProps, "active" | "children"> => (
  {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
);

const Link = connect(_linkStateToProps, _linkMapDispathToProps)(_Link);

export const Footer = (): JSX.Element => (
  <p>
    Show:
    {' '}
    <Link filter={VisibilityFilter.SHOW_ALL}>
      All
    </Link>
    {', '}
    <Link filter={VisibilityFilter.SHOW_ACTIVE}>
      Active
    </Link>
    {', '}
    <Link filter={VisibilityFilter.SHOW_COMPLETED}>
      Completed
    </Link>
  </p>
);
