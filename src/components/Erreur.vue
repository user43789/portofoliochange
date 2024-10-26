<template>
        <div class="bg-blue-800 h-screen ">
            <section class="flex justify-center justify-between mx-24 ">
             <div class="mt-48 flex justify-between ">
                <div>
                <img src="./image/tristess404.jpg" class="w-1/2 rounded-xl" alt="image 404">
            </div>

            <div>
                <h1 class="text-9xl font-extrabold">404</h1>
                <p class="text-3xl text-gray-400 mb-12">Erreur page 404</p>
                <RouterLink to="./Acceuil" class="mt-12 p-3 bg-blue-300 rounded-xl">Retourner a la page d'Acceuil</RouterLink>
            </div>
            <div >

            </div>
             </div>
        </section>
        </div>
</template>



<script>
export default{
    name: "Erreur"
}
</script>