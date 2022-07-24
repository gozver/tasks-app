<template>
  <div>
    <div v-for="task in tasksList" :key="task.id">
      <app-task-item :task="task"></app-task-item>
    </div>
  </div>
</template>

<script>
  import TaskItem from './TaskItem.vue';
  
  export default {
    components: {
      appTaskItem: TaskItem
    },
    props: {
      tasksList: {
        type: Array,
        required: true
      }
    }
  }
</script>