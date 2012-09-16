# passwd.heorkuapp.com

Make random alphanumeric password with 8 characters

## Usage:

Copy to Unix clipboard:

```bash
curl http://passwd.herokuapp.com | pbcopy
```

## Test:

You'll need [foreman](https://github.com/ddollar/foreman), [request](https://github.com/mikeal/request) and [mocha](https://github.com/visionmedia/mocha):

```bash
$ npm install -g mocha && npm install request
```

Launch the application:

```bash
$ foreman start
```

And then:

```bash
$ mocha
```

## WTF ?

The purpose of this piece of code is educational and because I keep forgetting to backup my own script, so I tought it'd fit well being a simple HTTP request.
