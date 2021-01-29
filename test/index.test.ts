import { convert } from '../src';

describe('convert', () => {
  it('should work correctly', () => {
    expect(convert(1).from('wah').to('m2')).toEqual(4);
    expect(convert(100).from('wah').to('rai')).toEqual(0.25);

    expect(convert(1).from('ngan').to('m2')).toEqual(400);
    expect(convert(1).from('ngan').to('km2')).toEqual(0.0004);
    expect(convert(24).from('ngan').to('rai')).toEqual(6);

    expect(convert(0.23).from('rai').to('m2')).toEqual(368);
    expect(convert(2).from('rai').to('km2')).toEqual(0.0032);
    expect(convert(2).from('rai').to('wah')).toEqual(800);
    expect(convert(7).from('rai').to('ngan')).toEqual(28);

    expect(convert(2).from('ft2').to('m2')).toEqual(0.18580608);
    expect(convert(34444).from('ft2').to('m2')).toEqual(3199.9523097600004);

    expect(convert(1000).from('m2').to('ngan')).toEqual(2.5);
    expect(convert(200).from('m2').to('rai')).toEqual(0.125);

    expect(convert(0.3).from('km2').to('rai')).toEqual(187.5);
    expect(convert(1).from('km2').to('m2')).toEqual(1e6);
    expect(convert(1).from('km2').to('acre')).toEqual(247.1576866040534);

    expect(convert(1).from('hectare').to('wah')).toEqual(2500);
    expect(convert(3).from('hectare').to('m2')).toEqual(30000);

    expect(convert(1.2).from('acre').to('m2')).toEqual(4855.2);
    expect(convert(1.2).from('acre').to('rai')).toEqual(3.0345);
  });
});
