<template>
    <header class="app_header">
        <RouterLink class="link" to="/">Главная</RouterLink>
        <RouterLink class="link" to="/increment">Страница инкремента</RouterLink>
        <RouterLink class="link" to="/decrement">Страница декремента</RouterLink>
    </header>
    <h1>Счётчик:{{ counterStore.counter }}</h1>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore()
</script>

<style scoped>

.app_header{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
}
h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    text-align: center;
}

</style>