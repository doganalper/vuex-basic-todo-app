<template>
  <div id="todoObject">
    <span>{{todoItem.title}}</span>
    <div></div>
    <div id="buttons">
      <button id="doneTodo" @click="doneTodo">✔</button>
      <button id="deleteTodo" @click="deleteTodo">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todoItem"],
  methods: {
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todoItem);
    },
    doneTodo() {
      // burayı hallet
      this.$store.commit("doneTodo", this.todoItem);
    },
  },
};
</script>

<style scoped>
#todoObject {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
}
span {
  font-size: 18px;
  font-weight: bold;
}
button {
  height: 25px;
  width: 40px;

  font-weight: bolder;
}
#deleteTodo {
  background-color: red;
  border-color: red;
}
#doneTodo {
  background-color: green;
  border-color: green;
}
</style>