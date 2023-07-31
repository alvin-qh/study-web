# Vue 2

## 1. 使用 Vue CLI

### 1.1. 安装

使用 NPM

```bash
npm install -g @vue/cli
```

使用 Yarn

```bash
yarn global add @vue/cli
```

### 1.2. 创建项目

```bash
vue create hello-world
```

可能的选项包括:

```bash
vue create --help

Usage: create [options] <app-name>

create a new project powered by vue-cli-service


Options:

  -p, --preset <presetName>       Skip prompts and use saved or remote preset
  -d, --default                   Skip prompts and use default preset
  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -r, --registry <url>            Use specified npm registry when installing dependencies
  -g, --git [message|false]       Force / skip git initialization, optionally specify initial commit message
  -n, --no-git                    Skip git initialization
  -f, --force                     Overwrite target directory if it exists
  --merge                         Merge target directory if it exists
  -c, --clone                     Use git clone when fetching remote preset
  -x, --proxy                     Use specified proxy when creating project
  -b, --bare                      Scaffold project without beginner instructions
  --skipGetStarted                Skip displaying "Get started" instructions
  -h, --help                      Output usage information
```

### 1.3. 使用图形界面

```bash
vue ui
```
