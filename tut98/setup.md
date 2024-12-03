## How to Setup tailwind css

Step 1: Run the Following Cammand for  Install tailwindCSS:

```
npm install -D tailwindCSS
npx tailwindCSS init
```

Step 2:  Update tailwindCSS,conf.js file to incluse this line:
```
content: ["*.html"]
```

Step 3:  Create src/input.css file and write this lines:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include , linked the src/output.css file to your html

Step 5: Run the following commands

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

{MINE}: you can maka own runner like this

```
{
  "name": "tut98",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
make this > "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  },
  Now run  " npm run build "
```
