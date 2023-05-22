let timecount = 1
let time

while (true) {
    setTimeout(() => {
    console.log("1초 후에 실행됨");
    if (document.getElementById(`time${timecount}`-1)){
        document.getElementById(`time${timecount}`-1).remove()}
    timecount+=1;
    time = document.createElement("h1");
    time.setAttribute("class", "sec")
    time.setAttribute("id", `time${timecount}`)
    time.setAttribute("src",`time${timecount}`)
    }
    , 1000);
}
