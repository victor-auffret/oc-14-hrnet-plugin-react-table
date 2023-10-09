<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">PLUGIN REACT DATA-TABLE</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#a-propos-du-projet">A propos du projet</a>
      <ul>
        <li><a href="#créé-avec">Créé avec</a></li>
      </ul>
    </li>
    <li>
      <a href="#commencer">Commencer</a>
      <ul>
        <li><a href="#prérequis">Prerequis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#utilisation">Utilisation</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#remerciements">Remerciements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## A propos du projet

[![Data Table][data-table-screenshot]](https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table)

Dans le cadre d'un projet, on m'a demandé de transformer un plugin jquery en plugin react dans le but de pouvoir retirer la dépendance vers jquery.
De plus, on m'a demandé de faire en sorte que le code soit réutilisable alors je rend ce plugin disponible pour tous. 

Avantages du plugin:
* Vous avez le même visuel que dans jquery mais avec un framework moderne
* Vous pouvez ajouter ce plugin en dépendance de votre projet et l'utiliser comme n'importe quel composant react que vous importez
* Vous avec une documentation en français

Il n'y a cependant pas d'ambition de pousser ce projet plus loin. N'hésitez donc pas à regarder du côté des forks du projet (si il y en a) pour voir si quelqu'un aurait poussé ce projet plus loin.

Vous pouvez consulter le `NOTE_VERSION.md` pour voir ce qui a été fait.

<p align="right">(<a href="#readme-top">haut de page</a>)</p>



### Créé avec 

Cette section parle de dépendances du projet

* [![React][React.js]][React-url]
* [![ViteJS][https://vitejs.dev]][Vitejs-url]

<p align="right">(<a href="#readme-top">haut de page</a>)</p>



<!-- GETTING STARTED -->
## Commencer

Pour utiliser ce plugin vous devez dans un premier temps l'installer en tant que dépendance via npm. 

### Prérequis

Vous devez disposer de nodejs avant d'installer le projet.

[![Node JS][node-js-screenshot]](https://nodejs.org/fr)


### Installation

Un fois nodejs d'installé, vous pouvez utiliser npm pour installer la dépendance.
Voici comment installer via npm (adaptez votre commande si vous utilisez pnpm ou yarn): 
* npm
  ```sh
  npm install --save git+https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table.git#main
  ```

<p align="right">(<a href="#readme-top">haut de page</a>)</p>


<!-- USAGE EXAMPLES -->
## Utilisation

Afin de respecter les fonctionnalités du plugin jquery de base, 
j'ai choisi d'implémenter le strict nécessaire pour faire fonctionner le projet.
Il y a 3 props à passer en paramètre de la data-table, mais seulement 2 obligatoires.

* data : les données brut à afficher sous forme de tableau
* columns : le nom des colones à afficher (parfois on ne veut pas tout les éléments du tableau de donnée)
* nbElemPerPage : le nombre d'élément à afficher par page, par défaut on a 10, 25, 50 et 100.

_Pour plus d'information, vous pouvez regarder le fonctionnement du plugin jquery [Documentation Plugin JQuery DataTables](https://github.com/DataTables/DataTables)_

<p align="right">(<a href="#readme-top">haut de page</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] ajouter les notes de version
- [x] ajouter des exemples d'utilisation dans le readme
- [ ] gérer le build du css pour importer le css plus facilement sans avoir le "node_module" dans le lien.

Si vous voyez des problèmes, consulter les [open issues](https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table/issues).

<p align="right">(<a href="#readme-top">haut de page</a>)</p>


<!-- CONTRIBUTING -->
## Contributions

...

<p align="right">(<a href="#readme-top">haut de page</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">haut de page</a>)</p>


<!-- CONTACT -->
## Contact

<!-- Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com -->

Lien du projet: [https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table](https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table)

<p align="right">(<a href="#readme-top">haut de page</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Remerciements

Même si j'ai codé seul, il y a beaucoup de documentation qui m'a aidé pour réaliser ce projet.

* [Comment faire un bon README](https://github.com/othneildrew/Best-README-Template)
* [GitHub](https://github.com)
* [Comment installer un packet nodejs depuis un repos git plutôt qu npmjs.org](https://linux.how2shout.com/how-to-install-a-npm-package-directly-from-github)

<p align="right">(<a href="#readme-top">haut de page</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/victor-auffret/oc-14-hrnet-plugin-react-table.svg?style=for-the-badge
[contributors-url]: https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/victor-auffret/oc-14-hrnet-plugin-react-table.svg?style=for-the-badge
[forks-url]: https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table/network/members
[stars-shield]: https://img.shields.io/github/stars/victor-auffret/oc-14-hrnet-plugin-react-table.svg?style=for-the-badge
[stars-url]: https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table/stargazers
[issues-shield]: https://img.shields.io/github/issues/victor-auffret/oc-14-hrnet-plugin-react-table.svg?style=for-the-badge
[issues-url]: https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table/issues
[license-shield]: https://img.shields.io/github/license/victor-auffret/oc-14-hrnet-plugin-react-table.svg?style=for-the-badge
[license-url]: https://github.com/victor-auffret/oc-14-hrnet-plugin-react-table/blob/master/LICENSE
[data-table-screenshot]: img/screen1.png
[node-js-screenshot]: img/nodejs.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[ViteJS]: https://vitejs.dev/


# PLUGIN REACT DATA-TABLE

Choix technique : 

- utilisation de typescript 
- utilisation du css de jquery afin de créer une réelle conversion du plugin 
- utilisation de vite pour build 
- utilisation des hooks pour gérer l'état du composant 
- utilisation de classe dynamique pour les flèches de tri d'élément 
- 
