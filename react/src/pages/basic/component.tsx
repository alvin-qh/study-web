import { Component } from "react";

/**
 * 定义组件的属性类型
 */
type WelcomeProp = {
  name?: string,
  className?: string
};


/* 定义一个函数组件 */
const WelcomeFunc = ({
  name = "Alvin",
  className = ""
}: WelcomeProp): React.JSX.Element => (
  <h1 className={className}>Hello, {name}</h1>
);


/* 定义一个类组件 */
class WelcomeCls extends Component<WelcomeProp> {
  render(): React.JSX.Element {
    const {
      name = "Alvin",
      className = ""
    } = this.props;

    return (
      <h1 {...{ className }}>Hello, {name}</h1>
    );
  }
}


const BasicComponent = (): React.JSX.Element => (
  <div>
    <WelcomeFunc
      name="Alvin"
      className="text-lg font-bold text-right text-blue-600"
    />
    <WelcomeCls
      name="Alvin"
      className="text-gray-700 text-lg font-bold text-center"
    />
  </div>
);

export default BasicComponent;
