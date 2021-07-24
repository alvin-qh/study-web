import { Button, Intent, Position, Toaster } from "@blueprintjs/core";
import { HTMLAttributes, MouseEvent, PureComponent } from "react";

/**
 * 创建用于显示 toast 的全局对象
 */
const AppToaster = Toaster.create({
  className: 'recipe-toaster',
  position: Position.TOP,   // toast 显示的位置
  maxToasts: 2   // 最多显示的 toast 数量
});

/**
 * 显示 toast
 * @param action toast 显示内容中的 action 部分
 * @param intent 样式，由 Intent 枚举定义
 */
const showToaster = (action: string, intent: Intent = Intent.NONE): void => {
  AppToaster.show({
    message: (
      <>
        Hello, <b>{action}</b>
      </>
    ),
    icon: "notifications",
    intent: intent
  });
}

/**
 * 类中通过类方法定义事件处理
 */
class ActionLink extends PureComponent<HTMLAttributes<HTMLAnchorElement>> {
  // onClick 对应的事件方法类型 (e: XXXEvent): void => { ... }
  handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    // 'e.preventDefault' 禁止事件冒泡
    e.preventDefault();

    // 'e.currentTarget' 出发事件的元素对象
    // 'dataset.xxx'，元素 'data-xxx' 属性值
    showToaster(`"${e.currentTarget.dataset.eventName}" event is emitted`);
  }

  render() {
    return (
      // onClick={this.EventFunction} 事件指向当前类的处理方法
      <a {...this.props}
        href="#!"
        data-event-name="ActionLink"
        onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

/**
 * 通过函数定义事件处理
 */
const ActionButton = ({ children, className, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  // onClick 对应的事件函数类型 (e: XXXEvent): void => { ... }
  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    // 'e.currentTarget' 出发事件的元素对象
    // 'dataset.xxx'，元素 'data-xxx' 属性值
    showToaster(`"${e.currentTarget.dataset.eventName}" event is emitted`, Intent.PRIMARY);
  }

  return (
    <Button className={`${className} block`} {...props}
      icon="emoji"
      data-event-name="ActionButton"
      intent={Intent.PRIMARY}
      onClick={handleClick}>
      {children}
    </Button>
  );
}

/**
 * 向事件处理函数传参
 * 通过 Function.bind(this, args) 方式
 */
const ActionButtonWithArgs1 = ({ children, className, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  const handleClick = (action: string): void => {
    showToaster(action, Intent.WARNING);
  }

  return (
    <Button className={`${className} block`} {...props}
      icon="warning-sign"
      intent={Intent.WARNING}
      onClick={handleClick.bind(this, "ActionButton with \"bind\" event is emitted")}>
      {children}
    </Button>
  );
}

/**
 * 向事件处理函数传参
 * 通过 { () => eventHandler(args) } 方式
 */
const ActionButtonWithArgs2 = ({ children, className, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  const handleClick = (action: string): void => {
    showToaster(action, Intent.DANGER);
  }

  return (
    <Button className={`${className} block`} {...props}
      icon="error"
      intent={Intent.DANGER}
      onClick={e => handleClick("ActionButton with \"lambda\" event is emitted")}>
      {children}
    </Button>
  );
}


const BasicEvent = () => {
  return (
    <div className="space-y-4 py-6">
      <ActionLink className="block font-bold text-lg">
        Click me !
      </ActionLink>

      <ActionButton className="font-bold text-lg focus:outline-none ">
        Click me !
      </ActionButton>

      <ActionButtonWithArgs1 className="font-bold text-lg focus:outline-none">
        Click me !
      </ActionButtonWithArgs1>

      <ActionButtonWithArgs2 className="font-bold text-lg focus:outline-none">
        Click me !
      </ActionButtonWithArgs2>
    </div>
  );
}

export default BasicEvent;
