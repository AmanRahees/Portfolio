const nav = document.getElementById("NavBar");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 100){
        nav.style.backgroundColor = '#ffffff22';
    }else{
        nav.style.backgroundColor = 'transparent';
    }
});

const jobRoles = ["Python Developer.", "Data Scientist."];
let currentRoleIndex = 0;
const jobRoleElement = document.getElementById("jobRole");

function typeJobRole() {
    const currentRole = jobRoles[currentRoleIndex];
    let currentIndex = 0;

    function type() {
        if (currentIndex < currentRole.length) {
            jobRoleElement.textContent += currentRole.charAt(currentIndex);
            currentIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (currentIndex > 0) {
            jobRoleElement.textContent = currentRole.substring(0, currentIndex - 1);
            currentIndex--;
            setTimeout(erase, 20);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % jobRoles.length;
            setTimeout(() => {
                jobRoleElement.textContent = ""; // Clear the element
                typeJobRole(); // Start typing the next role
            }, 500);
        }
    }

    type();
}

typeJobRole();