# Setup workspace

## 1. Install nvm

### 1.1. Install NVM

#### 1.1.1. Download and install NVM

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Or

```bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

#### 1.1.2. Setup NVM

Add the following content into the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### 1.2. Install nodejs

```bash
$ nvm install v12.16.3
$ nvm use v12.16.3
$ nvm alias default v12.16.3
```

## 2. Install node modules

```bash
$ npm run setup
```

## 3. Build or run application

### 3.1. Build

```bash
$ npm run dev
```

### 3.2. Run

```bash
$ npm run build
```
