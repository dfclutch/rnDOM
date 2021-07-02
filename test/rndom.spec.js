let rndom = require("../rndom");
let expect = require('chai').expect;

describe('rndom', () => {
    describe('between', () => {
        let min, max, actual;
        
        it('should produce a value between min and max', () => {
            min = 0;
            max = 100;
            
            actual = rndom.between(min, max);
            expect(actual).to.be.within(min, max);
        });
        
        it('should work with negative ranges', () => {
            min = -100;
            max = 0;
            
            actual = rndom.between(min, max);
            expect(actual).to.be.within(min,max);
        });
        
        it('should work with negative/positive ranges', () => {
            min = -10;
            max = 10;
            
            actual = rndom.between(min, max);
            expect(actual).to.be.within(min,max);
        });
        
        it('should throw an error on overflowing range size', () => {
            min = -Number.MAX_VALUE;
            max = Number.MAX_VALUE;
            
            expect(() => rndom.between(min, max)).to.throw();
        });
        
        it('should throw an error when min > max', () => {
            min = 10;
            max = 0;
        
            expect(() => rndom.between(min, max)).to.throw();
        });
    });
    
    describe('intBetween', () => {
        let min, max, actual;
        
        it('should produce an integer value between min and max', () => {
            min = 0;
            max = Number.MAX_VALUE;
            
            actual = rndom.intBetween(min, max);
            expect(actual).to.be.within(min, max);
            expect(Number.isInteger(actual));
        });
    
    
        it('should work with negative ranges', () => {
            min = -Number.MAX_VALUE;
            max = 0;
        
            actual = rndom.intBetween(min, max);
            expect(actual).to.be.within(min, max);
            expect(Number.isInteger(actual));
        });
    
        it('should work with negative/positive ranges', () => {
            min = -Number.MAX_VALUE;
            max = 0;
        
            actual = rndom.intBetween(min, max);
            expect(actual).to.be.within(min, max);
            expect(Number.isInteger(actual));
        });
    
        it('should throw an error on overflowing range size', () => {
            min = -Number.MAX_VALUE;
            max = Number.MAX_VALUE;
        
            expect(() => rndom.intBetween(min, max)).to.throw();
        });
    
        it('should throw an error when min > max', () => {
            min = 10;
            max = 0;
        
            expect(() => rndom.intBetween(min, max)).to.throw();
        });
    });
    
    describe('oneOf', () => {
       let arr = [], length, actual;
       
       length = rndom.intBetween(50, 100);
       for (let i = 0; i < length; i++) {
           arr.push(rndom.intBetween(0, 1000));
       }
       
       it('should select an element of the array', () => {
           actual = rndom.oneOf(arr);
           
           expect(actual).to.be.oneOf(arr);
        });
    });
});