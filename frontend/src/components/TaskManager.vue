<template>
  <div>    
    <div v-for="task in allTasks" :key="task.id">
      <app-task :task="task" />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Task from './Task';

  export default {
    name: 'TaskManager',
    components: {
      appTask: Task
    },
    methods: {
      ...mapActions(['getTasks'])
    },
    computed: {
      ...mapGetters(['allTasks'])
    },
    created() {
      this.getTasks()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
