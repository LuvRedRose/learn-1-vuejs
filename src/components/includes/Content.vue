<template>
  <main class="px-16 py-16 bg-gray-100 md:col-span-2">
        <div class="flex  justify-center md:justify-end">
          <a href="#" class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
          <a href="#" class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 ml-2">Sign up</a>
        </div>

        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="text-2xl font-semibold">For Ninjas</h3>
        </header>

          <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
          <div class="mt-8 grid lg:grid-cols-3 gap-10">
            <!-- card here  -->
            <div class="card hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1550951945-660a41587436?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-4">
                <span class="font-bold">5 Bean Chilli Stew</span>
                <span class="block text-gray-500 text-sm">Recipe By Me</span>
              </div>
              <div class="badge">
                <svg class="w-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
            <div class="card hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1790&q=80" alt="" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-4">
                <span class="font-bold">5 Bean Chilli Stew</span>
                <span class="block text-gray-500 text-sm">Recipe By Me</span>
              </div>
              <div class="badge">
                <svg class="w-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
            <div class="card hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1516865131505-4dabf2efc692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1790&q=80" alt="" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-4">
                <span class="font-bold">5 Bean Chilli Stew</span>
                <span class="block text-gray-500 text-sm">Recipe By Me</span>
              </div>
              <div class="badge">
                <svg class="w-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
          </div>

          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
          <div class="mt-8 grid lg:grid-cols-3 gap-10">
            <div class="card hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2RzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-4">
                <span class="font-bold">5 Bean Chilli Stew</span>
                <span class="block text-gray-500 text-sm">Recipe By Me</span>
              </div>
              <div class="badge">
                <svg class="w-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
             <div class="card hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1607664608695-45aaa6d621fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-4">
                <span class="font-bold">5 Bean Chilli Stew</span>
                <span class="block text-gray-500 text-sm">Recipe By Me</span>
              </div>
              <div class="badge">
                <svg class="w-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
            <div class="card hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1571800338428-60ca034df783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-4">
                <span class="font-bold">5 Bean Chilli Stew</span>
                <span class="block text-gray-500 text-sm">Recipe By Me</span>
              </div>
              <div class="badge">
                <svg class="w-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>25 Mins</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-4">
            <div class="btn text-primary bg-secondary-100 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500">Load More</div>
          </div>
        </div>
  </main>
</template>

<script>
export default {
  name: 'Content',

}
</script>