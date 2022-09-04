function getNumber() {
    return new Promise(function (resolve, reject) {
        let randNum = Math.floor((Math.random() * 100) + 1);  //considering number between 1 to 100.
        console.log(randNum);
        if (randNum % 5 == 0) {
            reject();
        } else {
            resolve();
        }
    });
}


getNumber().then(function () {
    console.log("Resolved")
}).catch(function () {
    console.log("Rejected")
})