import { calculateScutesToAdd,calcScutesRetType } from "../../logic/calculateScutes"

//calculateScutes=(scutesToMathWith, landsETB, totalLands)=>{
describe("We hate the Scutes",()=>{
describe("pre-6 land",()=>{

    test('1 scute; +1 land; 4 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,4);
        expect(scutesToAdd).toEqual(0)
        expect(buggersToAdd).toEqual(1)
    })

    test('1 scute; +2 land; 5 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,2,5);
        expect(scutesToAdd).toEqual(0)
        expect(buggersToAdd).toEqual(2)
    })

    test('1 scute; +5 land; 5 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,5,5);
        expect(scutesToAdd).toEqual(0)
        expect(buggersToAdd).toEqual(5)
    })

    test('2 scute; +1 land; 4 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,1,4);
        expect(scutesToAdd).toEqual(0)
        expect(buggersToAdd).toEqual(2)
    })

    test('2 scute; +2 land; 4 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,2,4);
        expect(scutesToAdd).toEqual(0)
        expect(buggersToAdd).toEqual(4)
    })

    test('2 scute; +5 land; 5 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,5,5);
        expect(scutesToAdd).toEqual(0)
        expect(buggersToAdd).toEqual(10)
    })

    test('5 scute; +5 land; 5 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(5,5,5);
        expect(scutesToAdd).toEqual(0)
        expect(buggersToAdd).toEqual(25)
    })

    describe('multipliers',()=>{
        test('1 scutes; +1 land; 3 land; double multiplier',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,3,{multiplier:2});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(2)
        })

        test('2 scutes; +1 land; 3 land; double multiplier',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,1,3,{multiplier:2});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(4)
        })

        test('1 scutes; +1 land; 3 land; triple multiplier',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,3,{multiplier:3});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(3)
        })

        test('1 scutes; +2 land; 3 land; triple multiplier',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,2,3,{multiplier:3});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(6)
        })

    })

    describe('additions',()=>{

        test('1 scute; +1 land; 4 land; 1 addition',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,4,{addition:1});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(2)
        })

        test('2 scute; +1 land; 4 land; 1 addition',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,1,4,{addition:1});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(3)
        })

        test('1 scute; +2 land; 4 land; 1 addition',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,2,4,{addition:1});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(4)
        })

        test('2 scute; +2 land; 4 land; 1 addition',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,2,4,{addition:1});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(6)
        })
    })

    describe('multipliers and additions',()=>{

        test('1 scute; +1 land; 4 land; 2 multiplier; 1 addition',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,4,{multiplier:2, addition:1});
            expect(scutesToAdd).toEqual(0)
            expect(buggersToAdd).toEqual(4)
        })
    })

})
describe("post-6 land",()=>{

    test('1 scute; +1 land; 6 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,6);
        expect(scutesToAdd).toEqual(1)
        expect(buggersToAdd).toEqual(0)
    })

    test('2 scute; +1 land; 6 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,1,6);
        expect(scutesToAdd).toEqual(2)
        expect(buggersToAdd).toEqual(0)
    })

    test('1 scute; +6 land; 6 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,6,6);
        expect(scutesToAdd).toEqual(6)
        expect(buggersToAdd).toEqual(0)
    })

    test('2 scute; +6 land; 6 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,6,6);
        expect(scutesToAdd).toEqual(12)
        expect(buggersToAdd).toEqual(0)
    })

    test('2 scute; +10 land; 15 land',()=>{
        let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,10,15);
        expect(scutesToAdd).toEqual(20)
        expect(buggersToAdd).toEqual(0)
    })

    describe('multipliers',()=>{
        test('1 scutes; +1 land; 6 land; double multiplier',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,6,{multiplier:2});
            expect(scutesToAdd).toEqual(2)
            expect(buggersToAdd).toEqual(0)
        })

        test('1 scutes; +2 land; 6 land; double multiplier',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,2,6,{multiplier:2});
            expect(scutesToAdd).toEqual(4)
            expect(buggersToAdd).toEqual(0)
        })

        test('2 scutes; +10 land; 6 land; triple multiplier',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,10,6,{multiplier:3});
            expect(scutesToAdd).toEqual(60)
            expect(buggersToAdd).toEqual(0)
        })
    })

    describe('additions',()=>{
        test('1 scutes; +1 land; 6 land; 1 additional',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,6,{addition:1});
            expect(scutesToAdd).toEqual(2)
            expect(buggersToAdd).toEqual(0)
        })

        test('1 scutes; +2 land; 6 land; 1 additional',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,2,6,{addition:1});
            expect(scutesToAdd).toEqual(4)
            expect(buggersToAdd).toEqual(0)
        })

        test('2 scutes; +1 land; 6 land; 1 additional',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,1,6,{addition:1});
            expect(scutesToAdd).toEqual(3)
            expect(buggersToAdd).toEqual(0)
        })

        test('3 scutes; +3 land; 6 land; 2 additional',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(3,3,6,{addition:2});
            expect(scutesToAdd).toEqual(15)
            expect(buggersToAdd).toEqual(0)
        })

    })


    describe('multipliers and additions',()=>{

        test('1 scute; +1 land; 6 land; 2 multiplier; 1 addition',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(1,1,6,{multiplier:2, addition:1});
            expect(scutesToAdd).toEqual(4)
            expect(buggersToAdd).toEqual(0)
        })

        test('2 scute; +5 land; 6 land; 2 multiplier; 1 addition',()=>{
            let {scutesToAdd, buggersToAdd}:calcScutesRetType = calculateScutesToAdd(2,5,6,{multiplier:2, addition:1});
            expect(scutesToAdd).toEqual(30)
            expect(buggersToAdd).toEqual(0)
        })
    })
})
})
