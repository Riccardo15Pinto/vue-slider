//check console log
console.log('ok js');
console.log('ok vue', Vue);

//decstructuring vue
const { createApp } = Vue;

//create app
const app = createApp({
    //data file
    data(){
        return {
            //current index
            currentIndex: 0,
            //set loop for interval
            loop: null,
            //array content
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
            
        }
    },
    //add open page
    mounted(){
        //intervall
        this.loop = setInterval(this.goUp, 3000);

    },
    //metods
    methods: {
        //click dx icon
        goUp(){
            if(this.currentIndex === this.images.length - 1){
                this.currentIndex = 0;
            }else{
                this.currentIndex++;
            }
        },
        //click sx icon
        goDown(){
            if(this.currentIndex === 0){
                this.currentIndex = this.images.length - 1;
            }else{
                this.currentIndex--;
            }
        },
        //on image click
        goToPic(i){
            return this.currentIndex = i;
        },
        //stop loop on enter
        stopLoop(){
            clearInterval(this.loop)
        },
        //continueLoop on leave
        continueLoop(){
         this.loop = setInterval(this.goUp, 3000)
        }
        
    }
    
    
});
//monto nel html
app.mount('#root');