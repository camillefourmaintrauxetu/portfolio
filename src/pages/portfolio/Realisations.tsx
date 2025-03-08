import { useState } from "react";
import { Realisation } from "./Realisation";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "./Data";

// Données des réalisations
const realisationsData = portfolioData;

// Extraire tous les tags uniques
const allTags = Array.from(new Set(realisationsData.flatMap((r) => r.tags)));

const Realisations = () => {
  const [orderAsc, setOrderAsc] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Fonction de tri
  const sortedRealisations = [...realisationsData].sort((a, b) =>
    //@ts-ignore
    orderAsc ? b.date - a.date : a.date - b.date
  );

  // Fonction de filtrage
  const filteredRealisations = sortedRealisations.filter((r) => {
    const matchesTag = selectedTag ? r.tags.includes(selectedTag) : true;
    const matchesSearch = searchQuery
      ? r.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesDate =
      (!startDate || r.date >= new Date(startDate)) &&
      (!endDate || r.date <= new Date(endDate));

    return matchesTag && matchesSearch && matchesDate;
  });

  return (
    <div className="container">
      <h2>Réalisations</h2>

      {/* Barre de recherche */}
      <div className="searchbar">
      <i className="fa-solid fa-magnifying-glass"> </i>
      <input
        type="text"
        className="searchInput"
        placeholder="Rechercher une réalisation..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>

      {/* Filtres par date */}
      <div className="date-filters next-to-each-other">
        <label className="protected">Du :</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label className="protected">Au :</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Boutons de tri */}
      <button onClick={() => setOrderAsc(!orderAsc)}>
        Trier par date : {orderAsc ? "Du plus ancien au plus récent" : "Du plus récent au plus ancien"}
      </button>

      {/* Filtres par tags */}
      <div className="tags-container">
        <button onClick={() => setSelectedTag(null)} className={selectedTag === null ? "active" : ""}>
          Tous
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? "active" : ""}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Affichage des réalisations filtrées avec animation */}
      <AnimatePresence>
        {filteredRealisations.map(({ id, title, content, tags }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Realisation idRealisation={id} title={title}>
              {content}
              <p>Tags : {tags.join(", ")}</p>
            </Realisation>
          </motion.div>
        ))}
      </AnimatePresence>

      {filteredRealisations.length === 0 && <p>Aucune réalisation ne correspond aux critères.</p>}
    </div>
  );
};

export default Realisations;




// import { Link } from "react-router-dom";
// import { Realisation } from "./Realisation";

// const Realisations = () => {
//   return (
//     <div className="container">
//       <h2>Réalisations</h2>
      
//       <Realisation idRealisation="stage2024portfolio" title="Stage intégrateur SOA webMethods avril/juin 2024 chez E-Mothep">
//         <p>Voir mes réalisations durant le <Link to="/cursus#stage2024container">stage</Link>.</p>
//       </Realisation>
      
//       <Realisation idRealisation="sae509" title="1. Saé 5.09 : WEB BACK">
//         <h4>Le projet</h4>
//         <p>
//           Développement d'un site internet de gestion de rendez-vous...
//         </p>
//         <img src="/img/portfolio/saeProfile.png" alt="placeholder" />
//       </Realisation>
      
//       <Realisation idRealisation="sae501" title="2. Saé 5.01 : Emulateur RiscV">
//         <h4>Introduction à Rust</h4>
//         <p>
//           Développement d’un émulateur basé sur un processeur RISC-V...
//         </p>
//         <img src="/img/portfolio/riscV_encodage.png" alt="riscV_encodage" />
//       </Realisation>
      
//       <Realisation idRealisation="sae402" title="3. SAÉ 4.A.02.2 : Développement d'une application complexe">
//         <h4>Idées de gameplay</h4>
//         <p>
//           Conception et développement d’un jeu en respectant un cahier des charges strict...
//         </p>
//         <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
//       </Realisation>
      
//       <Realisation idRealisation="sae401" title="4. SAÉ 4.A.02.1 : Développement d'un site web REST">
//         <h4>Structuration</h4>
//         <p>
//           Création d'un site web respectant l’architecture REST...
//         </p>
//         <img src="/img/portfolio/siteWebRestRequests.png" alt="requetesRest" />
//       </Realisation>
      
//       <Realisation idRealisation="sae302" title="5. Saé 3.02 : Création d'un jeu avec JavaFX">
//         <h4>Concevoir MonsterHunt</h4>
//         <p>
//           Développement d’un jeu en JavaFX basé sur un gameplay défini...
//         </p>
//         <img src="/img/portfolio/monsterhunt.png" alt="capture du jeu" />
//       </Realisation>
      
//       <Realisation idRealisation="pagil" title="6. Projet Agile : Jeu Terminal avec SCRUM">
//         <h4>Développement d'un jeu en mode console</h4>
//         <p>
//           Création d’un jeu sous méthodologie agile SCRUM...
//         </p>
//         <img src="/img/portfolio/dino.png" alt="photo dino" />
//       </Realisation>
      
//       <Realisation idRealisation="sae213" title="7. Saé 2.13 : Escape Game">
//         <h4>Développement d'un escape game</h4>
//         <p>
//           Travail en équipe et utilisation d’outils collaboratifs...
//         </p>
//         <img src="/img/portfolio/trello.png" alt="photo trello" />
//       </Realisation>
      
//       <Realisation idRealisation="sae207" title="8. Saé 2.07 : Création d'une Base de Données">
//         <h4>Volume de données, création d’une base de données</h4>
//         <p>
//           Extraction et ventilation de données volumineuses...
//         </p>
//         <img src="/img/portfolio/donnes.png" alt="photo fichier de donnees" />
//       </Realisation>

//       <Realisation idRealisation="sae202" title="9. Saé 2.02 Création d'une Application d'Échanges Scolaires en Java et JavaFX">
//         <h4>Développement d’une application interactive en java</h4>
//         <p>
//         L'application consistait à permettre des échanges scolaires entre pays. Ainsi, nous devions y inclure une base de données d'étudiants en fonction de pays, puis calculer les affinités en fonction de certains paramètres pour choisir les binômes d'étudiants les plus compatibles, grâce à des algorithmes de graphes, notamment Dijkstra.
//         </p>
//         <img src="/img/portfolio/sae_IHM_code.png" alt="photo du code"/>
//       </Realisation>

//       <Realisation idRealisation="sae105" title="10. Saés 1.05/1.6 : Conception et développement d'un site web pour présenter une entreprise">
//         <h4>Utilisation de HTML et de CSS pour la création de la structure et du design</h4>
//         <p>
//         Ce projet consistait à analyser les besoins d’un entreprise voulant créer une plateforme en ligne pour mettre en place du covoiturage entre leurs employés pour répondre à des problèmes de trafics et de pollutions. A partir de cette analyse, il fallait concevoir une maquette puis leur créer un site répondant à ces besoins.
//         </p>
//         <img src="/img/portfolio/siteWeb.png" alt="photo site web"/>
//       </Realisation>

//       <Realisation idRealisation="sae103" title="11. Saé 1.03/2.03 : Installation de service réseau">
//         <h4>Installation d'un poste de travail</h4>
//         <p>
//         L’objectif principal de la saé 1.03 était de nous introduire à la configuration réseau, celui de la saé 2.03 était de nous introduire à la configuration d’un réseau pour une entreprise ainsi qu’à nous apprendre à utiliser Markdom ou Ascii Doctor pour rédiger des rapports et de la documentation.
//         </p>
//         <img src="/img/portfolio/reseau.png" alt="photo machine virtuelle"/>
//       </Realisation>
//     </div>
//   );
// };

// export default Realisations;