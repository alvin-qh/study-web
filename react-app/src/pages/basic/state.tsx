import { PureComponent } from 'react';

type StateProp = {
  className?: string
};

/* 定义组件的状态类型 */
type StateState = {
  datetime?: string
}

class Clock extends PureComponent<StateProp, StateState> {
  state: StateState = {
    datetime: new Date().toLocaleString()
  }

  timer: any = 0

  componentDidMount() {
    this.timer = setInterval(() => {
      const now = new Date();
      this.setState({
        datetime: now.toLocaleString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }

  render() {
    const {
      className = ""
    } = this.props;

    return (
      <h1 {...{ className }}>Hello, Now is: {this.state.datetime}</h1>
    );
  }
}


const StateComponent = () => (
  <div>
    <Clock
      className="text-gray-700 text-lg font-bold text-center py-10"
    />
  </div>
);

export default StateComponent;
