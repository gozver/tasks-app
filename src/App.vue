<template>
  <div id="app">
    <app-main-header></app-main-header>

    <app-add-task 
      class="my-20"
    ></app-add-task>

    <app-task-manager 
    ></app-task-manager>
  </div>
</template>

<script>
  import MainHeader from './components/layout/MainHeader.vue';
  import TaskManager from './components/TaskManager.vue';
  import AddTask from './components/AddTask.vue';

  export default {
    components: {
      appTaskManager: TaskManager,
      appMainHeader: MainHeader,
      appAddTask: AddTask
    }
  }
</script>

<style scoped>
  .my-20 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>