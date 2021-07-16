const questions = {
    verite:[
        {question: "Dans ce groupe, qui amènerais-tu avec toi sur une île déserte ?", point: 1},
        {question : "Raconte la plus grande honte que tu as vécue ?", point: 1},
        {question : "Quel est le rêve le plus étrange que tu aies fait ?", point: 1},
        {question : "Quel est ton plus grand secret ?", point: 1},
        {question : "Si aujourd’hui était le dernier jour de ta vie, que ferais-tu ?", point: 1},
        {question : "De 0 à 10. Quelle note donnerais-tu (choisir quelqu'un du groupe) en beauté, sympathie ou intelligence ?", point: 1},
        {question : "De 0 à 10. Quelle note te donnerais-tu à toi-même en beauté, sympathie ou intelligence ?", point: 1},
        {question : "Quel est le pire cadeau que tu aies jamais reçu ?", point: 1},
        {question : "Quel est le meilleur cadeau qu'on t'ait jamais fait ?", point: 1},
        {question : "Si c'était la fin du monde et que tu ne pouvais sauver qu'une seule personne, qui serait-elle ?", point: 1},
        {question : "As-tu déjà nagé nu dans l'eau ?", point: 1},
        {question : "Est-ce que quelqu'un t'a déjà trahi ?", point: 1},
        {question : "Qu'est-ce qui manquera jamais dans ton frigo ?", point: 1},
        {question : "Est-ce que tu pourrais coucher avec quelqu'un pour beaucoup d'argent ?", point: 1},
        {question : "As-tu déjà envoyé une photo coquine par portable ?", point: 1},
        {question : " Si oui, combien ?", point: 1},
        {question : "As-tu déjà embrassé plusieurs personnes le même jour ?", point: 1},
        {question : "De quoi es-tu le/la plus fier.e ?", point: 1},
        {question : "Te crois-tu attirant.e ?", point: 1},
        {question : "Si tu pouvais ramener une personne décédée à la vie, qui serait-elle ?", point: 1},
        {question : "Si tu pouvais voyager dans le temps, à quelle époque irais-tu ?", point: 1},
        {question : "As-tu menti en jouant à ce jeu ?", point: 1},
        {question : "Quelle est ta technique de séduction ?", point: 1},
        {question : "Quel le plus grand mensonge que tu aies raconté ?", point: 1},
        {question : "Quelle est la pire connerie que t'aies jamais faite ?", point: 1},
        {question : "Quel est ton plus gros regret ?", point: 1},
        {question : "Quel est ton plus gros remords ?", point: 1},
        {question : "Ton plus gros complexe ?", point: 1},
        {question : "T'as déjà été bourré.e ?", point: 1},
        {question : " Si oui, raconte-nous ce qu'il s'est passé pendant ta soirée la plus alcoolisée.Tas déjà fumé une clope ?", point: 1},
        {question : "T'as déjà fait une nuit blanche ?", point: 1},
        {question : "C'est qui ton meilleur ami ?", point: 1},
        {question : "C'est qui ta meilleure amie ?", point: 1},
        {question : "Raconte-nous un secret de ton enfance ? ", point: 1},
        {question : "T'as déjà commis un délit ?", point: 1},
        {question : "T'as déjà été arrêté par la police ?", point: 1},
        {question : "Quel est le pire truc que t'aies jamais fait ?", point: 1},
        {question : "Ta destination rêvée pour partir en vacances ?", point: 1},
        {question : "Quel est le membre préféré de ta famille ?", point: 1},
        {question : "Quelle est la célébrité que tu trouves le plus beau ?", point: 1},
        {question : "Quelle est la célébrité que tu trouves la plus belle ?", point: 1},
        {question : "T'as déjà pété dans un ascenseur ?", point: 1},
        {question : "Avec quelle personne célèbre tu coucherais ?", point: 1},
        {question : "T'as aimé la fin de GoT (Game of Thrones) ?", point: 1},
        {question : "T'es déjà parti.e sans payer l'addition ?", point: 1},
        {question : "C'est quoi ton plat préféré ?", point: 1},
        {question : "T'as déjà entendu tes parents en train de le faire ?", point: 1},
        {question : "Tu ronfles ?", point: 1},
        {question : "Tu t'es déjà fait pipi dessus en dormant ?", point: 1},
        {question : "Tu crois en Dieu ?", point: 1},
        {question : "Tu crois au destin ?", point: 1},
        {question : "Est-ce que t'as une manie bizarre ?", point: 1},
        {question : "Tu ferais Koh Lanta ?", point: 1},
        {question : "T'as un TOC ?", point: 1},
        {question : "Voudrais-tu avoir des relations sexuelles avec une personne de ce groupe ?", point: 2},
        {question : "As-tu déjà eu des relations sexuelles avec une personne de ce groupe ?", point: 2},
        {question : "Quelle est la personne la plus sexy ici ?", point: 2},
        {question : " As-tu déjà pensé à tromper un petit copain/petite copine ?", point: 2},
        {question : "Quelle est ta position sexuelle préférée ?", point: 2},
        {question : "Qui, parmi les personnes de ce groupe, a le plus beau corps ?", point: 2},
        {question : "As-tu déjà eu des relations sexuelles avec un inconnu/e ?", point: 2},
        {question : "As-tu déjà eu des relations sexuelles dans la rue ?", point: 2},
        {question : "As-tu déjà été surpris pendant des relations sexuelles ?", point: 2},
        {question : "As-tu déjà eu des relations sexuelles avec une personne de votre sexe ?", point: 2},
        {question : "Avez-vous déjà mis en doute votre orientation sexuelle ?", point: 2},
        {question : "As-tu déjà été avec quelqu'un rencontré en ligne ?", point: 2},
        {question : "T'as déjà fait un trio ?", point: 2},
        {question : "Quelle a été ta pire expérience sexuelle ?", point: 2},
        {question : "Quelle est ta plus grosse honte sexuelle ?", point: 2},
        {question : "T'as déjà eu une panne ?", point: 2},
        {question : "Selon toi, le plus important, c'est le sexe ou l'amour ?", point: 2},
        {question : "À quel âge t'as fait ta première fois ?", point: 2},
        {question : "Quelle est ta position sexuelle préférée ?", point: 2},
        {question : "Te considères-tu comme un bon coup ?", point: 2},
        {question : "Combien d'aventures d'un soir t'as déjà eu ?", point: 2},
        {question : "Quel est l'endroit le plus fou où tu as fait des trucs ?", point: 2},
        {question : "T'as un fétiche ?", point: 2},
        {question : " Si oui, lequel ?", point: 2},
        {question : "T'aimes les pieds ?", point: 2},
        {question : "Si tu devais te faire tatouer sur le pubis, tu ferais quoi ?", point: 2},
        {question : "Avec combien de personnes t'as déjà couché ?", point: 2},
        {question : "T'as déjà couché avec un.e ami.e ?", point: 2},
        {question : "T'as déjà fait du sexe via webcam avec ton/ta petit.e ami.e ?", point: 2},
        {question : "T'as déjà fait du sexe via webcam avec un inconnu ?", point: 2},
        {question : "Tu t'es déjà masturbé en ligne ?", point: 2},
        {question : "T'es circoncis ?", point: 2},
        {question : "Tu préfères les pénis circoncis ou non ?", point: 2},
        {question : "T'as déjà eu une maladie ou infection sexuellement transmissible (IST) ?", point: 2},
        {question : "T'as déjà eu des rapports non protégés ?", point: 2},
        {question : "Tu cries quand tu jouis ?", point: 2},
        {question : "Tu aimes parler quand tu fais l'amour ?", point: 2},
        {question : "Tu es adepte du bondage ?", point: 2},
        {question : "Tu es sado, maso ou les deux ?", point: 2},
        {question : "Qu'est-ce que tu préfères dans les préliminaires ?", point: 2},
        {question : "Tu as déjà simulé un orgasme ?", point: 2},
        {question : "Quel est ton fantasme sexuel ?", point: 2},
        {question : "Tu es plutôt fesses ou seins ?", point: 2},
        {question : "Tu t'es déjà masturbé dans un endroit public ?", point: 2},
        {question : "T'as déjà fantasmé sur quelqu'un de ta famille ?", point: 2},
        {question : "Y'a des trucs bizarres qui t'excitent ?", point: 2},
        {question : "Qu'est-ce qui t'excite le plus ?", point: 2},
        {question : "Quelqu'un t'a déjà surpris en train de faire des trucs ?", point: 2},
        {question : "Tu as déjà vu des gens en train de faire des trucs ?", point: 2},
        {question : "Tu as déjà fait appel aux services d'un.e escorte ?", point: 2},
        {question : "Avec quelle célébrité aimerais-tu passer une nuit endiablée ?", point: 2}
    ],
    action:[
        {question : "Servir les boissons de tout le monde pendant toute la soirée" , point: 3},
        {question : "Faire le plus de pompes possible pendant 1 minute ?", point: 3},
        {question : "Ne pas regarder son téléphone pendant 2 heures ?", point: 3},
        {question : "Modifier le statut de sa relation sur Facebook ?", point: 3},
        {question : "Poster une photo moche sur Instagram ?", point: 3},
        {question : "Draguer un inconnu ?", point: 3},
        {question : "Imiter une scène de film ?", point: 3},
        {question : "Imiter quelqu'un dans le groupe ?", point: 3},
        {question : "Manger de l'ail cru ?", point: 3},
        {question : "Manger une cuillerée de cannelle en poudre ?", point: 3},
        {question : "Appeler votre mère pour lui dire que vous l'aimez ?", point: 3},
        {question : "Fermer les yeux et essayer de reconnaître quelqu'un à sa simple odeur. ?", point: 3},
        {question : "Embrassez la personne que vous trouvez le/la plus beau/belle ?", point: 3},
        {question : "Se mettre en sous-vêtements ?", point: 3},
        {question : "Parler en verlan toute la soirée ?", point: 3},
        {question : "Parler avec un accent, de votre choix, toute la soirée ?", point: 3},
        {question : "Ne pas fumer de toute la soirée ?", point: 3},
        {question : "Faire des compliments pendant toute la soirée ?", point: 3},
        {question : "Avant de jouer, vous devez vous lever et faire un tour sur vous-même ?", point: 3},
        {question : "Ne plus pouvoir dire ni oui ni non toute la soirée ?", point: 3},
        {question : "Se mettre des chaussettes sur vos mains ?", point: 3},
        {question : "Garder ses lunettes à l'envers ?", point: 3},
        {question : "Faire l'arbre droit ?", point: 3},
        {question : "Mettre j'ai pété en statut Facebook ?", point: 3},
        {question : "Envoyez un snap d'une grimace à tous vos contacts ?", point: 3},
        {question : "Ne plus pouvoir utiliser le mot 'boire' toute la soirée ?", point: 3},
        {question : "Inverser votre main dominante, si vous êtes droitier, faites tout avec la main gauche et inversement ?", point: 3},
        {question : "Réciter une fable de De La Fontaine ?", point: 3},
        {question : "Parler en anglais toute la soirée ?", point: 3},
        {question : "Faire un cadeau à une autre personne du groupe ?", point: 3},
        {question : "Ponctuer toutes vos phrases d'un gros mot ?", point: 3},
        {question : "Se laisser maquiller ?", point: 3},
        {question : "Faire une déclaration ?", point: 3},
        {question : "Enlever votre caleçon ?", point: 3},
        {question : "Enlever votre soutien-gorge ?", point: 3},
        {question : " Ponctuer votre phrase d'un 'Dab' ?", point: 3},
        {question : "Essayer de convaincre un membre du groupe que la dernière saison de GoT est bien ?", point: 3},
        {question : "Faire un strip-tease sur les 2be3 ou les Backstreet Boys ?", point: 3},
        {question : "Mettre ses chaussures sur les mains ?", point: 3},
        {question : "Faire une danse honteuse sur les L5 ou les One Direction ?", point: 3},
        {question : "Se mouiller le pantalon ?", point: 3},
        {question : "Faire le ménage tout au long de la soirée ?", point: 3},
        {question : "Courir tout.e nu.e dans l'escalier ?", point: 3},
        {question : "Se mettre de la chantilly sur les tétons ?", point: 3},
        {question : "Lécher les pieds d'une personne du groupe ?", point: 3},
        {question : "Montrer une photo où vous êtes honteux.se ?", point: 3},
        {question : "Twerker ?", point: 3},
        {question : "Faire un bisou dans le cou à un.e membre du groupe ?", point: 3},
        {question : "Lécher le cou d'un.e personne du groupe ?", point: 3},
    ]
}

export default questions