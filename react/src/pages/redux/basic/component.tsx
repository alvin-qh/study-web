import { Button, InputGroup, Intent } from "@blueprintjs/core";
import { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { addTodo, setVisibilityFilter, toggleTodo } from "./action";
import { FilterAction, State, TodoAction, TodoData, VisibilityFilter } from "./type";

/**
 * 定义 Todo 组件的 Props
 */
type AddTodoProps = {
  dispatch: Dispatch<TodoAction>,
}

/**
 * 定义 Todo 组件
 */
const _AddTodo = ({ dispatch }: AddTodoProps) => {
  const [input, setInput] = useState<string>("");

  return (
    <div>
      <form
        onSubmit={e => {    // 定义表单提交事件响应
          e.preventDefault();

          if (!input?.trim()) {
            return;
          }

          // 通过 dispatch 方法提交 TodoAction
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

// 通过 connection 定义 AddTodo 组件，从而获取组件的 dispatch 属性
export const AddTodo = connect()(_AddTodo);


/**
 * 定义 Todo Item 组件的 Props
 */
type TodoItemProps = {
  text: string,         // Todo Item 的 text
  completed: boolean,   // Todo Item 是否被完成
  onClick: () => void,  // Todo Item 被点击事件
}

/**
 * 定义 Todo Item 组件
 */
const TodoItem = ({ completed, text, onClick }: TodoItemProps): JSX.Element => (
  <li
    className={`${completed ? "line-through bg-sky-100" : "no-underline bg-green-100 font-medium"} px-4 py-2 border-b border-gray-300`}
    onClick={onClick}
  >
    {text}
  </li>
);


/**
 * Todo 列表组件的 Props
 */
type TodoListProps = {
  todos: Array<TodoData>;             // 要展示的 Todo 项目集合
  onTodoClick: (id: string) => void;  // Todo 项目被点击的事件
}

/**
 * Todo 列表组件
 */
const _TodoList = ({ todos, onTodoClick }: TodoListProps): JSX.Element => (
  <ul
    style={{ minHeight: "200px" }}
    className="border shadow-md rounded-md bg-white"
  >
    {
      // 渲染列表中所有的 Todo Item 组件
      todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}     // text={todo.text} completed={todo.completed}
          onClick={() => onTodoClick(todo.id)}
        />
      ))
    }
  </ul>
);


/**
 * 将 state 转换为 _TodoList 组件 props 属性
 */
const _todoListMapStateToProps = (state: State): Omit<TodoListProps, "onTodoClick"> => {
  /**
   * 根据 VisibilityFilter 的值对 todo 集合进行过滤
   */
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

/**
 * 将 dispatch 转换为 _TodoList 组件的 props 属性
 */
const _todoListMapDispathToProps = (dispatch: Dispatch<TodoAction>): Omit<TodoListProps, "todos"> => {
  return {
    onTodoClick: (id: string) => dispatch(toggleTodo(id))
  }
}

// 通过 connect 函数产生 TodoList 组件
export const TodoList = connect(
  _todoListMapStateToProps,   // state 到 props 转换函数
  _todoListMapDispathToProps  // dispatch 到 props 转换函数
)(_TodoList);


/**
 * 定义 _Link 组件 Props 属性
 */
type LinkProps = {
  active: boolean;
  onClick: () => void;
  children: string | JSX.Element;
}

/**
 * 定义 _Link 组件
 */
const _Link = ({ active, onClick, children }: LinkProps): JSX.Element => {
  return active ? (
    <span
      className="text-gray-500 font-bold px-2 py-1 bg-gray-100"
    >
      {children}
    </span>
  ) : (
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


/**
 * 定义 Link 组件的拓展属性
 */
type LinkExternProps = {
  filter: VisibilityFilter
}

/**
 * state 转换为 _Link 组件的 props 属性
 * externProps 表示 connect 后额外附加的属性
 */
const _linkStateToProps = (state: State, externProps: LinkExternProps): Omit<LinkProps, "onClick" | "children"> => (
  {
    active: state.filter === externProps.filter
  }
);

/**
 * dispatch 转换为 _Link 组件的 props 属性
 * externProps 表示 connect 后额外附加的属性
 */
const _linkMapDispathToProps = (dispatch: Dispatch<FilterAction>, externProps: LinkExternProps): Omit<LinkProps, "active" | "children"> => (
  {
    onClick: () => dispatch(setVisibilityFilter(externProps.filter))
  }
);

/**
 * 通过 connect 定义 Link 组件
 */
const Link = connect(
  _linkStateToProps,
  _linkMapDispathToProps
)(_Link);


/**
 * 定义 Footer 组件，包括三个 Link 组件
 */
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
