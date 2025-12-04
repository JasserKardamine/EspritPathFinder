# EspritPathFinder

Plateforme d'orientation académique pour aider les étudiants à prendre des décisions éclairées sur leur parcours universitaire à ESPRIT.

##  Équipe de Projet

| Membre | Responsabilité |
|--------|---------------|
| [Trabelsi Sabri] | **Pages**: compare.html, comparison-result.html, quiz1-5.html, results.html, twin.html(intro/podcast/temoi)
| [Nom Membre 2] | [À compléter] |
| [Nom Membre 3] | [À compléter] |
| [Nom Membre 4] | [À compléter] |

##  Instructions d'Exécution

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (inclus avec Node.js)

### Installation

1. Cloner le projet
```bash
git clone https://github.com/JasserKardamine/EspritPathFinder.git
cd EspritPathFinder
```

2. Installer les dépendances
```bash
npm install
```

3. Compiler le CSS Tailwind
```bash
npm run build
```

### Lancement du Projet

Ouvrir `index.html` dans un navigateur web moderne (Chrome, Firefox, Edge).

Pour le développement avec rechargement automatique du CSS :
```bash
npm run watch
```

### Déploiement

Le projet est déployé sur GitHub Pages :
 [https://jasserkardamine.github.io/EspritPathFinder/](https://jasserkardamine.github.io/EspritPathFinder/)

##  Structure du Projet

```
EspritPathFinder/
 index.html              # Page d'accueil
 options.html            # Catalogue des spécialisations
 careers.html            # Opportunités de carrière
 twin.html               # Détail spécialisation TWIN
 quiz1-5.html            # Questionnaire d'orientation (5 étapes)
 results.html            # Résultats du quiz
 compare.html            # Interface de comparaison
 comparison-result.html  # Résultats de comparaison
 monitors.html           # Liste des experts
 questions.html          # Questions étudiants
 sondage.html           # Résultats sondage
 signin.html / signup.html  # Authentification
 images/                 # Assets visuels
 src/
    input.css          # Fichier source Tailwind
    output.css         # CSS compilé
 tailwind.config.js     # Configuration Tailwind
```

##  Technologies Utilisées

- **HTML5** - Structure des pages
- **Tailwind CSS v3.4.18** - Framework CSS utility-first
- **JavaScript** - Interactions dynamiques
- **Poppins** - Police Google Fonts

##  Configuration Tailwind

Le projet utilise des classes personnalisées définies dans `tailwind.config.js` :

- **Couleurs** : `bg-primary`, `text-primary`, `bg-secondary`, `bg-background`, `text-textmuted`, `text-textdark`, `border-borderlight`, `bg-hoverlight`
- **Border Radius** : `rounded-card` (5px)
- **Ombres** : `shadow-card`
- **Police** : `font-poppins`

##  Problèmes Rencontrés et Solutions

### 1. Incompatibilité Tailwind v4
**Problème** : Syntaxe Tailwind v4 incompatible avec la structure du projet.

**Solution** : Downgrade vers Tailwind CSS v3.4.18 avec configuration classique (`tailwind.config.js`).



### 2. Assets SVG Externes
**Problème** : Références à des fichiers SVG externes non inclus dans le projet.

**Solution** : Conversion de tous les SVG en code inline directement dans le HTML pour une meilleure portabilité.



##  Notes de Développement

### Rebuild CSS après Modifications
Après toute modification de `input.css` ou de classes Tailwind dans le HTML :
```bash
npm run build
```

### Mode Développement
Pour le développement actif avec compilation automatique :
```bash
npm run watch
```

### Convention de Nommage
- Classes Tailwind personnalisées : préfixe par type (`bg-`, `text-`, `rounded-`, `shadow-`, `font-`)
- Fichiers HTML : kebab-case (`comparison-result.html`, `all-questions.html`)
- Variables de config : camelCase dans `tailwind.config.js`

