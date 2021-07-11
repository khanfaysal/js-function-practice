// scope
var GlobalVar = "khan faysal";
function testCloser(){
    const innerVar = "inner variable value";
    console.log("hello" + " " + GlobalVar);
    // console.log(innerVar);
}
// console.dir(testCloser)
testCloser();
// console.log(innerVar);