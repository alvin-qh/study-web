import { Button, Intent, Position, Toaster } from "@blueprintjs/core";
import { HTMLAttributes, MouseEvent, PureComponent } from "react";

const AppToaster = Toaster.create({
  className: 'recipe-toaster',
  position: Position.TOP,
  maxToasts: 2
});

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

class ActionLink extends PureComponent<HTMLAttributes<HTMLAnchorElement>> {
  handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    showToaster('ActionLink event is emitted');
  }

  render() {
    return (
      <a {...this.props} href="#!" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

const ActionButton = ({ children, className, ...props }: HTMLAttributes<HTMLButtonElement>) => {

  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    showToaster('ActionButton event is emitted', Intent.PRIMARY);
  }

  return (
    <Button className={`${className} block`} {...props}
      icon="emoji"
      intent={Intent.PRIMARY}
      onClick={handleClick}>
      {children}
    </Button>
  );
}

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
