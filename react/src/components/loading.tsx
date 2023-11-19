import { Intent, Spinner } from "@blueprintjs/core";

const Loading = (
  <div className="w-full h-screen flex justify-center items-center">
    <Spinner intent={Intent.PRIMARY} size={50} />
  </div>
);

export default Loading;
