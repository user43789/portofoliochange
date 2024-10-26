<template>
  
<div class="bg-gray-400 pb-6">
    <div class="text-center lg:text-left max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-4 lg:flex lg:items-center lg:justify-between">
        <h3 class="text-4xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            Ready to monitor some websites? <br> 
            <strong class="text-blue-600">Je suis ici.</strong>
        </h3>
        
        <div class="flex">
            <p class="text-blue-500 font-semibold p-3 text-2xl">Tu ne me connais toujours pas ?</p>
            <router-link class="text-2xl bg-red-500 p-3 font-bold rounded-lg hover:bg-gray-800" to="./Erreur">Mon profil</router-link>
        </div>
    </div>
</div>

<div class="w-full mx-auto mt-14 rounded-x">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Première carte -->
        <div class="p-9 border border-gray rounded-xl shadow-xl">
            <h1 class="text-left font-semibold mb-8">Basic</h1>
            <h3 class="text-4xl font-bold">300 € <strong class="text-sm font-normal">/mois</strong></h3>
            <p class="text-gray-700 mt-4">Création d'un site vitrine simple avec jusqu'à 3 pages, parfait pour un portfolio ou une petite entreprise.</p>  
            <button class="mt-5 bg-blue-700 p-3 rounded-lg w-full">Bouton</button>   

            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Design moderne et épuré</p>
            </div>
            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Site responsive (adapté aux mobiles et tablettes)</p>
            </div>
        </div>

        <!-- Deuxième carte -->
        <div class="p-9 border border-gray rounded-xl shadow-xl">
            <h1 class="text-left font-semibold mb-8">Offre Standard</h1>
            <h3 class="text-4xl font-bold">600 € <strong class="text-sm font-normal">/mois</strong></h3>
            <p class="text-gray-700 mt-4">Site de 5 pages personnalisable avec des fonctionnalités supplémentaires pour mieux présenter ton activité.</p>  
            <button class="mt-5 bg-blue-700 p-3 rounded-lg w-full">Bouton</button>   

            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Design personnalisé et optimisation SEO de base</p>
            </div>
            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Formulaire de contact avancé avec validation</p>
            </div>
        </div>

        <!-- Troisième carte -->
        <div class="p-9 border border-gray rounded-xl shadow-xl">
            <h1 class="text-left font-semibold mb-8">Offre Premium</h1>
            <h3 class="text-4xl font-bold">1000 €<strong class="text-sm font-normal">/mois</strong></h3>
            <p class="text-gray-700 mt-4">Site web professionnel sur mesure avec jusqu’à 8 pages, idéal pour des entreprises cherchant un site complet et optimisé.</p>  
            <button class="mt-5 bg-blue-700 p-3 rounded-lg w-full">Bouton</button>   

            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Design sur mesure et optimisation SEO avancée</p>
            </div>
            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Formulaire de contact personnalisé</p>
            </div>
        </div>
 
        <!-- Quatrième carte -->
        <div class="p-9 border border-gray rounded-xl shadow-xl">
            <h1 class="text-left font-semibold mb-8">Offre E-Commerce Basique</h1>
            <h3 class="text-4xl font-bold">1500 €<strong class="text-sm font-normal">/mois</strong></h3>
            <p class="text-gray-700 mt-4">Boutique en ligne simple pour commencer à vendre des produits en ligne avec un catalogue réduit.</p>  
            <button class="mt-5 bg-blue-700 p-3 rounded-lg w-full">Bouton</button>   

            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">10 produits intégrés, paiement sécurisé basique</p>
            </div>
            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Formulaire de commande simple</p>
            </div>
        </div>

        <!-- Cinquième carte -->
        <div class="p-9 border border-gray rounded-xl shadow-xl">
            <h1 class="text-left font-semibold mb-8">Offre E-Commerce Avancé</h1>
            <h3 class="text-4xl font-bold">2500 €<strong class="text-sm font-normal">/mois</strong></h3>
            <p class="text-gray-700 mt-4">Boutique en ligne complète pour gérer un plus grand catalogue de produits et augmenter tes ventes.</p>  
            <button class="mt-5 bg-blue-700 p-3 rounded-lg w-full">Bouton</button>   

            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Gestion de commande + produit intégrée</p>
            </div>
            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Paiement sécurisé, optimisé pour la conversion</p>
            </div>
        </div>

        <!-- Sixième carte -->
        <div class="p-9 border border-gray rounded-xl shadow-xl">
            <h1 class="text-left font-semibold mb-8">Offre Web App Basique</h1>
            <h3 class="text-4xl font-bold">3500 €<strong class="text-sm font-normal">/mois</strong></h3>
            <p class="text-gray-700 mt-4">Développement d’une application web légère pour gérer du contenu interactif ou des utilisateurs, idéale pour des services simples.</p>  
            <button class="mt-5 bg-blue-700 p-3 rounded-lg w-full">Bouton</button>   

            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Gestion des utilisateurs et contenus</p>
            </div>
            <div class="flex mt-8">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/24/verified-account.png" alt="verified-account"/>
                <p class="ml-2">Application responsive avec intégration de services tiers</p>
            </div>
        </div>       
    </div>
</div>
 <!-- Footer -->
 <footer class="mx-auto bg-gray-500">
    <p class="text-center text-2xl mb-5 p-5">© Portfolio créé par Sabjon Mali Le 24/10/2024</p>
    <div class="flex gap-10 justify-center">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="LinkedIn"/>
        <img width="50" height="50" src="https://img.icons8.com/material-outlined/50/github.png" alt="GitHub"/>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/twitterx--v2.png" alt="Twitter"/>
        <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/indeed.png" alt="Indeed"/>
    </div>
</footer>   
</template>
<script>
export default {
  name: 'cours'
};
</script>