import { Provider } from "react-redux";
import { AddNewTodo, Footer, VisibleTodoList } from "./basic/component";
import { todoAppStore } from "./basic/reducer";

const ReduxBasic = (): JSX.Element => {
  return (
    <Provider store={todoAppStore}>
      <div>
        <AddNewTodo />
      </div>
      <div>
        <VisibleTodoList />
      </div>
      <div>
        <Footer />
      </div>
    </Provider>
  );
}

export default ReduxBasic;
