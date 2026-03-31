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


    const course : CourseInfo = {
        name:nameInput,
        code:codeInput,
        progression:progressionInput,
        url:syllabusInput
    }

    console.log(course);
}