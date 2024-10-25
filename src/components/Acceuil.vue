<template>

<section class="py-8 z-10 font-serif bg-gray-900">
        <div class="flex flex-col md:flex-row items-center max-w-6xl py-8 mx-auto min-h-screen">
            <div class="w-full md:w-1/2 py-8">
                <h1 class="w-full text-purple-900 text-7xl">Welcome to</h1>
                <span class="text-blue-500 text-7xl">my portfolio,</span>
                <h2 class="w-full text-purple-900 text-7xl">
                    I am a web developer <br> Sabjon Mali.
                </h2>
            </div>
            <div class="w-full md:w-1/2">
                <div class="bg-green-900 h-screen rounded-3xl">
                    <!-- contenu supplémentaire -->
                </div>
            </div>
        </div>
    </section>

    <main>
        <!-- début section compétences -->
        <section class="bg-black p-4">
            <div class="max-w-7xl mx-auto mt-10">
                <h1 class="text-center font-semibold text-5xl text-white">compétences (hors langage de programmation)</h1>
                <p class="text-center mt-6 text-gray-500">voici mes compétences en développement web, hors langage de programmation</p>
                <div class="grid grid-cols-1 sm:grid-cols-3 mt-14 gap-4">
    
                    <!-- compétence : créativité -->
                    <article class="shadow-xl rounded-xl bg-white text-left w-full h-96">
                        <div class="p-9 rounded-xl">
                            <svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Icône de créativité">
                                <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>
                                <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>
                            </svg>
                            <h2 class="mt-6 font-bold text-4xl">créativité</h2>
                            <p class="text-left mt-7 text-xl text-gray-500">je propose des solutions innovantes et originales, en adéquation avec les besoins des clients et les tendances actuelles du marché.</p>
                        </div>
                    </article>


                     <!-- compétence : résolution de problèmes -->
                     <article class="shadow-xl rounded-xl bg-white text-left w-full h-96">
                        <div class="p-9 rounded-xl">
                            <svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Icône de résolution de problèmes">
                                <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>
                                <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>
                            </svg>
                            <h2 class="mt-4 font-bold text-4xl">résolution de problèmes</h2>
                            <p class="text-left mt-4 text-xl text-gray-500">j’adopte une approche analytique pour identifier et résoudre les défis techniques et organisationnels.</p>
                        </div>
                    </article>


                    <!-- compétence : collaboration -->
                    <article class="shadow-xl rounded-xl bg-white text-left w-full h-96">
                        <div class="p-9 rounded-xl">
                            <svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Icône de collaboration">
                                <path d="M12 8L12 20" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M8 12L16 12" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <circle cx="12" cy="12" r="10" stroke="#111827" stroke-width="2"></circle>
                            </svg>
                            <h2 class="mt-4 font-bold text-4xl">collaboration</h2>
                            <p class="text-left mt-4 text-xl text-gray-500">je travaille efficacement en équipe, en partageant les idées et en coordonnant les efforts pour atteindre des objectifs communs.</p>
                        </div>
                    </article>


                    <!-- compétence : gestion du temps -->
                    <article class="shadow-xl rounded-xl bg-white text-left w-full h-96">
                        <div class="p-9 rounded-xl">
                            <svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Icône de gestion du temps">
                                <circle cx="12" cy="12" r="10" stroke="#111827" stroke-width="2"></circle>
                                <path d="M12 6L12 12L16 14" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                            <h2 class="mt-4 font-bold text-4xl">gestion du temps</h2>
                            <p class="text-left mt-4 text-xl text-gray-500">je sais organiser mes tâches de manière efficace pour respecter les délais et prioriser les projets importants.</p>
                        </div>
                    </article>



                     <!-- compétence : adaptabilité -->
                     <article class="shadow-xl rounded-xl bg-white text-left w-full h-96">
                        <div class="p-9 rounded-xl">
                            <svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Icône d'adaptabilité">
                                <path d="M12 2L12 22" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M2 12L22 12" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                            <h2 class="mt-4 font-bold text-4xl">adaptabilité</h2>
                            <p class="text-left mt-4 text-xl text-gray-500">je m'adapte facilement aux nouvelles situations et suis capable d'apprendre rapidement des compétences et technologies nouvelles.</p>
                        </div>
                    </article>



                    <!-- compétence : communication -->
                    <article class="shadow-xl rounded-xl bg-white text-left w-full h-96">
                        <div class="p-9 rounded-xl">
                            <svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Icône de communication">
                                <path d="M4 4L20 20" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M20 4L4 20" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <circle cx="12" cy="12" r="10" stroke="#111827" stroke-width="2"></circle>
                            </svg>
                            <h2 class="mt-4 font-bold text-4xl">communication</h2>
                            <p class="text-left mt-4 text-xl text-gray-500">je communique de manière claire et efficace, facilitant la compréhension et la collaboration avec les équipes et les clients.</p>
                        </div>
                    </article>
    
                </div>
            </div>
        </section>
           <!-- fin section compétences -->
    </main>

      
    <!-- nouvelle section -->
