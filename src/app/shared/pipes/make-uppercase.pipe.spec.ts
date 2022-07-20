import { MakeUppercasePipe } from './make-uppercase.pipe';

describe('MakeUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new MakeUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
