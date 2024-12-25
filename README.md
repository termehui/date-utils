# Utils

momentjs based date utils.

## Installation

### CDN

This package published as `dateUtils` module in umd.

```html
<script src="https://unpkg.com/@termehui/date-utils"></script>
```

### NPM

```bash
npm i @termehui/date-utils
```

## Usage

### Parse

Parse standard unformatted gregorian date string.

```ts
// Signature
function parse(date: string): Moment;
```

### parseRFC3339Nano

Parse standard date from RFC3339Nano (`YYYY-MM-DDTHH:mm:ss.SSSSSSSSSZ`) format.

```ts
// Signature
function parseRFC3339Nano(date: string): Moment;
```

### ParseFrom

Parse formatted date from string. For parse jalali date use format params with **j** prefix (see [moment-jalaali](https://github.com/jalaali/moment-jalaali)).

```ts
// Signature
function parseFrom(date: string, format: string): Moment;

// Example
import { parseFrom } from "@termehui/date-utils";
const gregorian = parseFrom("2020-01-12 15", "YYYY-MM-DD HH");
const jalaali = parseFrom("1400-03-19 21", "jYYYY-jMM-jDD HH");
```

### Ago

Get ago string for date.

```ts
// Signature
function ago(date: Moment, locale: "fa" | "en"): string;

// Example
import { parse, ago } from "@termehui/date-utils";

const dt = parse("2020-12-03");
console.log(ago(dt, "en")); // 2 days ago
console.log(ago(dt, "fa")); // 2 روز قبل
```

### Humanize

Get humanized duration string.

```ts
// Signature
function humanize(
  d: number,
  unit: DurationInputArg2 = "ms",
  locale: "fa" | "en" = "fa"
): string;

// Example
import { humanize } from "@termehui/date-utils";
const ts = 1555638000;
console.log(humanize(ts, "ms", "en")); // 21 days, 7 minutes, 18 seconds
console.log(humanize(ts, "ms", "fa")); // 21 روز و 7 دقیقه و 18 ثانیه
```
