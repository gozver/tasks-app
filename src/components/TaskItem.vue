<template>
  <div class="task-item" :class="{ 'is-completed': task.completed }">
    <input type="checkbox" :id="'checkbox-' + task.id" @click="toggleCompleted(task.id)" />
    <label :for="'checkbox-' + task.id">{{ task.title }}</label>

    <button @click="deleteTask()">Delete</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions(['updateTask', 'removeTask']),

      toggleCompleted() {
        const updatedTasK = { ...this.task, completed: !this.task.completed };
        this.updateTask(updatedTasK);
      },
      deleteTask() {
        this.removeTask(this.task.id);
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
  button { margin-left: 10px; }
</style>