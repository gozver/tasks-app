<template>
  <div>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="Add Task" v-model="title" />
      <button type="submit">Add Task</button>
    </form>
  </div>  
</template>

<script>
  import { v4 } from 'uuid';

  export default {
    data() {
      return {
        title: ''
      };
    },
    methods: {
      addTask() {
        const task = {
          id: v4(),
          title: this.title,
          completed: false
        };
        
        this.$emit('addTask', task);
        this.title = '';
      }
    }
  }
</script>

<style scoped>
  button { 
    margin-left: 10px; 
  }
</style>