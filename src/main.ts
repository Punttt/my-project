// Interface
interface CourseInfo {
    name: string;
    code: string;
    progression: 'A' | 'B' | 'C';
    url: string;
}

// Skapar en tom array
let courses : CourseInfo[] = [];

// Inväntar DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Hämtar formuläret
    const form = document.querySelector("#course-form") as HTMLFormElement;

    // Lägger till eventlyssnare på formuläret
    form.addEventListener("submit", handleSubmit);

    // Testdata - ta bort när applikation är färdig
    courses = [
        {
            name: "Webbutveckling I",
            code: "DT084G",
            progression: "A",
            url: "https://miun.se/webbutveckling1"
        },
        {
            name: "Webbutveckling I",
            code: "DT045T",
            progression: "A",
            url: "https://miun.se/webbutveckling1"
        },
        {
            name: "Webbutveckling I",
            code: "DT031H",
            progression: "A",
            url: "https://miun.se/webbutveckling1"
        }
    ];

    // Hämtar kurslista
    const courseListEl = document.querySelector("#course-list") as HTMLElement;

    if(courseListEl){
        courseListEl.addEventListener("click", handleDelete);
    }

    // Renderar ut kurslistan
    renderCourses();
});

// Funktion raderar kurslista
function handleDelete(e: Event): void {
    const target = e.target as HTMLElement;

    // Filtrera bort allt som inte är knappen
    if(target.tagName !== "BUTTON") {
        return;
    }

    // Filtrera courses och ta bort raden som knappen tillhör
    const code = target.dataset.code;
    courses = courses.filter((course) => course.code !== code);

    // Renderar den uppdaterade listan
    renderCourses();
}

// Funktion Hanterar formulär och input av nya kurser
function handleSubmit(e: SubmitEvent): void {
    e.preventDefault();
    console.log("Formuläret skickades!");

    // Hämtar de nya värdena som är inmatade i formuläret
    const nameInput = (document.querySelector("#name") as HTMLInputElement).value;
    const codeInput = (document.querySelector("#code") as HTMLInputElement).value;
    const progressionInput = (document.querySelector("#progression") as HTMLInputElement).value;
    const syllabusInput = (document.querySelector("#syllabus") as HTMLInputElement).value;

    // Skapar ett nytt objekt för att lagra formulärdata
    const course : CourseInfo = {
        name:nameInput,
        code:codeInput,
        progression:progressionInput,
        url:syllabusInput
    }

    // Pushar in i det globala objektet
    courses.push(course);

    // Renderar ut den uppdaterade kurslistan
    renderCourses();
}

// Funktion för att rendera kurser.
function renderCourses(): void{
    // Hämtar elementet där kurserna visas
    const courseList = document.querySelector("#course-list") as HTMLElement;

    // Tömmer befintligt innehåll i Kurslistan.
    courseList.innerHTML = "";
    
    // Loopa igenom courses
    courses.forEach(course => {
        // Skapa en rad för kursen
        const row = document.createElement("tr");

        // Lägger till td element 

        // Kursnamn
        const nameCell = document.createElement("td");
        nameCell.textContent = course.name;
        row.appendChild(nameCell);

        // Kurskod
        const codeCell = document.createElement("td");
        codeCell.textContent = course.code;
        row.appendChild(codeCell);

        // Progression
        const progressionCell = document.createElement("td");
        progressionCell.textContent = course.progression;
        row.appendChild(progressionCell);

        // Kursplan (Länk)
        const syllabusCell = document.createElement("td");
        const link = document.createElement("a");
        link.href = course.url;
        link.textContent = "Läs mer..";
        link.target = "_blank"
        syllabusCell.appendChild(link);
        row.appendChild(syllabusCell);

        // Radera-knapp
        const buttonCell = document.createElement("td");
        const button = document.createElement("button");
        button.textContent = "Ta bort";
        button.dataset.code = course.code;
        button.classList.add("btn");
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        // Lägg till raden i kurslistan
        courseList.appendChild(row);
    });
}