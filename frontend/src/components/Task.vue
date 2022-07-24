<template>
  <div class="todo-item" :class="{ 'is-complete': task.completed }">
    <p>
      <input type="checkbox" @change="markComplete" />
      {{task.name}}
      <button @click="deleteTask">Delete</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Task",
  props: {
    task: { type: Object, required: true }
  },
  methods: {
    ...mapActions(['updateTask', 'removeTask']),

    markComplete() {
      const updatedTask = {
        ...this.task,
        completed: !this.task.completed
      };
      this.updateTask(updatedTask);
    },
    deleteTask() {
      this.removeTask(this.task.id);
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  
  .is-complete {
    text-decoration: line-through;
  }

  input[type="checkbox"] {
		cursor: pointer;
	}
</style>

