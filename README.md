# Kursapplikation
En enkel kursapplikation byggd med TypeScript, Vite, HTML, CSS och DOM-manipulation.
Applikationen tillåter användaren att:
  - Lägga till kurser
  - Visa en tabell med kurser
  - Radera kurser från tabellen
  - spara data i Local storage

## Syfte
Syftet med applikationen var att DOM-hantera med TypeScript, formulärhantering, event delegation, rendering av listor och användning av LocalStorage.
Grundläggade GRUD-funktionalitet, interface i Typescript och strukturering av en liten frontend-applikation med vite.

## Sidor i applikationen
Applikationen består av en sida:
Index.html
  - Visar ett formulär för att lägga till kurser
  - visar tabell med alla sparade kurser
  - innehåller knappar för att radera kurser

## Funktionalitet
### Lägg till kurs
Användaren fyller i:
  - Kursnamn
  - Kurskod
  - Länk till kursplan
  - Progression
Vis submit så sparas kurseninformationen i en array, arrayen sparas i localstorage, tabellen renderas och formuläret rensas.

### Visa kurser
Alla kurser renderas i en tabell med informationen och en raderingsknapp som är kopplad till kurskorden.

### Radera kurs
Event delegation fångar klick på knappar, kursern filtreras bort från arraten, localstorage updateras och tabellen renderas om.

### Spara data
Vid sidladdning läses kurser från localstorage, vid ändring skrivs datan tillbaka,

### Typer av funktioner
  - handleSubmit: hanterar formulär och lägger till kurs
  - handleDelete: ta bort kurs via event
  - renderCourses: renderar tabellen dynamiskt
  - DOMcontentLoaded: initierar appen och laddar sparade kurser från Localstorage

## Validering
TypeScript säkerställer att alla kurser följer interfacet courseInfo. 
Progression typas som A, B eller C.
Formuläret rensas efter submit.

## HTML/CSS
Enkel och ren HTML struktur, tabell för utskrift.
Formulär med inputs och select.
Grundläggande css för layout och knappar, som är responsiv mellan desktop och mobila enheter.

## Installation
Klona projektet:
```
git clone https://github.com/Punttt/my-project.git
cd my-project
```

Installera, starta & bygga:
```
npm install
npm run dev
npm run build
npm run preview
```

### Publicerad webbplats
Netlify: https://tslab1.netlify.app/

Skapad av: Pontus Johansson
