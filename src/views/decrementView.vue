<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore()
</script>

<template>
  <main class="main-content">
    <p>
        Декремент
    </p>
    <p>
        Жмак на кнопку, чтобы увидеть реакцию приложения
    </p>
    <div class="button_wrap">
      <button @click="counterStore.decrement">Декремент</button>
    </div>
  </main>
</template>

<style scoped>
.main-content{
  display: flex;
  flex-direction: column;

}
.linkDiv{
  display: flex;
  gap: 30px;
}
button{
  padding: 2rem;
  border-radius: 15%;
  background-color: white;
}
.button_wrap{
  display: flex;
  justify-content: center;
}
</style>