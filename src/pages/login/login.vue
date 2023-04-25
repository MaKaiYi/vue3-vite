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
import { useMainStore } from "@/store/index3";

const mainStore = useMainStore();
const actbTN = () => {
  console.log(import.meta.env2);
  mainStore.insertPost("ZHANGSAN1");
};
const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: "名称被修改了,nameLength也随之改变了",
  });
  console.log("rebase tEST1");
  console.log("rebase tEST2");
  console.log("rebase tEST3");
};
</script>
