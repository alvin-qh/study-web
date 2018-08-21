# React

## React with bootstrap

http://reactstrap.github.io/components


## Bind in React.js

### Use bind:

```jsx harmony
class MyCompontent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // state values
        };
        
        // use this bind method to bind `this` reference to method
        this.onSomeValueChanged = this.onSomeValueChanged.bind(this);
    }
    
    onSomeValueChanged(e) {
        this.setState({
            // change some state
        });
    }
    
    render() {
        // if no bind before, this.onSomeValueChanged should be failed
        return <div>
            <input type="text" onChange={this.onSomeValueChanged}/>
        </div>;
    }
}
```

### Drop bind:

```jsx harmony
class MyCompontent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // state values
        };
    }
    
    // use arrows function, means es6 `public class fields` feature
    
    onSomeValueChanged = e => {
        this.setState({
            // change some state
        });
    };
    
    render() {
        // if no bind before, this.onSomeValueChanged should be failed
        return <div>
            <input type="text" onChange={this.onSomeValueChanged}/>
        </div>;
    }
} 
```

Babel config with `babel-plugin-transform-class-properties`:
```javascript
options: {
    ...,
    plugins: [
        ["transform-class-properties"]
    ]
}
```