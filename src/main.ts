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
}