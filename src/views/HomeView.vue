<script setup>
import { onMounted} from "vue";
import { RouterLink } from "vue-router";
import { useApiStore } from "@/stores/api";
const api = useApiStore()
onMounted(()=>{
  api.makeQuery()
})
</script>

<template>
  <main class="main-content">
    <p>
      Вот это вот да
    </p>
    <p>
      Я создал очередное бесполезное приложение
    </p>
    <p>
      Теперь вы будете видеть, что происходит с счётчиком. Посетите нижние ссылки, чтобы испытать мощь state менеджеров
    </p>
    <div class="linkDiv">
      <RouterLink class="link" to="/increment">Страница инкремента</RouterLink>
      <RouterLink class="link" to="/decrement">Страница декремента</RouterLink>
    </div>
    <br>
    <p>
      Информация с JSON Placeholder ниже:
    </p>
    <pre>{{ JSON.stringify(api.data, null, 2) }}</pre>
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
.link{
  padding: 2rem;
  border: solid black 1px;
  border-radius: 15%;
}

</style>