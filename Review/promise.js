let comp = function () {
    return new Promise(function (resolve, reject) {
        console.log("hi");
        reject();
    })
        .then(function () {
            console.log("SucessFul");
        })
        .catch(function () {
            console.log("Error");
        })
};
comp();

let call1 = function () {
    return new Promise(function (resolve, reject) {
        console.log("Call 1");
        resolve();
    })
};
function call2() {
    return new Promise(function (resolve, reject) {
        console.log("Call 2");
        resolve();
    })
}
function call3() {
    return new Promise(function (resolve, reject) {
        console.log("Call 3");
        reject();
    })
}
function call4() {
    return new Promise(function (resolve, reject) {
        console.log("Call 4");
        resolve();
    })
}
call1()
    .then(function () {
        console.log("Sucess");
        call2()
            .then(function () {
                console.log("Sucess");
                call3()
                    .then(function () {
                        console.log("Sucess");
                        call4()
                            .then(function () {
                                console.log("Sucess");
                            })
                            .catch(function () {
                                console.log("Error")
                            })
                    })
                    .catch(function () {
                        console.log("Error")
                    })
            })
            .catch(function () {
                console.log("Error")
            })
            .catch(function () {
                console.log("Error")
            })
    })





