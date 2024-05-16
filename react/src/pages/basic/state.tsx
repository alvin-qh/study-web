import { type JSX, PureComponent } from 'react';

interface StateProp {
  className?: string
}

/* 定义组件的状态类型 */
interface StateState {
  datetime?: string
}

class Clock extends PureComponent<StateProp, StateState> {
  state: StateState = {
    datetime: new Date().toLocaleString()
  };

  timer: NodeJS.Timeout | null = null;

  componentDidMount(): void {
    this.timer = setInterval(() => {
      const now = new Date();
      this.setState({
        datetime: now.toLocaleString()
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render(): JSX.Element {
    const {
      className = ''
    } = this.props;

    return (
      <h1 {...{ className }}>Hello, Now is: {this.state.datetime}</h1>
    );
  }
}


const StateComponent = (): JSX.Element => (
  <div>
    <Clock
      className="text-gray-700 text-lg font-bold text-center py-10"
    />
  </div>
);

export default StateComponent;
