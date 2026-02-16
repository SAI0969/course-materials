function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "nimda" && pass === "0969") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerHTML = "Invalid Credentials!";
    }
}

function searchCourse() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("resultTable");
    let count = 0;

    table.innerHTML = `
        <tr>
            <th>Semester</th>
            <th>Course</th>
            <th>Access</th>
        </tr>
    `;

    courses.forEach(course => {
        if (course.name.toLowerCase().includes(input)) {
            count++;
            table.innerHTML += `
                <tr>
                    <td>${course.sem}</td>
                    <td>${course.name}</td>
                    <td>
                        <a href="${course.link}" target="_blank">
                            <button class="open-btn">Open Material</button>
                        </a>
                    </td>
                </tr>
            `;
        }
    });

    if (count === 0 && input !== "") {
        table.innerHTML += `
            <tr>
                <td colspan="3">No course found</td>
            </tr>
        `;
    }

    document.getElementById("courseCount").innerText =
        count > 0 ? count + " course(s) found" : "";
}
