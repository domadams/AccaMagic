# AccaMagic
Accumulator Magic Site Code

## Getting Started

**Prerequisites** Please ensure that you have Node.js v6.2.x installed [nodejs.org](http://nodejs.org/dist/v6.2.0/) once this is installed upgrade npm (`$ npm install -g npm`).
Then install `gulp` globally (`$ npm install -g gulp`)

To get started fork this repository, clone it, then install the dependencies:
```
$ npm install
```

Run build to build the site and it's assets
```
$ npm run build
```

Should you want to run the site locally move into the dist directory (```$ cd dist```) and install the dependencies:
```
$ npm install --production
```

Then you can run:
```
$ node index.js
```

In your chosen browser visit
```
$ localhost:3000
```
and you should see the site running.

##Cleaning the dist directory

You can clean down the dist directory by running
```
$ npm run clean
```
This will remove the directory so that you can rebuild the site from scratch.
