module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors :{
         primary : '#FF6363',
         teal: '008080',
         secondary : {
           100 : '#E2E2D5',
           200 : '#888883',
         }
       },
       fontFamily: {
         nunito : ['Nunito']
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }