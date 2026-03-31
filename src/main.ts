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

    // Kallar på funktion för rendering
    renderCourses();
});



// Funktioner 
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
}

function renderCourses(): void{
    // Tömmer befintligt innehåll i Kurslistan.
    console.log("Testar funktionen för rendering.")
}