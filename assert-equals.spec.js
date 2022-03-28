
const assertEquals = require('./assert-equals');


describe('assertEquals', () => {
    describe('comparing the primitive types', () => {
      it('matching types and inputs that throw no errors', () => {
              expect(() => assertEquals('abc', 'abc')).not.toThrow()
              expect(() => assertEquals('squid', 'squid')).not.toThrow()
              expect(() => assertEquals('cat', 'cat')).not.toThrow()
              expect(() => assertEquals('Peter', 'Peter')).not.toThrow()
              expect(() => assertEquals(1, 1)).not.toThrow()
              expect(() => assertEquals(20, 20)).not.toThrow()
              expect(() => assertEquals(5, 5)).not.toThrow()
              expect(() => assertEquals(undefined, undefined)).not.toThrow()
              expect(() => assertEquals(null, null)).not.toThrow()
      })
  
      it('when there is no match then an error will be thrown', () => {
              expect(() => assertEquals(1, '1')).toThrow('Expected type number but found type string')
              expect(() => assertEquals(22, '22')).toThrow('Expected type number but found type string')
              expect(() => assertEquals('88', 88)).toThrow('Expected type string but found type number')
              expect(() => assertEquals(true, 'true')).toThrow('Expected type boolean but found type string');
              expect(() => assertEquals('false', false)).toThrow('Expected type string but found type boolean');
      })
  
      it('if there is no match then error is pushed', () => {
             expect(() => assertEquals('abcef', 'abc')).toThrow('Expected abcef but found abc')
             expect(() => assertEquals('peter', 'pet')).toThrow('Expected peter but found pet')
             expect(() => assertEquals(8, 9)).toThrow('Expected 8 but found 9')
             expect(() => assertEquals(1, 2)).toThrow('Expected 1 but found 2')
             expect(() => assertEquals(true, false)).toThrow('Expected true but found false')
      })
    })
  
    describe('comparing different Arrays', () => {
      it('matching lengths and elements, throws no error', () => {
             expect(() => assertEquals([12,13,14], [12,13,14])).not.toThrow()
             expect(() => assertEquals('abc', 'abc')).not.toThrow()
             expect(() => assertEquals('bear', 'bear')).not.toThrow()
             expect(() => assertEquals([4,5,6], [4,5,6])).not.toThrow()
      })
  
      it('once the lengths do not match', () => {
             expect(() => assertEquals([22,23,24,25,26,27,28], [22,23])).toThrow('Expected array length 7 but found 2')
             expect(() => assertEquals(['e','f','g','h'], ['e','f','g','h','i'])).toThrow('Expected array length 4 but found 5')
             expect(() => assertEquals(['a','b'], ['a','b','c'])).toThrow('Expected array length 2 but found 3')
             expect(() => assertEquals([1,2,3,4], [1,2,3])).toThrow('Expected array length 4 but found 3')
      })
  
      it('when elements do not match then throw an error', () => {
             expect(() => assertEquals(['a','b'], ['a','d'] )).toThrow('Expected b but found d')
             expect(() => assertEquals([3,4], [3,5] )).toThrow('Expected 4 but found 5')
             
      })
    })
  })
