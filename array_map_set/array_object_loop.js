let arr0 = new Array(1000000).fill(0).map((val,index)=>index+1)
let arr1 = new Array(1000000).fill(0).map((val,index)=>Math.floor(Math.random()*1000000))
// let arr1 = new Array(1000).fill(0)
//  arr1 = arr1.reduce((r,val)=>{
//     let v = Math.floor(Math.random()*1000)
//     return {
//         ...r,
//         [v]:v
//     }
// }, {})
// console.log({...arr1})
const hash = {}

// let arrRes = []
// const start = performance.now()
// arrRes = arr0.filter(item => arr1.indexOf(item)!==-1)
// console.log(arrRes)
// console.log((performance.now()-start)/1000)
/* perfomance 5.121939999982715 s */
const start = performance.now()
arr1.forEach((item, key)=>{
    hash[item] = item
})

let arrRes = []

 arrRes = arr0.filter(item => hash[item] && arrRes.indexOf(item)===-1)

    console.log((performance.now() - start) / 1000, ' '+arrRes.length)

/* perfomance 0.012980000115931034 s */

