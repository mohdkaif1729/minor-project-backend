1. create package.json file in root directory.

```bash
  npm init
```

2. create public directory in root directory and create temp within public folder ,and also create gitkeep file within temp folder for tracking temp directory.

```bash
  mkdir public
  cd public
  touch .gitkeep
```

3. create src directory in root directory

```bash
  mkdir src
```

4. creat .env file in root directory

```bash
  touch .env
```

5. create .gitignore file in root directory

```bash
  touch .gitignore
```

[.gitignore-generator](https://mrkandreev.name/snippets/gitignore-generator/#Node) 6. create files in src folder

```bash
  touch index.js app.js constants.js
```

7. edit your package.json file type and scripts

```bash
  npm run dev
  npm run start
```

8. create more folders in src

```bash
  mkdir controllers db middlewares models utils
```
