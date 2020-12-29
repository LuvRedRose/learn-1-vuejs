<template>
<div class="text-gray-600 font-nunito">
    <div class="grid md:grid-cols-3">
      <div class="col-span-1 md:flex md:justify-end">
        <nav class="text-right">
          <div class="flex justify-between items-center">
            <h1 class="font-bold uppercase p-4">
              <a href="/" class="hover:text-gray-700">Food Ninja</a>
            </h1>
            <div class="px-4 cursor-pointer md:hidden" id="list">
              <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16">
              </path></svg>
            </div>
          </div>
          <ul class="text-sm mt-6 hidden md:block" id="menu">
            <li class="text-gray-700 font-bold py-1">
              <a href="#" class="px-4 flex justify-end border-r-4 border-primary">
                <span>Home</span>
                <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                </path></svg>
              </a>
            </li>
            <li class="py-1">
              <a href="#" class="px-4 flex justify-end border-r-4 border-white">
                <span>About</span>
                <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                  </path></svg>
              </a>
            </li>
            <li class="py-1">
              <a href="#" class="px-4 flex justify-end border-r-4 border-white">
                <span>Contact</span>
                <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                </path></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Content />
    </div>
</div>
</template>

<script>
import Content from './includes/Content.vue'
export default {
  name: 'Home',
  components: {
    Content
  },
  mounted () {
      const list = document.querySelector('#list')
      const menu = document.querySelector('#menu')

      list.addEventListener('click', () => {
        if(menu.classList.contains('hidden')){
          menu.classList.remove('hidden')
        }else{
          menu.classList.add('hidden')
    }
})   
  }
}
</script>