<template>
  <div id="done">
    <div id="span">
      <span>Finished Todos</span>
    </div>
    <ul v-if="doneList.length > 0">
      <transition-group name="slide">
        <done-todo v-for="todo in doneList" :key="todo.id" :todoItem="todo"></done-todo>
      </transition-group>
    </ul>
    <div v-else id="else">
      <h2>There's no todo</h2>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
import doneTodo from "./doneTodo";
export default {
  components: {
    doneTodo,
  },
  data() {
    return {
      doneList: null,
    };
  },
  created() {
    this.doneList = this.$store.getters.getDone;
  },
  mounted() {
    eventBus.$on("finished", () => {
      this.doneList = this.$store.getters.getDone;
    });
  },
};
</script>

<style scoped>
#else {
  margin-left: 40px;
}
#span {
  text-align: center;
  margin-bottom: 5px;
  padding: 5px 0 5px 0;
  font-size: 28px;
  text-decoration: underline;
}
#done {
  background-color: #7398aa;
  border-radius: 10px;
  padding-right: 40px;
  box-sizing: border-box;
  width: 33%;
  display: flex;
  flex-direction: column;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
/* move transition-group için kullanılır. */
.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>