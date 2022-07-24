<template>
  <div id="app">
    <app-main-header></app-main-header>

    <app-add-task 
      @addTask="addTask"
      class="my-20"
    ></app-add-task>

    <app-task-manager 
      :tasksList="tasksList"
    ></app-task-manager>
  </div>
</template>

<script>
  import MainHeader from './components/layout/MainHeader.vue';
  import TaskManager from './components/TasksManager.vue';
  import AddTask from './components/AddTask.vue';

  import { eventBus } from './main';

  export default {
    created() {
      eventBus.$on('toogleCompleted', data => {
        this.tasksList = this.tasksList.map(task => {
          if (task.id === data.id) {
            task.completed = !task.completed;
          }
          return task;
        });
      });

      eventBus.$on('deleteTask', data => {
        this.tasksList = this.tasksList.filter(task => task.id !== data.id);
      });
    },
    data() {
      return {
        tasksList: [
          { id: 1, title: 'Task 1', completed: false },
          { id: 2, title: 'Task 2', completed: false }, 
          { id: 3, title: 'Task 3', completed: false }
        ]
      };
    },
    methods: {
      addTask(task) {
        this.tasksList = [ ...this.tasksList, task ];
      }
    },
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