const {multiple} =require('../math')

test("testcase name",()=>{
    // insert(true, "testcase")
})

test("sum function",()=>{
    var sum1 = multiple(2,3)
    expect(sum1).toBe(4)
    // console.log(sum1);
    // if(sum1 !== 6){
    //     return  new Error("test case sum hase an error Sum should be 5",sum1)
    // }
})

test("async test",async() => {
    await setTimeout(() =>{
        expect(1).toBe(1)
        // done();
    },2000)
})