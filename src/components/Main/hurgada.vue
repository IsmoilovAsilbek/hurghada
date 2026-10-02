<script setup>

</script>

<template>

<div class="hurgada container">
   <div class="hurgada-item">
       <div class="hurgada-item__title">Hurghada NEWS</div>
       <div class="hurgada-item__btn">see all</div>
   </div>
       <div class="hurgada-box">
           <div class="hurgada-box_new">
               <div class="hurgada-new__images">
                   <img src="@/assets/images/background.jpg" alt="jpg" class="hurgada-images__img">
               </div>
               <div class="hurgada-new__info">
                   <h2 class="hurgada-new__title">EGYPT - HURGHADA RECEIVES 1ST TOURIST GROUP</h2>
                   <span>12/20/2022 3:16 PM</span>
               </div>

       </div>
   </div>

</div>

</template>

<style scoped>

.hurgada-item{
    display: flex;
   justify-content: center;
    gap: 810px;
    padding-bottom: 50px;
}

.hurgada-item__title{
    font-size: 20px;
    color: black;

}
.hurgada-item__btn{
    font-size: 17px;
    color: rgb(103, 93, 93);
}

.hurgada-new__images{
    display: flex;
    flex-direction: column;
   align-items: center;
}

.hurgada-images__img{
 max-width: 1500px;
}

.hurgada-box {
    display: flex;
    justify-content: center;
}

.hurgada-box_new {
    position: relative;
    width: 1000px;
    height: 500px;
    overflow: hidden;
}

.hurgada-new__info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
}
</style>