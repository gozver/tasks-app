<template>
  <div class="task-item" :class="{ 'is-completed': task.completed }">
    <input type="checkbox" :id="'checkbox-' + task.id" @click="toggleCompleted(task.id)" />
    <label :for="'checkbox-' + task.id">{{ task.title }}</label>

    <button @click="deleteTask(task.id)">Delete</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleCompleted(id) {
        eventBus.$emit('toogleCompleted', { id });
      },
      deleteTask(id) {
        eventBus.$emit('deleteTask', { id });
      }
    }
  }
</script>

<style scoped>
  .task-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px dotted #ccc;
  }
  .is-completed {
    text-decoration: line-through;
  }
  input[type="checkbox"], label {
    cursor: pointer;
  }
  button {
    margin-left: 10px;
  }
</style>