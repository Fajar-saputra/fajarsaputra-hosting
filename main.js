document.getElementById("current-year").textContent = new Date().getFullYear();


// const theme = localStorage.getItem("theme");

// if (theme) {
//     document.body.setAttribute("data-theme", theme);
// } else {
//     localStorage.setItem("theme", "light");
//     document.body.setAttribute("data-theme", "light"); // Default ke light mode
// }

// function toggleTheme() {
//     const sunIcon = document.getElementById("sun_icon");
//     const moonIcon = document.getElementById("moon_icon");
//     const body = document.body;
//     const currentTheme = body.getAttribute("data-theme");

//     // Toggle theme
//     const newTheme = currentTheme === "dark" ? "light" : "dark";
//     body.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme); // Simpan tema baru

//     // Perbarui ikon
//     if (newTheme === "dark") {
//         sunIcon.style.display = "block";
//         moonIcon.style.display = "none";
//     } else {
//         sunIcon.style.display = "none";
//         moonIcon.style.display = "block";
//     }
// }

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Atur tema default berdasarkan preferensi sistem atau data tersimpan
const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
document.body.setAttribute("data-theme", initialTheme);
localStorage.setItem("theme", initialTheme);

// Fungsi toggle tema tetap sama
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    console.log("Current theme:", currentTheme); // Log tema saat ini
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    console.log("New theme:", newTheme); // Log tema yang akan diterapkan
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    console.log("Theme updated in localStorage:", localStorage.getItem("theme")); // Log tema yang tersimpan
}


console.log("System prefers dark mode:", systemPrefersDark);

console.log("Current theme:", theme);
console.log("New theme:", newTheme);
