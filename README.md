# DFK_AZ Repository for PS6
# PolyQuiz 
# 2020-2021


#### Bienvenue sur le Projet PS6 de l'équipe DFK_AZ

## Description

PolyQuiz est un site web sur lequel on peut créer des quiz, des thèmes, des utilisateurs et les gérer, ainsi que jouer des quiz. 

PolyQuiz s'adresse aux personnes âgées et aux patients souffrant de problème moteur et présente donc des fonctionnalités et outils permettant d'adapter le site web à ces personnes. Ce site web s'adresse également au personnel soignant qui y aura accès et pourra paramétrer les profils des utilisateurs avec leurs préférences de jeu, il pourra également créer des quiz et des thèmes. 

## Installation
### Pré-requis pour l'installation de l'application 

Pour pouvoir manipuler l'application il y a quelques prérequis listés ci-dessous : 
* Installer :

 * [Windows NodeJs Installer](https://nodejs.org/en/download/) (Pour les **versions Windows**)

* Installer l'interface de lignes de commandes Angular (installer Angular) avec les lignes suivantes :
```bash
npm install -g @angular/cli
```

### Installation de l'application

Tout d'abord pour accéder à l'application, il faut l'installer en suivant les étapes suivantes : 
* Se positionner dans le répertoire où l'on souhaite créer le dossier contenant l'application avec une **invite de commande (cmd)**
* Cloner le répertoire à l'aide des commandes suivantes :
```bash
git clone https://github.com/2019-2020-ps6/2020-2021-ps6-dfk_az.git
```

### Installation des dépendances de l'application
Pour configurer les dépendances du projet et donc le rendre fonctionnel, il faut installer certaines choses, pour cela on va suivre les étapes suivantes : 
- Ouvrir une **invite de commandes** dans laquelle on se positionnera à la racine du projet tout juste cloné :
```bash
cd 2020-2021-ps6-dfk_az\back-end
```
Ensuite, on lance l'installation avec la commande suivante :
```bash
npm install
```
- On répète l'opération mais cette fois pour le dossier **front-end** dans une autre **invite de commandes**
```bash
cd 2020-2021-ps6-dfk_az\front-end
```
Ensuite, on lance l'installation avec la commande suivante :
```bash
npm install
```

## Lancement de l'application
Une fois le projet configuré comme il faut, il ne nous reste plus qu'à le lancer, pour cela, nous allons avoir besoin 
de 2 **invites de commande** ouvertes simultanément, pour cela on se repositionne 
dans le répertoire du projet et on fait les commandes suivantes : 
- Invite de commandes n°1 :
 ```bash
 cd 2020-2021-ps6-dfk_az\back-end
 ```

```bash
npm start
```

- Invite de commandes n°2 : 
```bash
cd 2020-2021-ps6-dfk_az\front-end
```

```bash
ng serve --open
```

Une fois la commande **ng serve --open** lancée, le site devrait s'ouvrir automatiquement
sur le navigateur. 
S'il ne s'ouvre pas ou que vous désirez y accéder par vous même, vous pouvez saisir
l'adresse suivante dans votre navigateur : ``` http://localhost:4200```


## Auteurs
- [Nabil Abbar](https://github.com/ABBARNABIL)
- [Ali Haitam](https://github.com/alihaitam)
- [Souhail Lebbar](https://github.com/souhaiLebbar)
- [Abdellah Naji](https://github.com/abdellah07)


# projet-angu
