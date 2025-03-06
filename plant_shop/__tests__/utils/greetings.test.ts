import { getGreeting } from '../../src/utils/greetings';

describe('Greetings utility', () => {
  it('returns correct greeting', () => {
    expect(getGreeting('John')).toBe('Hello, John!');
  });
});
