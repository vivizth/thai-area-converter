# Guide

Convert Thai land area with several units


rai(ไร่), ngan(งาน), wah(วา), m2(ตารางเมตร), km2(ตารางกิโลเมตร), ft2(ตารางฟุต), acre(เอเคอร์), hectare(เฮกเตอร์)

## Usage

```bash
const convert = require('./thai-area-converter'); //commonjs
import {convert} from 'thai-area-converter'; //ESM

convert(2).from('rai').to('wah');  // 800
convert(1).from('ngan').to('m2');  // 400
convert(1000).from('m2').to('ngan');  // 2.5
```
