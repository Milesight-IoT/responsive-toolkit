# JSON to Media Query

## Install

```bash
npm install @milesight/json2mq
```

## Usage

- The input is a string

```ts
import json2mq from '@milesight/json2mq';

json2mq('(min-width: 100px)'); // -> (min-width: 100px)
```

- The input is an object

```ts
import json2mq from '@milesight/json2mq';

json2mq({ minWidth: 100 }); // -> (min-width: 100px)
json2mq({ minWidth: 100, maxWidth: 200 }); // -> (min-width: 100px) and (max-width: 200px)
json2mq({ minWidth: '10rem', maxWidth: 200 }); // -> (min-width: 10rem) and (max-width: 200px)
json2mq({ screen: true, minWidth: 100 }); // -> screen and (min-width: 100px)
json2mq({ screen: false, minWidth: 100 }); // -> not screen and (min-width: 100px)
```

- The input is an array

```ts
import json2mq from '@milesight/json2mq';

json2mq([{ minWidth: 100 }, { minWidth: 200 }]); // -> (min-width: 100px), (min-width: 200px)
```
