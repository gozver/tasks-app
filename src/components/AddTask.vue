<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Add Task" v-model="title" />
      <button type="submit">Add Task</button>
    </form>
  </div>  
</template>

<script>
  import { v4 } from 'uuid';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        title: ''
      };
    },
    methods: {
      ...mapActions(['addTask']),
      
      onSubmit() {
        const task = { id: v4(), title: this.title, completed: false };
        this.addTask(task);
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