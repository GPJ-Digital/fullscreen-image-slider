let time = new Date().getTime();
const setActivityTime = (e) => {
    time = new Date().getTime();
}
document.body.addEventListener("mousemove", setActivityTime);
document.body.addEventListener("keypress", setActivityTime);
const refresh = () => {
    if (new Date().getTime() - time >= 60000) {
        window.location.reload(true);
    } else {
        setTimeout(refresh, 10000);
    }
}
console.log(time);
setTimeout(refresh, 10000);