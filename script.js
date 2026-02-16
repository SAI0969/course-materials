function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "nimda" && pass === "0969") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerHTML = "Invalid Credentials!";
    }
}
