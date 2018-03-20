

describe('Calcul class',function () {
    let newcal;
    beforeEach(function () {
        newcal= new Calcul();
        
    });

    it('notnumber', function () {
        let a='a';
        let b='b';
        expect(newcal.notnumber(a,b)).toBeNaN();
    });
    
    describe('operation function', function () {
   
        it('should add a et b', function () {
            
            let a=10;
            let b=20;
            let expectedResult=30;
            let result= newcal.operation(a,b,'+');
            expect(result).toBe(expectedResult);
        });

        it('should subtract a et b', function () {
            
            let a=40;
            let b=20;
            let expectedResult=20;
            let result= newcal.operation(a,b,'-');
            expect(result).toBe(expectedResult);
        });

        it('should multiply a et b', function () {
            let newcal= new Calcul();   let a=40;
            let b=20;
            let expectedResult=800;
            let result= newcal.operation(a,b,'*');
            expect(result).toBe(expectedResult);
        });

        it('should unscrew a et b', function () {
            
            let a=40;
            let b=20;
            let expectedResult=2;
            let result= newcal.operation(a,b,'/');
            expect(result).toBe(expectedResult);
        });

        it('should not crash when dividing by zero',function () {
            let a=10;
            let b=0;
            let expectedResult=Infinity;
            let result= newcal.operation(a,b,'/');
            expect(result).toBe(expectedResult);
        });

        it('should throw  when not oerand',function () {
            let a=10;
            let b=2;
            let expectedResult='not an oprand';
            
            expect(()=>newcal.operation(a,b,'bloup').toThrow(new Error('wrong operand')));
        });
        

});
});