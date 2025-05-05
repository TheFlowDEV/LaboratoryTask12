<script setup>
import {ref} from "vue"
import { useApiStore } from '@/stores/api';
import { useCounterStore } from '@/stores/counter';
const api = useApiStore();
const counterStore = useCounterStore()
const name = ref("")
const body = ref("")
</script>

<template>
  <main class="main-content">
    <h2 style="text-align:center">Инкремент</h2>
    <p>
        Жмак на кнопку, чтобы увидеть реакцию приложения
    </p>
    <div class="button_wrap">
      <button @click="counterStore.increment">Инкремент</button>
    </div>
    <p>
      А для того, чтобы приложение не казалось лютым копипастом всего и вся от самого же себя
    </p>
    <p>
      Размещу внизу форму

    </p>
    <p>
      Чтобы POST запросом постучаться на JSON placeholder
    </p>
    <p>
      а ещё квадратный корень от counter(если он вообще возьмётся):{{ counterStore.squareRoot }}
    </p>
    <p>
      Напишите пост о нашем приложении
    </p>
    <div>
      <form v-on:submit="(e)=>{
        e.preventDefault()
        api.makeQueryPost({
          title:name,
          body:body,
          userId:Math.floor((Math.random()+1)*1000+1)
        })
      }">
        <input v-model="name" type="text" name="title" placeholder="Название" id="">
        <textarea v-model="body" name="body" placeholder="Описание" id=""></textarea>
        <button type="submit">Послать</button>
      </form>
    </div>
    <p>Последние данные API, которые хранятся в сторе</p>
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
p{
  border: 0 2px 0 2px;
}
form{
  display: flex;
  max-width: 20vw;
  flex-direction: column;
  gap:30px;
}
button{
  padding: 2rem;
  background-color: white;
}
.button_wrap{
  display: flex;
  justify-content: center;
}
</style>