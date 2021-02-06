# Use camera in browser

## 1. Setup

### 1.1. Setup `devServer`

Config `vue.config.js` or `webpack.config.js`, edit `devServer` property

#### 1.1.1. Enable https

```javascript
{
  // ...,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: true    // enable https
  }
}
```

#### 1.1.2. Add camera `Feature-Policy`

```javascript
{
  // ...,
  devServer: {
    // ...,
    headers: {
      'Feature-Policy': 'camera \'self\''
    }
  }
}
```

### 1.2. Setup port proxy

#### 1.2.1. In windows 10

If using windows 10 with WSL2, it cannot access the WSL network port directly

- Get IP address of WSL2
  
  In WSL2, use `ip` commmand to get IP address

  ```bash
  $ ip a
  ```

  Find IP address of `eth0`

  ```plain
  1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue 
  ...
  2: bond0: <BROADCAST,MULTICAST,MASTER> mtu 1500 qdisc 
  ...
  3: dummy0: <BROADCAST,NOARP> mtu 1500 qdisc noop state 
  ...
  4: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
      link/ether 00:15:5d:35:b3:ef brd ff:ff:ff:ff:ff:ff
      inet 172.20.98.196/20 brd 172.20.111.255 scope global 
      ...
  ```

- Set port proxy between Windows and WSL

  Run `cmd` or `powershell` as administor, run the following commands

  Set port proxy

  ```cmd
  > netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=172.20.98.196
  ```

  Show all port proxy status

  ```cmd
  > netsh interface portproxy show all
  ```

  Delete port proxy

  ```cmd
  > netsh interface portproxy delete v4tov4 listenport=8080 listenaddress=0.0.0.0
  ```

- Close Windows Firewall
