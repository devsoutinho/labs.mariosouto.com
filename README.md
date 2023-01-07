# labs.mariosouto.com

## What is this?

...

## How to use?

### WebApp

- Open a terminal tab and run:

```sh
yarn dev:web
```

> We are using NextJS, just open your browse and code on top of it :)

### App
- Open a terminal tab and run:
```sh
yarn dev:app
```

> We are using [Expo](https://expo.dev/home), you can use your own device to see the reload without the need to have a simulator running.

### CLI

- Open a terminal tab and run:

```sh
yarn dev
```

- Open another terminal tab and run:

```sh
yarn dscli
```

https://user-images.githubusercontent.com/13791385/211173060-bb8e72c2-7d8d-49d7-a5ad-0b344d6d3aa3.mp4

> You can also create an alias in your computer to run that command everywhere

### Chrome Extension


- Open another terminal tab and run:

```sh
yarn dev:extension
```

After run the command in terminal, follow that process (and check the steps in video):

1. Open your chrome browser
1. Access `chrome://extensions/`
1. Click in `Load Unpacked`
1. Select the dist folder inside `shells/extension.labs.mariosouto.com/dist`
1. Click in the Extensions puzzle block in top right corner
1. Pin your extension
1. Open your extension, the code there is relative to the `popup`


https://user-images.githubusercontent.com/13791385/211173188-977d3f7e-20ff-4f10-96e1-1f480f7c3899.mp4




## How to test?

- Open a terminal tab and run:

```sh
yarn test
```

## How to lint?

- Open a terminal tab and run:

```sh
yarn lint
```
