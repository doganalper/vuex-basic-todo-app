<template>
  <div id="todoObject">
    <span>{{todoItem.title}}</span>
  </div>
</template>

<script>
export default {
  props: ["todoItem"],
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
</style>