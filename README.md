# Test technique BALYO - frontend

Ce repo contient la partie frontend du test technique pour Balyo

Il vous est conseille de lancer le backend avant le frontend (pour le proxy vers l'API)

Il contient une app React avec Redux et Material UI, pour installer les dependances, il vous suffit de lancer la commande suivante:

```bash
npm install
```

Pour lancer l'application, il vous suffit de lancer la commande suivante dans le repertoire du projet:
```bash
npm run dev
```

___

Pour la partie frontend, les attentes du test sont:

- Pouvoir supprimer un todo
- Pouvoir modifier le title/description d'un todo
- Pouvoir changer l'etat d'un todo en 'DONE'
- Voir les todos en 'DONE' en dessous des todos en 'PENDING'  
- De la validation au niveau de la creation ou modification d'un todo pour autoriser seulement la creation si le 'title' contient 8 caracteres minimum et la description peut etre vide
- Des tests unitaires ou d'integration utilisant le framework de votre choix

Les attentes sont classes par ordre de priorite, il n'est pas necessaire de tout faire mais en fonction de votre temps, sentez vous libre.

Pensez a noter si vous avez rencontre des problemes et n'hesitez pas a m'envoyer un mail si jamais vous etes sur un point bloquant ou bien vous avez des questions.

Good luck and happy learning