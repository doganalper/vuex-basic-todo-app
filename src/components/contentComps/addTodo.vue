<template>
  <div id="addtodo">
    <span>Add Todo</span>
    <div id="formSect">
      <label for=""></label>
      <input type="text" v-model="todoItem.title" />
      <textarea
        name="text"
        v-model="todoItem.text"
        cols="30"
        rows="10"
      ></textarea>
      <button @click="addTodo">Add Todo</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      todoItem: {
        title: "",
        text: ""
      },
      isEmpty: false
    };
  },
  methods: {
    addTodo() {
      for (const itemContent in this.todoItem) {
        if (this.todoItem[itemContent] === "") {
          this.isEmpty = true;
          break;
        }
      }
      if (this.isEmpty) {
        this.isEmpty = false;
        alert("Please Set Informations!");
      } else {
        this.$store.commit("addTodo", this.todoItem);
      }
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  height: 30px;
  margin-top: 5px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}
button:hover {
  background-color: limegreen;
  transition: all 0.3s;
}
span {
  font-size: 28px;
  font-weight: bold;
  color: wheat;
  background-color: #7398aa;
  border-radius: 10px 10px 0 0;
  padding-top: 7px;
  padding-bottom: 5px;
}
textarea {
  margin-bottom: 5px;
  border-radius: 5px;
  border: none;
  resize: none;
  font-weight: bold;
  padding: 5px;
}
input {
  border-radius: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
  font-weight: bold;
  height: 25px;
  border: none;
}
#addtodo {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 25%;
}
#formSect {
  background-color: #7398aa;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 0 0 10px 10px;
}
</style>
