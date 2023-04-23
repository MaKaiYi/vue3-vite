<template>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <button @click="actbTN">action事件</button>
  <a-space>
    <a-link href="link">Link</a-link>
    <a-link href="link" disabled>Link</a-link>
  </a-space>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/index";

const mainStore = useMainStore();
const actbTN = () => {
  console.log(import.meta.env);
  mainStore.insertPost("ZHANGSAN");
};
const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: "名称被修改了,nameLength也随之改变了",
  });
};
</script>
