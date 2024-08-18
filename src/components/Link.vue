<script setup>
import { RouterLink } from "vue-router"

defineProps({
    to: {
        type: String
    }
})

</script>

<template>
    <RouterLink 
        :to="{name: to}"
        >
        <slot></slot>

    </RouterLink>
</template>
