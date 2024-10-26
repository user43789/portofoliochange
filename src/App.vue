<template>
    <header class="w-full flex flex-col lg:flex-row justify-between items-center p-6 bg-gray-800">
      <router-link to="/Acceuil">
        <img src="./components/image/logo.png" class="w-16 lg:w-1/6 rounded-xl shadow-xl" alt="Logo">
      </router-link>
      <nav class="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 lg:mt-0 text-center">
        <router-link 
          to="/Acceuil" 
          class="text-white text-2xl hover:bg-red-900 p-2 rounded-lg font-extrabold underline" 
        >
          Accueil
        </router-link>
        <router-link 
          to="/Information" 
          class="text-white text-2xl hover:bg-red-900 p-2 rounded-lg font-extrabold underline" 
        >
          Information
        </router-link>
        <router-link 
          to="/cours" 
          class="text-white text-2xl hover:bg-red-900 p-2 rounded-lg font-extrabold underline" 
        >
          Tarifs
        </router-link>
      </nav>
    </header>
    <RouterView></RouterView>
  </template>
  