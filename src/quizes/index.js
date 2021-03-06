const quizzes = [
  {
    uuid: "427a2267-2733-441f-ace6-83f5eac99ae4",
    name: "Toets 2",
    questions: [
      {
        uuid: "85d3360f-6955-4fd8-a19d-1f67dd73e647",
        question: "Welke vormen van testonderhoud zijn er?",
        correctAnswerNr: 0,
        substantiation:
          "Correctief: Herstellen van afwijkingen. - Repressief: Corrigeren van systemen zonder concrete problemen van gebruik in productie - Adaptief: Aanpassen van systemen als gevolg van wijzigende omgeving denk aan updates of wetregeling. - Perfectief: aanpassen aan veranderende eisen van gebruikers, denk aan het toevoegen van nieuwe features.",
        answers: [
          {
            nr: 0,
            answer: "Correctief - Repressief - Adaptief - Perfectief",
          },
          {
            nr: 1,
            answer: "Reparatief - Selectief - Adaptief",
          },
          {
            nr: 2,
            answer: "Bugfixes - Feature request",
          },
        ],
      },
      {
        uuid: "11624b61-8b01-4556-a200-95a95449879f",
        question: "Wat valt onder correctief onderhoud?",
        correctAnswerNr: 1,
        substantiation: "Hieronder vallen hotfixes, bugfixes",
        answers: [
          {
            nr: 0,
            answer: "Aanpassingen op basis van een gewijzigde omgeving",
          },
          {
            nr: 1,
            answer: "Herstellen van afwijkingen, bijvoorbeeld bugfixes",
          },
          {
            nr: 2,
            answer: "Aanpassen aan veranderende eisen van gebruikers",
          },
        ],
      },
      {
        uuid: "16c07214-abe7-4ce9-8e93-cd74103dc089",
        question: "Welke testmethode past het beste in een ketentest?",
        correctAnswerNr: 0,
        substantiation:
          "De procescyclustest richt zich op de integratie van de administratieve organisatie en het informatiesysteem. (wikipedia)",
        answers: [
          {
            nr: 0,
            answer: "Procescyclustest",
          },
          {
            nr: 1,
            answer: "Unit testen",
          },
          {
            nr: 2,
            answer: "Integratietest",
          },
        ],
      },
      {
        uuid: "e420b832-a582-4347-83d2-68c7320b31c7",
        question: "Om welke redenen kan een regressietest niet goed gaan?",
        correctAnswerNr: 3,
        answers: [
          {
            nr: 0,
            answer:
              "De specificaties niet up to date zijn - Traceerbaarheid tussen testware is niet goed bijgehouden",
          },
          {
            nr: 1,
            answer:
              "Onvoldoende kennis bij de betrokken partijen - Tijdens het ontwikkelen niet ge??nvesteerd in onder houdbaarheid",
          },
          {
            nr: 2,
            answer:
              "Te weinig aandacht voor niet-functionele kwaliteitsattributen",
          },
          {
            nr: 3,
            answer: "Alle antwoorden zijn goed",
          },
        ],
      },
      {
        uuid: "ff77b72e-036c-4545-871c-e2680d12123c",
        question: "In welke gevallen kun je beter geen testen automatiseren?",
        correctAnswerNr: 0,
        substantiation:
          "Automatische testen kunnen meer onderhoud en kosten met zich meebrengen als ze verkeerd worden toegepast.",
        answers: [
          {
            nr: 0,
            answer:
              "De testen kunnen maar een keer worden uitgevoerd - als je gaat testen op gebruiksvriendelijkheid - als je afhankelijk bent van menselijke handelingen - als er geen risico is",
          },
          {
            nr: 1,
            answer:
              "Als het bedrijf een hoop tester in dienst heeft - als de testen maar een keer uitgevoerd kunnen worden - als de tester al veel tijd kwijt is voor de handmatige testen, want het omzetten naar geautomatiseerde testen kost nog meer tijd",
          },
        ],
      },
      {
        uuid: "06740602-9658-435e-a22a-ba734305be82",
        question: "Wat zijn voordelen van testautomatisering?",
        correctAnswerNr: 3,
        answers: [
          {
            nr: 0,
            answer:
              "Teams krijgen meer kennis over testen - het bedrijf kan marketten dat zij automatisch testen",
          },
          {
            nr: 1,
            answer: "Verhoogde testdekking - verlaagde totale testkosten",
          },
          {
            nr: 2,
            answer:
              "Verkorten van de doorlooptijd - verhogen van testfrequentie",
          },
          {
            nr: 3,
            answer: "Antwoord 2 en 3",
          },
        ],
      },
      {
        uuid: "887044b5-37e5-4478-ae2e-142f1b91e780",
        question: "Noem een system requirement die onder usability valt",
        correctAnswerNr: 1,
        substantiation:
          "Usability focused zich op de gebruiker en de interactie tussen een product, performance is een eigen category in het ISO 25010 model",
        answers: [
          {
            nr: 0,
            answer: "De homepagina moet binnen 300 ms worden ingeladen",
          },
          {
            nr: 1,
            answer:
              "De homepagina moet een zoekbalk hebben zodat, gebruikers producten kunnen opzoeken",
          },
        ],
      },
      {
        uuid: "ab27cf70-e8f2-4083-a81b-b162ea7347f5",
        question: "Waar richt usability zich op?",
        correctAnswerNr: 0,
        substantiation:
          "Usability richt zich op de gebruiker en de interactie tussen een product. Het is nummer vier in de ISO 25010 stadaard",
        answers: [
          {
            nr: 0,
            answer: "De interactie tussen de gebruikers en een product",
          },
          {
            nr: 1,
            answer:
              "De mate waarin een product zijn gewenste functies effici??nt kan uitvoeren",
          },
          {
            nr: 2,
            answer:
              "De mate waarin een systeem, product of component aan betrouwbaarheidsbehoeften voldoet onder normale werkomstandigheden",
          },
        ],
      },
      {
        uuid: "aa6c4149-5e54-459d-9b2d-bf79d3ae38ed",
        question: "Foutbestendigheid is een kenmerk van",
        correctAnswerNr: 2,
        answers: [
          {
            nr: 0,
            answer: "Functional suitability",
          },
          {
            nr: 1,
            answer: "Reliability",
          },
          {
            nr: 2,
            answer: "Usability",
          },
          {
            nr: 3,
            answer: "Security",
          },
        ],
      },
      {
        uuid: "2276d98d-a4cf-41ea-bbaa-0ff6a50f314e",
        question:
          "Hoe heet de informatie die je gebruikt voor het maken van testgevallen?",
        correctAnswerNr: 1,
        substantiation:
          "Testbasis kan het volgende bevatten: Requirements, Functioneel ontwerpen, Technisch ontwerpen, Systeemdocumentatie, Documentatie, Checklists, het oude systeem en oude testgevallen",
        answers: [
          {
            nr: 0,
            answer: "Testdata",
          },
          {
            nr: 1,
            answer: "Testbasis",
          },
          {
            nr: 2,
            answer: "Documentatie",
          },
          {
            nr: 3,
            answer: "Oude testgevallen",
          },
        ],
      },
      {
        uuid: "7fb20d8b-2989-4a0c-ad1b-6beb8b9f5fff",
        question: "Waar worden testontwerptechnieken voor gebruikt?",
        correctAnswerNr: 1,
        answers: [
          {
            nr: 0,
            answer:
              "Om een makkelijke keuze te maken, op welke manier je wilt testen",
          },
          {
            nr: 1,
            answer:
              "Om op een gestandaardiseerde wijze testgevallen op te stellen",
          },
        ],
      },
      {
        uuid: "0b4ee7e1-db7d-4450-8da7-b1c31f222c52",
        question: "Wat betekent validatie?",
        correctAnswerNr: 0,
        answers: [
          {
            nr: 0,
            answer:
              "Bouwen we het product goed. Voldoet het aan de requirements?",
          },
          {
            nr: 1,
            answer:
              "Bouwen we het goede product. Zijn het de requirements wel?",
          },
        ],
      },
      {
        uuid: "041ead62-5464-4a94-ab72-98252b19a0fa",
        question: "Wat betekent Verifi??ren?",
        correctAnswerNr: 1,
        answers: [
          {
            nr: 0,
            answer:
              "Bouwen we het product goed. Voldoet het aan de requirements?",
          },
          {
            nr: 1,
            answer:
              "Bouwen we het goede product. Zijn het de requirements wel?",
          },
        ],
      },
      {
        uuid: "27d0d249-3b6a-42d1-a268-f765afdb8948",
        question: "Wat betekent controlability?",
        correctAnswerNr: 0,
        answers: [
          {
            nr: 0,
            answer:
              "Om te kunnen doen wat we willen met het gegeven systeem, moet het systeem controleerbaar zijn",
          },
          {
            nr: 1,
            answer:
              "Om te zien wat er in het systeem onder observatie gebeurt, moet het systeem moet waarneembaar zijn",
          },
        ],
      },
      {
        uuid: "6051d035-fb2a-4da8-a511-eabddb131c5e",
        question: "Wat betekent Observability?",
        correctAnswerNr: 1,
        answers: [
          {
            nr: 0,
            answer:
              "Om te kunnen doen wat we willen met het gegeven systeem, moet het systeem controleerbaar zijn",
          },
          {
            nr: 1,
            answer:
              "Om te zien wat er in het systeem onder observatie gebeurt, moet het systeem moet waarneembaar zijn",
          },
        ],
      },
      {
        uuid: "6051d035-fb2a-4da8-a511-eabddb131c5e",
        question: "Welke drie lagen zijn aanwezig in de testpiramide?",
        correctAnswerNr: 0,
        substantiation:
          "Ui moeilijker te testen en kost meer tijd, API wat makkelijker te testen en gaat sneller dan Ui testen, unit testen gaan het snelst en zijn het makkelijkst. Van unit testen wil je het meeste hebben",
        answers: [
          {
            nr: 0,
            answer: "Ui - API - Unit",
          },
          {
            nr: 1,
            answer: "Ui - Keten - Unit",
          },
          {
            nr: 3,
            answer: "Antwoord 1 en 2 zijn goed",
          },
        ],
      },
    ],
  },
  {
    uuid: "ceb7fcae-ded9-4cdf-bf64-223be7cde48b",
    name: "Toets 3",
    questions: [
      {
        uuid: "cc8588bc-2bc1-4e82-a26a-c33e40ee1340",
        question: "Agile is:",
        correctAnswerNr: 0,
        substantiation:
          "",
        answers: [
          {
            nr: 0,
            answer: "Een evolutie",
          },
          {
            nr: 1,
            answer: "Een revolutie",
          },
        ],
      },
      {
        uuid: "9e111100-e3a8-475c-8043-a8daa365911c",
        question: "In welke gevallen kun je het beste integratietesten?",
        correctAnswerNr: 4,
        substantiation: "Een integratietest voer je uit op een API. Integratietesten zijn de middelste laag in de test pyramide.",
        answers: [
          {
            nr: 0,
            answer: "Als er geen concreet antwoord is",
          },
          {
            nr: 1,
            answer: "Als het heel omslachtig wordt om een unit test te schrijven",
          },
          {
            nr: 2,
            answer: "Als je iets wilt testen wat niet te mocken valt",
          },
          {
            nr: 3,
            answer: "Antwoord 1"
          },
          {
            nr: 4,
            answer: "Antwoord 1, 2 en 3"
          }
        ],
      },
      {
        uuid: "6828eeee-e381-4d0e-baca-616f77796444",
        question: "Unit testen kun je goed gebruiken om:",
        correctAnswerNr: 0,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "Grenswaarde analyse toe te passen - Equivalentieklassen te testen - State transition testing toe te passen",
          },
          {
            nr: 1,
            answer: "Procescyclus testen toe te passen",
          },
          {
            nr: 2,
            answer: "De gehele flow in de API te testen",
          }
        ],
      },
      {
        uuid: "f61382d5-77f6-403a-ae8a-b5dba60d728c",
        question: "Wat betekent function coverage?",
        correctAnswerNr: 0,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "Hoeveel functies zijn aangeroepen",
          },
          {
            nr: 1,
            answer: "Hoeveel mogelijkheden in een functie met meerdere inputs is behandeld",
          },
        ],
      },
      {
        uuid: "fbeeb146-17fd-45ad-807d-90ffe2320cbb",
        question: "Wat betekent statement coverage?",
        correctAnswerNr: 0,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "Is elke statement behandeld?",
          },
          {
            nr: 1,
            answer: "Hoeveel mogelijkheden zijn behandeld in het statement",
          },
        ],
      },
      {
        uuid: "0974bbb7-4752-42a8-8669-069da4fac803",
        question: "Wat betekent branch coverage?",
        correctAnswerNr: 1,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "Is elk knooppunt onder meerdere API's behandeld?",
          },
          {
            nr: 1,
            answer: "Is elk beslispunt behandeld in de code",
          },
        ],
      },
      {
        uuid: "780c1a5f-ac9a-4674-ae8a-634a6b5bebb3",
        question: "Wat betekent line coverage?",
        correctAnswerNr: 0,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "Het aantal uitgevoerde regels code gedeeld door de totale hoeveelheid regels code",
          },
          {
            nr: 1,
            answer: "Het aantal uitgevoerde regels code",
          },
        ],
      },
      {
        uuid: "11529ddb-e497-4cf0-9940-9b63cd6e0a57",
        question: "In welke gevallen kun je het besten mocken of stubben?",
        correctAnswerNr: 1,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "Als je wilt dat heel de flow wordt getest - Bij database verbindingen - Bij trage klasses"
          },
          {
            nr: 1,
            answer: "Bij database verbindingen - Bij het gebruik van web services - Trage klasses - Klassen met bijwerkingen - Klassen met willekeurig gedrag",
          },
        ],
      },
      {
        uuid: "047c6773-a77f-4401-b511-32d2393be0a5",
        question: "Wat zijn de overeenkomsten van TPI Next en TMMI?",
        correctAnswerNr: 0,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "Beide zijn business driven - De kern lijkt veel op elkaar - Allebij zijn staged - Werken allebij met niveau's"
          },
          {
            nr: 1,
            answer: "TPI Next en TMMI zijn door hetzelfde bedrijf ontwikkelend - Beide zijn business driven",
          },
        ],
      },
      {
        uuid: "23492875-80d2-4316-8c0c-fb8465a1f1e8",
        question: "Wat zijn de verschillen tussen TPI Next en TMMI?",
        correctAnswerNr: 1,
        substantiation: "",
        answers: [
          {
            nr: 0,
            answer: "TMMI en TPI Next zijn niet door hetzelfde bedrijf ontwikkeld - TPI Next is moeilijk om toe te passen, hierdoor is het beter om het door een bedrijf te laten uitvoeren - Bij TPI Next moet je alles in level 1 behaald hebben om door te gaan"
          },
          {
            nr: 1,
            answer: "TMMI 85 % naar volgende level, TPI Next je moet alles behaald hebben - TMMI 1 level meer TPI Next 1 level minder - TMMI vereist meer een opleiding, TPI Next snel toepasbaar - TMMI gratis te verkrijgen op de site, TPI Next boek vereist"
          },
        ],
      },
    ],
  },
];

export function getQuizzes() {
  return quizzes;
}

export function getQuizByUuid(uuid) {
  return quizzes.filter((qz) => qz.uuid === uuid)[0];
}
