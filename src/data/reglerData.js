export const reglerData = [
  {
    name: "video-caption",
    shortDesc: "Vær sikker på at video tag har et tilsvarende caption tag",
    longDesc: "Sørg for, at alle videoelementer har en billedtekst ved hjælp af sporelementet med billedtekstattribut. Sørg for, at billedteksten formidler al meningsfuld information i videoelementet; dette inkluderer, men er ikke begrænset til, dialog, musikalske signaler og lydeffekter.",
    impact: "Kritisk",
    whyDesc: "Hvis en video ikke har nogen billedtekst, har døve brugere begrænset eller ingen adgang til oplysningerne i den. Selvom et undertekstspor er tilgængeligt, skal du sikre dig, at det indeholder alle relevante oplysninger i videoen, ikke kun dialog.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Døve"],
  },
  {
    name: "valid-lang",
    shortDesc: "Sikrer at lang-attributter har gyldige værdier",
    longDesc: "Sørg for, at den sprogkode, der er angivet i lang-attributten, er en gyldig sprogkode (f.eks. vil html lang`en` angive sproget i dokumentet til engelsk). Sørg for at identificere et sprog i det indledende html-element og stave attributten korrekt. Hvis det primære sprog i et dokument for eksempel er engelsk, kan du angive sproget som følger.",
    impact: "Seriøs",
    whyDesc: "Når du konfigurerer en skærmlæser, vælger brugere et standardsprog. Hvis sproget på en webside ikke er angivet, antager skærmlæseren, at det er standardsproget, som er indstillet af brugeren. Sprogvalg bliver et problem for brugere, der taler flere sprog og tilgår webstedet på mere end ét sprog. Det er vigtigt at angive et sprog og sikre, at det er gyldigt, så hjemmesideteksten udtales korrekt.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind", "Kognitiv"],
  },
  {
    name: "th-has-data-cells",
    shortDesc: "Sørg for, at th-elementer og elementer med role= columnheader/ rowheader har dataceller, de beskriver",
    longDesc: "Ensure that each table header in a data table refers to data cells so that each header cell that is used is actually a header of something.In other words, the th element must have associated data cells.",
    impact: "Seriøs",
    whyDesc: "Skærmlæsere har en specifik måde at annoncere tabeller på. Når tabeller ikke er korrekt markeret, skaber dette mulighed for forvirrende eller unøjagtige skærmlæseroutput.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind"],
  },
  {
    name: "td-headers-attr",
    shortDesc: "Sørg for, at hver celle i en tabel, der bruger attributten overskrifter, kun henviser til andre celler i den tabel",
    longDesc: "For at løse problemet skal du sikre dig, at hver celle i en tabel, der bruger overskrifter, refererer til en anden celle i den samme tabel ved at oprette en scope-attributværdi på hvert th element i tr-elementer. Denne regel kontrollerer, at referencer til overskriftskolonner og rækker forbinder til specifikke td-elementer.",
    impact: "Seriøs",
    whyDesc: "Skærmlæsere har en specifik måde at annoncere tabeller på. Når tabeller ikke er korrekt markeret, skaber dette mulighed for forvirrende eller unøjagtige skærmlæseroutput.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind"],
  },
  {
    name: "svg-img-alt",
    shortDesc: "Sikrer at <svg>-elementer med en img-, grafikdokument- eller grafiksymbolrolle har en tilgængelig tekst",
    longDesc: "Sørg for, at alle SVG-elementer, der er tilføjet som markup i HTML, en eller en kombination af nedenstående metoder, bruges til at give et tilgængeligt navn til SVG.",
    impact: "Seriøs",
    whyDesc: "Hensigten med succeskriterium 1.1.1 er at gøre information formidlet af ikke-tekstindhold (inklusive SVG-billeder) tilgængelig ved brug af et tekstalternativ. Tekstalternativer er en primær måde at gøre information tilgængelig på, fordi de kan gengives gennem enhver sensorisk modalitet (f.eks. visuel, auditiv eller taktil) for at matche brugerens behov.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind", "Mobilitet"],
  },
  {
    name: "server-side-image-map",
    shortDesc: "Sikrer, at der ikke bruges billedkort på serversiden",
    longDesc: "Skift alle billedkort på serversiden til billedkort på klientsiden.",
    impact: "Mindre",
    whyDesc: "Server-side billedkort er ikke tilgængelige på tastaturet; museklik er påkrævet for at få adgang til links indeholdt i billedet, hvilket gør billedet utilgængeligt for folk, der kun bruger tastaturer til deres navigation.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind", "Mobilitet"],
  },
  {
    name: "select-name",
    shortDesc: "Sikrer at det valgte element har et tilgængeligt navn",
    longDesc: "Tilknyt etiketter programmatisk til udvalgte elementer. Den anbefalede metode i de fleste tilfælde er at bruge label-elementet og en eksplicit tilknytning ved hjælp af attributterne for og id. Eksemplerne her er ordnet fra den mest almindelige acceptable løsning til den mindst almindelige acceptable løsning.",
    impact: "Kritisk",
    whyDesc: "Effektive formularetiketter er nødvendige for at gøre formularer tilgængelige. Formålet med formularelementer såsom afkrydsningsfelter, radioknapper, inputfelter osv. er ofte tydeligt for seende brugere, selvom formularelementet ikke er programmæssigt mærket. Brugere af skærmlæsere kræver nyttige formularetiketter til at identificere formularfelter. Tilføjelse af en etiket til alle formularelementer eliminerer tvetydighed og bidrager til et mere tilgængeligt produkt.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Svagt syn", "Mobilitet"],
  },
  {
    name: "scrollable-region-focusable",
    shortDesc: "Sørg for, at elementer, der har indhold, der kan rulles, er tilgængelige via tastaturet",
    longDesc: "Nøglen til at få et rulbart område til at være tilgængeligt med tastaturet er at sikre, at en bruger med kun tastatur kan fokusere selve det rulbare område eller et statisk tekstelement inden for det rulbare område. Det første eksempel nedenfor viser den første teknik, og det andet viser den anden teknik.",
    impact: "Seriøs",
    whyDesc: "Kontrollerer rullebart indhold for fokuserbare elementer, der muliggør tastaturnavigation. Tastaturnavigation bør ikke mislykkes, når fokus flyttes til et element inden for et rulbart område.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind", "Mobilitet"],
  },
  {
    name: "role-img-alt",
    shortDesc: "Sikrer at [role=img]-elementer har alternativ tekst",
    longDesc: "De følgende fire markup-eksempler består alle, fordi hvert eksempel indeholder markup gengivet som alternativ tekst:",
    impact: "Seriøs",
    whyDesc: "Skærmlæsere har ingen mulighed for at oversætte et billede til ord, der bliver læst for brugeren, selvom billedet kun består af tekst. Som et resultat er det nødvendigt, at billeder har kort, beskrivende og tilgængelig alternativ tekst, så skærmlæserbrugere tydeligt forstår billedets indhold og formål.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind"],
  },
  {
    name: "object-alt",
    shortDesc: "Sikrer at <objekt>-elementer har alternativ tekst",
    longDesc: "Add alternative text to all embedded <object> elements using either aria-label, aria-labelledby, or title attributes.",
    impact: "Seriøs",
    whyDesc: "Skærmlæsere har ingen mulighed for at oversætte ikke-tekstindhold til tekst, der er annonceret til brugerne. I stedet læser de alternativ tekst op. For skærmlæserbrugere at få oplysningerne indeholdt i indlejrede objektelementer, som skal indeholde kort, beskrivende alternativ tekst.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind"],
  },
  {
    name: "landmark-one-main",
    shortDesc: "Sikrer, at dokumentet har et hovedlandemærke.",
    longDesc: "Det er en bedste praksis at sikre, at der kun er ét hovedlandemærke til at navigere til sidenes primære indhold, og at hvis siden indeholder iframe-elementer, bør hver enten ikke indeholde nogen landemærker eller kun ét enkelt landemærke.",
    impact: "Moderere",
    whyDesc: "Det er meget lettere for brugere af skærmlæsere at navigere på en webside, hvis alt indholdet er opdelt mellem en eller flere højtstående sektioner. Indhold uden for disse sektioner er svært at finde, og dets formål kan være uklart.",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind", "Mobilitet"],
  },
  {
    name: "region",
    shortDesc: "Ensures all page content is contained by landmarks",
    longDesc: "Brugere af skærmlæsere kan navigere til en sektion baseret på dens HTML-element eller ARIA-landemærke. For eksempel kan du bruge ARIA-landemærker til at tilbyde en simpel erstatning for et link til at springe navigation over, selvom erstatningen kun er nyttig for brugere af skærmlæsere.",
    impact: "Moderere",
    whyDesc: "Det er meget lettere for brugere af skærmlæsere at navigere på en webside, hvis indholdet er opdelt mellem flere højtstående sektioner. Indhold uden for sektionerne er svært at finde, og formålet med indholdet kan være uklart",
    imgPath: "/img/placeholder.png",
    imgAlt: "Placeholder billede",
    imgPath2: "/img/placeholder.png",
    imgAlt2: "Placeholder billede",
    affect: ["Blind", "Døvblind", "Mobilitet"],
  },

];
