<template>
    <div>
        <header class="container">
            <nav class="flex justify-between items-center bg-pink-300 px-6 py-3">
            <div class="flex">
                <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z">
                </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p class="text-2xl ml-2">CAPTURE</p>
            </div>
            <ul class="flex">
                <li><a href="#" class="text-pink-700 hover:text-pink-100 px-6 py-3">Home</a></li>
                <li><a href="#" class="text-pink-700 hover:text-pink-100 px-6 py-3">Gallery</a></li>
                <li><a href="#" class="text-pink-700 hover:text-pink-100 px-6 py-3">About</a></li>
                <li><a href="#" class="text-pink-700 hover:text-pink-100 px-6 py-3">Contact</a></li>
            </ul>
            </nav>
        <div class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
                <div class="lg:text-center">
                    <h2 class="text-base text-indigo-400 font-semibold trancking-wide uppercase">Gallery</h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                         A Simple Gallery From Me
                    </p>
                    <p class="mt-4 max-w-2xl text-xl text-indigo-400 lg:mx-auto">
                         Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>
            </div>
        </div>
         </header>
    </div>
</template>


<script>
export default {
    name: 'Navbar'
}
</script>