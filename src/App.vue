<template>
    <a href="./style.css"></a>
  <header class="w-full flex flex-col lg:flex-row justify-between p-6 bg-gray-800 items-center">
        <h1 class="text-2xl lg:text-3xl text-white">
            <img src="./components/image/logo.png" class="w-1/6 rounded-xl shadow-xl" alt="">
        </h1>
        <nav class="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 lg:mt-0">
            <router-link to="/Acceuil" class="text-white text-3xl hover:bg-red-900  p-2 rounded-lg font-extrabold"> Acceuil</router-link>
            <router-link to="/Information" class="text-white  text-3xl hover:bg-red-900 p-2 rounded-lg font-extrabold"> information</router-link>
            <router-link to="/cours" class="text-white text-3xl hover:bg-red-900 p-2 rounded-lg font-extrabold">Tarifs</router-link>
        </nav>
    </header>

<RouterView></RouterView>

</template>
