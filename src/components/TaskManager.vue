<template>
  <div>
    <div v-for="task in allTasks" :key="task.id">
      <app-task-item :task="task"></app-task-item>
    </div>
  </div>
</template>

<script>
  import TaskItem from './TaskItem.vue';
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    components: {
      appTaskItem: TaskItem
    },
    methods: {
      ...mapActions(['fetchTasks'])
    },
    computed: {
      ...mapGetters(['allTasks'])
    }
  }
</script>