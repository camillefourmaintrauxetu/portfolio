export function formatDate(date: Date) {
  // Extraire le jour, le mois et l'année
  let day = date.getDate();
  let month = date.getMonth() + 1; // Les mois commencent à 0
  let year = date.getFullYear();

  // Ajouter un zéro devant le jour et le mois si nécessaire
  day = day < 10 ? 0 + day : day;
  month = month < 10 ? 0 + month : month;

  // Retourner la date sous le format dd/mm/yyyy
  return `${day}/${month}/${year}`;
}

export function newDate(year: number, month: number, day: number) {
  return new Date(year, month + 1, day);
}

export function transformSaeID(saeID: string) {
  // Vérifie si la chaîne a exactement 6 caractères, commence par "sae" et finit par 3 chiffres
  if (
    saeID.length === 6 &&
    saeID.slice(0, 3) === "sae" &&
    /^\d{3}$/.test(saeID.slice(3))
  ) {
    // Remplace le "e" par "é", ajoute un espace entre "sae" et les chiffres, et ajoute un espace et un ":" à la fin
    return `${saeID.slice(0, 3).replace("e", "é").toUpperCase()} ${saeID.slice(3)} :`;
  }
  // Si les conditions ne sont pas remplies, la fonction ne renvoie rien
  return "";
}

//@ts-ignore
export const TagsList = ({ tags, current }) => {
  return (
    <div className="tags-container">
      {tags.map((tag: string, index: number) => (
        <span key={index} className={`tag ${current == tag ? "active" : ""}`}>
          {tag}
        </span>
      ))}
    </div>
  );
};
