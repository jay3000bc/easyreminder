<template>
   <div id="home" class="d-flex">
       <h2 class ="text-center" id="home-text"> <strong> YOUR <br> PERSONAL <br> <span>E</span>VENT <span>M</span>ANAGER </strong></h2> 
   </div>
</template>

<script>

export default {
   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=PT+Sans:ital,wght@0,700;1,400&display=swap');
#home{
    width: 100vw;
    height: 90vh;
    background-image: url('../../assets/img3.jpg');
    background-size: cover;
    background-position: center;   
}

#home-text {
    margin: auto;
    color: white;
    font-size: 4em;
    line-height: 120px;
    font-family: 'PT Sans', sans-serif;    
    word-spacing: 30px;
}

span {
    font-size: 2em;
    color: darkorange
}
/*
#home-text {
    background-image: linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );    
}

@media only screen and (max-width: 960px) {
 #home-img {
     height: 50vh;
 }
#home-text {
     height: 50vh;
 } 
} */

</style>