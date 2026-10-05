let calcBtnJS = document.getElementById("calcBtnHTML");
let savedTotalJS = localStorage.getItem("totalclass");
let savedAttendedJS = localStorage.getItem("attendedclass");
let savedTargetJS = localStorage.getItem("targetatt");
let savedSemesterJS = localStorage.getItem("semester")
if (savedTotalJS !== null) {
    document.getElementById("totalclassHTML").value = savedTotalJS;
}
if (savedAttendedJS !== null) {
    document.getElementById("attendedclassHTML").value = savedAttendedJS;
}
if (savedTargetJS !== null) {
    document.getElementById("targetattHTML").value = savedTargetJS;
}
if (savedSemesterJS !== null) {
    document.getElementById("semesterHTML").value = savedSemesterJS;
}
calcBtnJS.addEventListener("click", function() {
    let totalclassJS = Number(document.getElementById("totalclassHTML").value);
    localStorage.setItem("totalclass", totalclassJS);
    let attendedclassJS = Number(document.getElementById("attendedclassHTML").value);
    localStorage.setItem("attendedclass", attendedclassJS);
    if(totalclassJS <= 0 || attendedclassJS < 0 || attendedclassJS > totalclassJS){
        alert("Please enter valid class values.")
        return;
    }
    let attendanceJS = attendedclassJS * 100 / totalclassJS;
    let targetattJS = Number(document.getElementById("targetattHTML").value);
    localStorage.setItem("targetatt", targetattJS);
    let semesterJS = document.getElementById("semesterHTML").value;
    localStorage.setItem("semester", semesterJS);
    let resultJS = document.getElementById("actualresultHTML");
    let resultBoxJS = document.getElementById("resultHTML");
    if (attendanceJS >= targetattJS) {
        resultBoxJS.className = "safe";
        let canSkipJS = Math.floor(
            (attendedclassJS * 100 / targetattJS) - totalclassJS
        );
        resultJS.innerHTML =
            "Your attendance is " + Math.floor(attendanceJS) + "%" +
            "<br>You safe gng chill out" +
            "<br>You can skip <strong>" + canSkipJS + "</strong> classes";
    }
    else {
        resultBoxJS.className = "danger";
        let needToAttendJS = Math.ceil(
            (targetattJS * totalclassJS - attendedclassJS * 100) /
            (100 - targetattJS)
        );

        resultJS.innerHTML =
            "Your attendance is " + Math.floor(attendanceJS) + "%" +
            "<br>You need to attend <strong>" + needToAttendJS + "</strong> classes";
    }
});