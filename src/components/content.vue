<template>
  <div id="content">
    <app-todo></app-todo>
    <pending-list></pending-list>
    <done-list></done-list>
  </div>
</template>

<script>
import { eventBus } from "../main";
import addTodo from "./contentComps/addTodo";
import Pending from "./contentComps/pending";
import Done from "./contentComps/done";
export default {
  components: {
    appTodo: addTodo,
    pendingList: Pending,
    doneList: Done
  }
};
</script>

<style>
#content {
  margin: 10px 30px 0 30px;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
