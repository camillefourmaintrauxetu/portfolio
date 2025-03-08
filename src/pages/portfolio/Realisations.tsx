import { useState } from "react";
import { Realisation } from "./Realisation";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "./Data";
import { transformSaeID } from "../../Utils";

// Données des réalisations
const realisationsData = portfolioData;

// Extraire tous les tags uniques
const allTags = Array.from(new Set(realisationsData.flatMap((r) => r.tags)));

const Realisations = () => {
  const [orderAsc, setOrderAsc] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string>("");
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
    //@ts-ignore
    const matchesTag = selectedTag ? r.tags.includes(selectedTag) : true;
    const matchesSearch = searchQuery
      ? r.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesDate =
      (!startDate || r.date >= new Date(startDate)) &&
      (!endDate || r.dateEnd <= new Date(endDate));

    return matchesTag && matchesSearch && matchesDate;
  });

  return (
    <>
      <div className="container">
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
          Trier par date :{" "}
          {orderAsc
            ? "Du plus ancien au plus récent"
            : "Du plus récent au plus ancien"}
        </button>

        {/* Filtres par tags */}
        <div className="tags-container">
          <button
            onClick={() => setSelectedTag("")}
            className={selectedTag === "" ? "active" : ""}
          >
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
      </div>
      <div className="container">
        <h2>Réalisations</h2>
        <p>{filteredRealisations.length} résultat(s) trouvé(s)</p>
        {/* Affichage des réalisations filtrées avec animation */}
        <AnimatePresence>
          {filteredRealisations.map(
            ({ id, title, date, dateEnd, content, tags }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Realisation
                  idRealisation={id}
                  title={`${index + 1}. ${transformSaeID(id)} ${title}`}
                  tags={tags}
                  date={date}
                  dateEnd={dateEnd}
                  current={selectedTag}
                >
                  {content}
                </Realisation>
              </motion.div>
            )
          )}
        </AnimatePresence>

        {filteredRealisations.length === 0 && (
          <p>Aucune réalisation ne correspond aux critères.</p>
        )}
      </div>
    </>
  );
};

export default Realisations;
