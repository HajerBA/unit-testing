

describe('jasmine syntax',function () {
    it('should pass', function () {

      expect(true).toBe(true);
    }) ; 

    describe('concabloup function', function () {
        
        it('should return testbloup',function () {
           expect(concabloup('test')).toBe('testbloup'); 
        });

        it('should convert number to string', function () {
            let param=10;
            let expectedResult='10bloup';
            let result= concabloup(param);
            expect(result).toBe(expectedResult);
        });

        it('should throw error with object',function () {
            let param={};

            expect(()=> concabloup(param).toThrow(new Error('no object')));
        })
    });
    
});   