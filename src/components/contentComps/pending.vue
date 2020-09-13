<template>
  <div id="pending">
    <div id="span">
      <span>Pending Todos</span>
    </div>
    <ul v-if="pendingList.length > 0">
      <transition-group name="slide">
        <todo-object v-for="todo in pendingList" :key="todo.id" :todoItem="todo"></todo-object>
      </transition-group>
    </ul>
    <div v-else id="else">
      <h2>There's no todo</h2>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
import todoObject from "./pendingTodo";
export default {
  components: {
    todoObject,
  },
  data() {
    return {
      pendingList: null,
    };
  },
  created() {
    this.pendingList = this.$store.getters.getPending;
  },
  mounted() {
    eventBus.$on("added", (val) => {
      this.pendingList.push(val);
    });
    eventBus.$on("deleted", () => {
      this.pendingList = this.$store.getters.getPending;
    });
    eventBus.$on("finished", () => {
      this.pendingList = this.$store.getters.getPending;
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
#pending {
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
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
  /* position absolute transition-group'ta silinenin altındaki elemanın yukarı aynı anda çıkması için kullanılır. */
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

@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(20px);
  }
}
</style>
