import { Provider } from "react-redux";
import SimpleMiddleware from "./middleware/simple";
import appStore from "./middleware/store";


const Middleware = (): JSX.Element => {
  return (
    <Provider store={appStore}>
      <div
        className="px-4 py-6">
        <div
          className="border border-gray-300 px-4 py-6 shadow-md bg-white">
          <SimpleMiddleware />
        </div>
      </div>
    </Provider>
  )
};

export default Middleware;
