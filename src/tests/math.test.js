const {multiple} =require('../math')

test("testcase name",()=>{
    // insert(true, "testcase")
})

test("sum function",()=>{
    var sum1 = multiple(2,3)
    console.log(sum1);
    if(sum1 !== 6){
        return  new Error("test case sum hase an error Sum should be 5",sum1)
    }
})