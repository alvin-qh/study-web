/**
 * Redux 基础
 * 
 *    Redux 采用集中存储方式，将状态存储在 store 中。任何对 store 内容的改变，都将传递给引用这些 store 的组件中，
 * 并跟随 store 内容变化重新渲染组件。
 * 
 * 安装依赖：
 *      yarn add react-redux @types/react-redux redux-devtools @types/redux-devtools redux-devtools-extension @types/redux-devtools-extension
 *      
 * 
 * Redux 包含如下几个要素：
 * 
 *    1. Action，即行为。Action 是由一个对象表示，并至少包含一个 type 字段表示 Action 类型。
 * 
 *       一个典型的 Action 对象定义如下：
 * 
 *          type TodoAction = {
 *            type: ADD_TODO | TOGGLE_TODO;
 *            id?: string;
 *            text?: string;
 *          }
 *
 *      一般情况下，不直接使用 Action 对象，而推荐采用语义化的 creator 来创建所需的 Action 对象，例如：
 *
 *          const addTodo = (text: string): TodoAction => {
 *            return {
 *              type: ADD_TODO,
 *              id: uuid(),
 *              text,
 *            }
 *          }
 *
 *      addTodo 函数创建了一个 TodoAction 对象。
 * 
 *   2. State，即存储在 store 中的状态，由一个 State 对象表示，例如：
 * 
 *          type State = {
 *            filter: VisibilityFilter;
 *            todos: Array<TodoData>;
 *          }
 * 
 *   3. Reducer，将一组参数根据 Action 对象转化成 State 中部分值的 Mapping 函数，例如有如下定义：
 * 
 *        (todos: Array<TodoData> = [], action: TodoAction) => Array<TodoData>
 * 
 *      表示将给定的 TodoData 集合根据 TodoAction 对象转化为新的 TodoData 集合，并存储在 store 中。
 * 
 *      一般情况下，很难通过一个 Mapping 函数转换完整的 State 对象，所以一般情况下会通过 combineReducers 函数将多个 
 *      reducer 函数组合成一个获取完整 State 对象。
 * 
 *          // 通过 visibilityFilterReducer 和 todosReducer 两个 reducer 方法，
 *          // 组合成 todoAppReducer 这个完整的 reducer 方法
 *          const todoAppReducer = combineReducers({
 *            filter: visibilityFilterReducer,    // 通过 visibilityFilterReducer 方法生成 State 中的 filter 属性
 *            todos: todosReducer                 // 通过 todosReducer 方法生成 State 中的 todos 属性
 *          });
 * 
 *   4. Store，存储 State 的对象，由 createStore 配合 reducer 函数产生，例如：
 *
 *          const todoAppStore = createStore(todoAppReducer);
 * 
 *      store 需要设定一个作用域范围，即通过 <Provider> 对象，定义在 React 节点的最外层，内层 React 对象位于 store 范围内。
 * 
 *          <Provider store={todoAppStore}>
 *            ...
 *          </Provider>
 * 
 *   5. 组件，组件是将数据存入 Store 或将 Store 的值展示出来的用户接口。
 *      若需要组件将 Store 的内容进行展示，则需要将 Store 中存储的 State 对象通过组件的 Props 属性进行传递。
 *      若需要组件将数据写入 Store 中，则需要通过组件的 Event，将组件内的值转递到 Store，并连锁引发相关组件读取 Store 中的 State 值
 * 
 *      Redux 不允许直接写入 Store 对象，所有对 Store 对象内 State 的改变，都需要通过 Store.dispatch 方法进行，该方法通过一个 Action 对象，
 *      通过 reducer 函数，将转换后的数据写入 Store 对象中，例如：
 * 
 *          import { todoAppStore } from "./store";
 *          import { toggleTodo } from "./action";
 * 
 *          const TodoItem = ({ completed, text, onClick }: T): JSX.Element => (
 *            <li className={ ... } onClick={ e => onClick() }>
 *              {text}
 *            </li>
 *          );
 * 
 *          const TodoList = ({ todos }: T): JSX.Element => (
 *            <ul style={ ... } className="...">
 *            {
 *              todos.map(todo => (
 *                <TodoItem key={todo.id} {...todo} onClick={ () => todoAppStore.dispatch(toggleTodo(todo.id)) } />
 *              ))
 *            }
 *            </ul>
 *          );
 * 
 *      上述这种方法需手动处理 state => props 和 dispath => props，所以 redux-react 提供了 connect 函数，返回一个 connector，包装
 *      一个自动完成上述转换的组件，避免手动传递 props 和处理事件，例如：
 * 
 *          const _linkStateToProps = (state: State, externProps: LinkExternProps): Omit<LinkProps, "onClick" | "children"> => (
 *            {
 *              active: state.filter === externProps.filter
 *            }
 *          );
 * 
 *          const _linkMapDispathToProps = (dispatch: Dispatch<FilterAction>, externProps: LinkExternProps): Omit<LinkProps, "active" | "children"> => (
 *            {
 *              onClick: () => dispatch(setVisibilityFilter(externProps.filter))
 *            }
 *          );
 * 
 *      如此一来，可以通过 connect 函数返回 connector 来包装指定组件，connector 会根据 _linkStateToProps 函数自动将 store 中存储的 state 转到组件的 props，同时通过
 *      _linkMapDispathToProps 函数，响应组件的 onClick 事件，把事件传递的值通过 dispatch 和 reducer 存入 store 中。
 * 
 *          const Link = connect(_linkStateToProps, _linkMapDispathToProps)(_Link);
 * 
 *      对于无法通过 store 转换的 props，则可以通过传统方式，在组件的属性上直接传递即可。
 * 
 *          <Link filter={VisibilityFilter.SHOW_ALL}>All</Link>       // 传递额外的 filter 属性和 children 属性，这些属性会传递到 _linkStateToProps 或 
 *                                                                    // _linkMapDispathToProps 函数的第二个参数中
 * 
 * 所以，所谓 Redux，即通过 reducer 将数据和 Action 存入 Store，在通知相关组件展示数据的过程。
 */
import { Provider } from "react-redux";
import { AddTodo, Footer, TodoList } from "./basic/component";
import configureStore from "./basic/reducer";

const store = configureStore()

const ReduxBasic = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="w-1/3 px-2 py-4">
        <p className="font-medium text-lg mb-2">Todo List: </p>
        <div>
          <AddTodo />
        </div>
        <div className="mt-4">
          <TodoList />
        </div>
        <div className="mt-2">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default ReduxBasic;