<div class="bg-black py-10">
    <h1 class="text-center text-5xl font-serif text-white mb-6">COMPÉTENCES TECHNIQUES</h1>
    <div class="flex justify-center gap-16">
        <!-- Première colonne de compétences -->
        <div class="mt-2 relative">
            <ul class="mt-8 mx-auto max-w-xl text-left font-medium text-lg border-blue-200 divide-y divide-blue-200">
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        HTML
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        CSS
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        Tailwind
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        JavaScript
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        Pinia <span class="font-normal text-gray-500 text-sm">(JavaScript)</span>
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        Store <span class="font-normal text-gray-500 text-sm">(JavaScript)</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Deuxième colonne de compétences -->
        <div class="mt-2 relative">
            <ul class="mt-8 mx-auto max-w-xl text-left font-medium text-lg border-blue-200 divide-y divide-blue-200">
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        Terminal
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50" href="#">
                        <span class="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
                        GitHub & Git
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- fin de section -->


 <!--début aside-->
<section class="h-auto bg-gray-500 w-full pt-12 md:pb-20 border-b border-[#23232C] p-3">
    <div class="max-w-6xl mx-auto md:text-center tails-relative">
        <h2 class="jakarta text-white font-bold text-xl md:px-0 px-10 md:text-3xl">MON PROFIL ✨</h2>
        <p class="text-gray-400 mt-2 md:mt-5 md:px-0 px-10 md:text-2xl">découvrer moi plus en détaille</p>
        <a href="#"
            class="inline-flex mt-12 justify-center md:mt-8 items-center w-full px-8 py-5 md:mb-6 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-700 sm:mb-0 md:w-auto hover:bg-indigo-600 md:rounded-full">
            <svg class="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke="none">
                    <path
                        d="M6 12l5.485-5.485A12 12 0 0 1 19.971 3H21v1.029a12 12 0 0 1-3.515 8.486L12 18m-6-6l6 6m-6-6L3 9l.828-.828A4 4 0 0 1 6.657 7H11l-5 5zm6 6l3 3 .828-.828A4 4 0 0 0 17 17.343V13l-5 5zm-4.5-4.5l-2.379 2.379A7.242 7.242 0 0 0 3 21a7.243 7.243 0 0 0 5.121-2.121L10.5 16.5"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M16.778 7.916a.5.5 0 1 1-.556-.832.5.5 0 0 1 .556.832z" fill="#212121"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
            <span>ICI</span>
        </a>
    </div>
</section>
<!--fin de l'aside-->


       <!-- Section 4: Formulaire -->
<div class="bg-black h-48">
    <div class="max-w-full mx-5 text-white">
        <div class="mx-5">
            <div class="flex justify-between items-center relative top-12">
                <div class="flex flex-col">
                    <h1 class="text-7xl sm:text-5xl">Me contacter</h1>
                    <p>Au plaisir de pouvoir échanger avec vous.</p>
                </div>
                <button>
                    <a href="mailto:" class="p-4 bg-red-700 w-1/3 text-3xl rounded-lg text-center">Envoyer moi un Message</a>
                </button>
            </div>
        </div>
    </div>
</div>
<!--fin-->

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
  
  <script setup>
  export default {
    name: 'Acceuil'
  };
  </script>
  