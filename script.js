let promise = new Promise((resolve, reject) =>{
    let result = Math.ceil(Math.random() * 100)
    console.log(result);
    
    if(50 > result){
        return resolve("you got it!")
    }
    return reject("Do it again!");
})
.then((a) =>{
    console.log(a)
})
.catch((error) =>{
    console.log(error);
})
console.log(promise);
