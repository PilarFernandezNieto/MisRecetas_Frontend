<script setup>
import NavHeader from './NavHeader.vue';
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="imgHeader header">
        <div class="overlay"></div>
        <NavHeader />
    </div>
</template>

<style scoped>
/* Header */
.imgHeader {
    background-image: url("/img/slide.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.header {
    position: relative;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

}
</style>
