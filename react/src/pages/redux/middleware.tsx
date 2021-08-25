/**
 * Redux 中间件
 * 
 *  如果要在 dispatch 的时候完成一些标准动作（例如记录日志），则需对 dispatch 进行替换操作，例如：
 * 
 *    const nextDispach = store.dispatch;   // 保存 store 对象中现有的 dispatch 函数
 * 
 *    store.dispath = (action: AnyAction):void => {   // 替换 store 对象中的 dispach 函数
 *      ... do something before disptch
 *      const result = nextDispach(action);
 *      ... do something after disptch
 *      return result;
 *    }
 * 
 *  上述这种方法非常笨拙，而且破坏了 store 中本身的结构。
 * 
 *  Redux 可以使用中间件完成对每个 dispatch 的拦截操作，使一些公共的代码和配置无需到处书写。
 *  Middleware 是一个高阶函数，定义如下：
 * 
 *    function someMiddleware(store: MiddlewareAPI<Dispatch<AnyAction>, any>): Middleware {
 *      return function(next: Dispatch<AnyAction>): Dispatch<AnyAction> {
 *        return function(action: AnyAction): any {
 *          ... do something before dispatch
 *          const result = next(action);
 *          ... do something after dispatch
 *          return result;
 *        }
 *      }
 *    }
 * 
 *  如果使用 Typescript，则可以简化上述高阶函数如下：
 * 
 *    const someMiddleware: Middleware = store => next => action => {
 *      ... do something before dispatch
 *      const result = next(action);
 *      ... do something after dispatch
 *      return result;
 *    }
 * 
 *  以上就是一个 Redux 中间件的基本定义，使用的方式如下：
 * 
 *    传统的方式，在 createStore 的时候，通过 applyMiddleware 函数引用中间件
 * 
 *      const store = createStore(
 *        rootReducer,
 *        applyMiddleware(someMiddleware, ...),
 *      );
 * 
 *    如果使用 Redux Toolki，则直接在 configureStore 函数参数中，设置 middleware 属性即可
 * 
 *      const store = configureStore({
 *        reducer: rootReducer,
 *        middleware: [someMiddleware, ...],
 *      });
 * 
 *    middleware 属性可以取值为一个中间件数组，或者一个参数为 getDefaultMiddlewares 函数的函数，用于将新的中间件和默认的中间件合并
 * 
 *  有大量的第三方 Redux 中间件可以使用，常用的几个中间件可以给 Redux 编程带来很多便利。
 * 
 *  第三方 middleware：
 *  1. redux-logger：记录 redux dispatch 过程中的日志
 *     安装：yarn add redux-logger @types/redux-logger
 *     使用：import createLogger from 'redux-logger';   createLogger 作为 Middleware 使用即可
 * 
 *  2. 
 */
import { Radio, RadioGroup } from "@blueprintjs/core";
import { useState } from "react";
import { Provider } from "react-redux";
import Processor from "./middleware/component";
import appStore from "./middleware/store";

const Middleware = (): JSX.Element => {
  const [actionType, setActionType] = useState("sync");

  return (
    <Provider store={appStore}>
      <div
        className="px-4 py-6">
        <div className="border border-gray-300 px-4 py-6 shadow-md bg-white">
          <div
            className="flex mb-5"
          >
            <div className="flex-1 text-lg font-medium">Processor:</div>
            <RadioGroup
              className="flex items-center"
              selectedValue={actionType}
              onChange={e => setActionType(e.currentTarget.value)}
            >
              <Radio label="同步Action" value="sync" className="mx-4" />
              <Radio label="异步Action（类型1）" value="async_type1" className="mx-4" />
              <Radio label="异步Action（类型2）" value="async_type2" className="mx-4" />
            </RadioGroup>
          </div>
          <Processor actionType={actionType} />
        </div>
      </div>
    </Provider>
  )
};

export default Middleware;
