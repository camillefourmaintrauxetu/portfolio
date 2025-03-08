import { Link } from "react-router-dom";
export default [
    {
      id: "stage2024portfolio",
      title: "Stage intégrateur SOA webMethods avril/juin 2024 chez E-Mothep",
      date: new Date(2024, 3),
      tags: ["Stage", "Back-end", "Intégration" ,"BDD"],
      content: <p>Voir mes réalisations durant le <Link to="/cursus#stage2024container">stage</Link>.</p>,
    },
    {
      id: "sae509",
      title: "1. Saé 5.09 : WEB BACK",
      date: new Date(2024, 2),
      tags: ["Web", "Back-end", "API"],
      content: (
        <>
          <ul>
            <li><h4>Le projet</h4></li>
            <p>
                A la manière de prendreunrendezvous, de Doctolib ou de nombreux sites de prise de rendez-vous mis
                en place durant la crise COVID-19, l’objectif de ce projet consiste à réaliser un site internet de gestion de
                rendez-vous multi-utilisateurs. Le site permet d’une part de montrer aux utilisateurs les créneaux libres,
                d’autre part de permettre aux utilisateurs de saisir et gérer leurs rendez-vous, et évidemment de n’autoriser
                des rendez-vous que s’ils respectent les contraintes souhaitées.
                Le site s'appuie donc sur de nombreux paramètres permettant l’expression de
                contraintes afin de pouvoir être adapté à toutes les situations. Par exemple le planning de réservation des
                créneaux de piscine (avec la contrainte “pas plus de 30 personnes par heure”) ou le planning de réservation
                de créneaux chez le médecin (avec la contrainte “pas plus d’1 personne toutes les 15mn”).
            </p>
            <img src="/img/portfolio/saeProfile.png" alt="placeholder"/>
            <li><h4>Spring Framework</h4></li>
            <p>
                Spring est un framework open source pour construire et définir l'infrastructure d'une application Java, dont il facilite le développement et les tests.
                Spring Boot est un framework Java open source utilisé pour programmer des applications Spring autonomes de qualité production avec un ensemble de bibliothèques qui facilitent le démarrage et la gestion des projets.
                Grâce a ce projet, nous avons appris à utiliser le framework java back-end Spring, ainsi que Spring Security.
                Spring Security est un framework Java/Java EE qui fournit des fonctionnalités d'authentification,
                d'autorisation et d'autres fonctionnalités de sécurité pour les applications d'entreprise.
                Notre projet ne contenat que deux rôle : User et Admin. Un admin peut faire tout ce qu'un utilisateur connecté (User) peut faire,
                mais aussi accéder et modifier les rendez-vous des autres utilisateurs.
            </p>
            <img src="/img/portfolio/saeCalendrier.png" alt="placeholder"/>
            <h4>Compétences et savoir-faire acquis</h4>
            <ul>
                <li>Framework Spring</li>
                <li>JPA</li>
                <li>Spring Security</li>
                <li>Lombok</li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      id: "sae501",
      title: "2. Saé 5.01 : Emulateur RiscV",
      date: new Date(2024, 0),
      tags: ["Systèmes embarqués", "C", "Architecture processeur"],
      content: (
        <>
          <h4>Introduction à Rust</h4>
          <p>Développement d’un émulateur basé sur un processeur RISC-V...</p>
          <img src="/img/portfolio/riscV_encodage.png" alt="riscV_encodage" />
        </>
      ),
    },
    {
      id: "sae402",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "sae401",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "sae302",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "pagil1",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "sae213",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "sae207",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "sae202",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "sae105",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
    {
      id: "sae103",
      title: "3. SAÉ 4.A.02.2 : Développement d'une application complexe",
      date: new Date(2023, 8),
      tags: ["Jeu vidéo", "JS"],
      content: (
        <>
          <h4>Idées de gameplay</h4>
          <p>Conception et développement d’un jeu en respectant un cahier des charges strict...</p>
          <img src="/img/portfolio/versionBasique.gif" alt="capture du jeu" />
        </>
      ),
    },
  ];