# passwd

Generate random alphanumeric passwords with 13 characters

## Usage:

Copy to Unix clipboard:

```bash
curl –s http://passwd.tjstein.com 2>/dev/null | pbcopy
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