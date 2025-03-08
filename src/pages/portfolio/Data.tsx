import { Link } from "react-router-dom";
import Sae509 from "./projects/Sae509";
import Sae501 from "./projects/Sae501";
import Sae402 from "./projects/Sae402";
import Sae302 from "./projects/Sae302";
import Sae401 from "./projects/Sae401";
import Pagil1 from "./projects/Pagil1";
import Sae213 from "./projects/Sae213";
import Sae207 from "./projects/Sae207";
import Sae202 from "./projects/Sae202";
import Sae105 from "./projects/Sae105";
import Sae103 from "./projects/Sae103";
import Pagil2 from "./projects/Pagil2";

const Tags = Object.freeze({
  SCRUM: "Scrum",
  WEB: "Web",
  REACT: "React",
  FRONTEND: "Front-End",
  BACKEND: "Back-End",
  BDD: "BDD",
  SPRING: "Spring",
  APIREST: "API-REST",
  STAGE: "Stage",
  INTEGRATION: "Intégration",
  JSP: "JSP",
  SYSTEMES: "Systèmes embarqués",
  C: "C",
  RUST: "Rust",
  PYTHON: "Python",
  JAVA: "Java",
  JSTS: "JS/TS",
  JEUVIDEO: "Jeu-Vidéo",
});

export default [
  {
    id: "pagil2",
    title: "Création d'un BACK-END et d'un FRONT-END pour un site web",
    date: new Date(2025, 2, 3),
    dateEnd: new Date(2025, 2, 7),
    tags: [
      Tags.SCRUM,
      Tags.WEB,
      Tags.FRONTEND,
      Tags.JSTS,
      Tags.REACT,
      Tags.BACKEND,
      Tags.SPRING,
      Tags.APIREST,
      Tags.BDD,
      Tags.JAVA,
    ],
    content: <Pagil2 />,
  },
  {
    id: "stage2025portfolio",
    title: "Stage intégrateur SOA webMethods chez EMothep",
    date: new Date(2025, 2, 10),
    dateEnd: new Date(2025, 5, 27),
    tags: [Tags.STAGE, Tags.BACKEND, Tags.INTEGRATION, Tags.BDD],
    content: (
      <p>
        <Link to="/cursus#experiences">
          Voir mes réalisations durant le stage
        </Link>
        .
      </p>
    ),
  },
  {
    id: "stage2024portfolio",
    title: "Stage intégrateur SOA webMethods chez EMothep",
    date: new Date(2024, 3, 15),
    dateEnd: new Date(2024, 5, 21),
    tags: [Tags.STAGE, Tags.BACKEND, Tags.INTEGRATION, Tags.BDD],
    content: (
      <p>
        <Link to="/cursus#stage2024container">
          Voir mes réalisations durant le stage
        </Link>
        .
      </p>
    ),
  },
  {
    id: "sae509",
    title: "WEB BACK",
    date: new Date(2024, 8, 19),
    dateEnd: new Date(2025, 1, 24),

    tags: [
      Tags.WEB,
      Tags.BACKEND,
      Tags.APIREST,
      Tags.BDD,
      Tags.SPRING,
      Tags.JAVA,
      Tags.FRONTEND,
      Tags.JSP,
    ],
    content: <Sae509 />,
  },
  {
    id: "sae501",
    title: "Emulateur RiscV",
    date: new Date(2024, 8, 17),
    dateEnd: new Date(2025, 1, 9),
    tags: [Tags.SYSTEMES, Tags.C],
    content: <Sae501 />,
  },
  {
    id: "sae402",
    title: "Développement d'une application complexe",
    date: new Date(2024, 1, 19),
    dateEnd: new Date(2024, 2, 22),
    tags: [Tags.JEUVIDEO, Tags.JSTS],
    content: <Sae402 />,
  },
  {
    id: "sae401",
    title: "Développement d'une API REST",
    date: new Date(2024, 1, 5),
    dateEnd: new Date(2024, 2, 18),
    tags: [
      Tags.BACKEND,
      Tags.APIREST,
      Tags.BDD,
      Tags.SPRING,
      Tags.JAVA,
      Tags.JSP,
    ],
    content: <Sae401 />,
  },
  {
    id: "sae302",
    title: "Création d'un jeu avec JavaFX",
    date: new Date(2023, 9, 2),
    dateEnd: new Date(2026, 11, 4),
    tags: [Tags.JEUVIDEO, Tags.JAVA],
    content: <Sae302 />,
  },
  {
    id: "pagil1",
    title: "Création d'un Jeu dans le Terminal avec Méthodologie Agile SCRUM",
    date: new Date(2023, 8, 1),
    dateEnd: new Date(2023, 8, 5),
    tags: [Tags.SCRUM, Tags.JEUVIDEO, Tags.JAVA],
    content: <Pagil1 />,
  },
  {
    id: "sae213",
    title: "Escape Game",
    date: new Date(2023, 3, 24),
    dateEnd: new Date(2023, 5, 19),
    tags: [Tags.SCRUM, Tags.JEUVIDEO],
    content: <Sae213 />,
  },
  {
    id: "sae207",
    title: "Création d'une Base de Données - Ventilation de Données",
    date: new Date(2023, 1, 28),
    dateEnd: new Date(2023, 3, 24),
    tags: [Tags.BDD],
    content: <Sae207 />,
  },
  {
    id: "sae202",
    title: "Création d'une Application d'Échanges Scolaires en Java et JavaFX",
    date: new Date(2023, 0, 30),
    dateEnd: new Date(2023, 2, 31),
    tags: [Tags.JAVA],
    content: <Sae202 />,
  },
  {
    id: "sae105",
    title:
      "Conception et développement d'un site web pour présenter une entreprise",
    date: new Date(2022, 8, 24),
    dateEnd: new Date(2022, 11, 9),
    tags: [Tags.WEB],
    content: <Sae105 />,
  },
  {
    id: "sae103",
    title: "Installation de service réseau",
    date: new Date(2022, 8, 12),
    dateEnd: new Date(2022, 9, 21),
    tags: [Tags.SYSTEMES, Tags.C],
    content: <Sae103 />,
  },
];
