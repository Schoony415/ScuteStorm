import { calculateScutesToAdd,calcScutesRetType } from "./calculateScutes"

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

})
})
