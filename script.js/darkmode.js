let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-toggle");

// check if dark mode is on
// if on, turn off
// if off, turn on

const enableDark = () => {
    
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDark = () => {
    
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
};


darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
   
    if (darkMode !== "enabled") {
        enableDark();
    } else {
        disableDark();
    }
});

