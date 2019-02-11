# Sybase Promised

A wrapper using the Promise philosophy for the [sybase](https://www.npmjs.com/package/sybase) package.

## Usage

### Install

```bash
npm install sybase-promised
```

### Import
```javascript
const Sybase = require('sybase-promised')
```

### Instantiate an object

```javascript
const db = new Sybase({
  host: 'locahost',
  port: 2638,
  dbname: 'sybase',
  username: 'root',
  password: '1234',
})
```

### Start the connection

```javascript
await db.connect()
```

### Execute a query

```javascript
const rs = await db.query('SELECT * FROM table')
```

### Close the connection

```javascript
db.disconnect()
```

## Disclaimer
I know the sybase package is long without any updates but it worked for me and I decided to make it easier to use by bringing it to a more current standard used _Promises_.

Any questions or suggestions for improvement send an email to **mscamargo@outlook.com.br** or open a **issue**.
