import { Button, InputGroup, Intent } from '@blueprintjs/core';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, selectFilter, selectItems, setVisibilityFilter, toggleTodo, VisibilityFilter } from './todo';


/**
 * 定义添加 Todo 项的组件
 */
export const AddTodo = memo((): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch(); // 获取整个 store 对象的 dispatcher

  return (
    <div>
      <form
        onSubmit={(e) => { // 定义表单提交事件响应
          e.preventDefault();

          if (!input?.trim()) {
            return;
          }

          dispatch(addTodo(input));
          setInput('');
        }}>
        <div
          className="flex items-center space-x-2"
        >
          <InputGroup
            large={true}
            onChange={(e) => { setInput(e.currentTarget.value); }}
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
});


interface TodoItemProps {
  text: string
  completed: boolean
  onClick: () => void
}

const TodoItem = ({ completed, text, onClick }: TodoItemProps): JSX.Element => (
  <li
    className={
      `${completed ? 'line-through bg-sky-100' : 'no-underline bg-green-100 font-medium'}
      px-4
      py-2
      border-b
      border-gray-300`
    }
    onClick={onClick}
  >
    {text}
  </li>
);

export const TodoList = memo((): JSX.Element => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  return (
    <ul
      style={{ minHeight: '200px' }}
      className="border shadow-md rounded-md bg-white"
    >
      {
        items.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onClick={() => dispatch(toggleTodo(item.id))}
          />
        ))
      }
    </ul>
  );
});


interface LinkProps {
  filter: VisibilityFilter
  children: string | JSX.Element
}

const useActive = (filter: VisibilityFilter): boolean => {
  const currentFilter = useSelector(selectFilter);
  return currentFilter === filter;
};

const Link = ({ filter, children }: LinkProps): JSX.Element => {
  const active = useActive(filter);
  const dispatch = useDispatch();

  return active
    ? (
      <span
        className="text-gray-500 font-bold px-2 py-1 bg-gray-100"
      >
        {children}
      </span>
    )
    : (
      <a
        href="#!"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setVisibilityFilter(filter));
        }}
        className="hover:no-underline text-sky-600 px-2 py-1 bg-gray-100"
      >
        {children}
      </a>
    );
};


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
