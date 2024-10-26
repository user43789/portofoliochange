<template>
       <!--fin-->
       <section class="w-1/2 mx-auto mt-10 ">
        <div class="grid grid-cols-2 gap-10">
    
            <div>
                <img src="https://i.pinimg.com/236x/6e/63/03/6e630376bb195c596a0317dadc9117b1.jpg" class="w-full rounded-xl shadow" alt="">
            </div>
    
            <div>
                <h1><strong class="text-6xl ">qui je suis ?</strong></h1>
                <p class="text-gray-400 mt-8">Passionné par le monde du numérique et de la création, je me définis comme une personne curieuse et toujours prête à relever de nouveaux défis. Mon parcours m’a permis de développer des compétences variées, notamment dans le domaine du développement web et des nouvelles technologies. J'apprécie la complexité de l'informatique et trouve une grande satisfaction à résoudre des problèmes et à créer des solutions innovantes. À travers mes expériences, j’ai appris à m’adapter rapidement, à travailler avec rigueur et à collaborer efficacement au sein d’équipes dynamiques, Mon objectif est de continuer à apprendre et à grandir dans cet univers en constante évolution. En dehors du travail, j’aime partager mes connaissances avec d’autres passionnés et m’investir dans des projets communautaires. Je crois fermement que l’apprentissage est un processus continu et qu'il y a toujours quelque chose de nouveau à découvrir. </p>
            </div>
        </div>
        <h1 class="text-center mb-10 mt-10 font-semibold text-3xl">pourquoi moi ?</h1>
        <p class="font-medium mb-5">Avec une solide expérience dans le développement web et une passion pour la création numérique, je m'engage à fournir des solutions de qualité, adaptées aux besoins spécifiques de chaque projet. Mon sens du détail et ma capacité à comprendre les enjeux techniques me permettent de concevoir des interfaces à la fois fonctionnelles et esthétiques. Je suis à l'écoute de mes clients et travaille en étroite collaboration avec eux pour garantir que leurs idées prennent vie de manière optimale. En plus de mes compétences techniques, je suis proactif, organisé et toujours à la recherche de nouvelles façons d’améliorer les processus. Mon approche centrée sur l'utilisateur me permet de créer des expériences intuitives et agréables pour les utilisateurs finaux. Faire appel à mes services, c'est choisir un partenaire fiable qui saura accompagner votre projet de manière rigoureuse et créative, avec une réelle passion pour le métier.</p> <a href="./cv epc en alternance pdf.pdf" class="bg-gray-700 p-2 rounded-lg" download="Mon_CV">Télécharger mon CV</a>
    
        <section>
            <div class="bg-gray-400 border border-gray border-12 rounded-lg shadow-12xl mt-10 p-6 w-full">
                <h3 class="text-xl font-semibold border-b pb-2">Contact</h3>
                <form action="#">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div>
                            <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Votre nom :</label>
                            <input type="text" name="product-name" id="product-name"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Nom" required="">
                        </div>
                        <div>
                            <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Votre Prenom</label>
                            <input type="text" name="category" id="category"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Prenom" required="">
                        </div>
                        <div>
                            <label for="brand" class="text-sm font-medium text-gray-900 block mb-2">Email</label>
                            <input type="text" name="brand" id="brand"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Email" required="">
                        </div>
                        <div>
                            <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Votre Numero de Telephone</label>
                            <input type="number" name="price" id="price"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="tel" required="">
                        </div>
                        <div class="col-span-full">
                            <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">Message</label>
                            <textarea id="product-details" rows="4"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Un message ?" required=""></textarea>
                        </div>
                    </div>
                    <button type="submit"
                        class="mt-5 w-full text-back bg-cyan-600 bg-red-700 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">envoyer</button>
                </form>
            </div>
        </section>
    </section>
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
  name: 'information'
};
</script>