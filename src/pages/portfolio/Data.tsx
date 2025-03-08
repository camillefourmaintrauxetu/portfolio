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
export default [
  {
    id: "stage2024portfolio",
    title: "Stage intégrateur SOA webMethods avril/juin 2024 chez E-Mothep",
    date: new Date(2024, 3),
    tags: ["Stage", "Back-end", "Intégration", "BDD"],
    content: (
      <p>
        Voir mes réalisations durant le{" "}
        <Link to="/cursus#stage2024container">stage</Link>.
      </p>
    ),
  },
  {
    id: "sae509",
    title: "1. Saé 5.09 : WEB BACK",
    date: new Date(2024, 2),
    tags: ["Web", "Back-end", "API"],
    content: <Sae509 />,
  },
  {
    id: "sae501",
    title: "2. Saé 5.01 : Emulateur RiscV",
    date: new Date(2024, 0),
    tags: ["Systèmes embarqués", "C", "Architecture processeur"],
    content: <Sae501 />,
  },
  {
    id: "sae402",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae402 />,
  },
  {
    id: "sae401",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae401 />,
  },
  {
    id: "sae302",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae302 />,
  },
  {
    id: "pagil1",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Pagil1 />,
  },
  {
    id: "sae213",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae213 />,
  },
  {
    id: "sae207",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae207 />,
  },
  {
    id: "sae202",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae202 />,
  },
  {
    id: "sae105",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae105 />,
  },
  {
    id: "sae103",
    title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
    date: new Date(2023, 8),
    tags: ["Jeu vidéo", "JS"],
    content: <Sae103 />,
  },
];
