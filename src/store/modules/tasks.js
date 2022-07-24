const state = {
  tasks: [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false }, 
    { id: 3, title: 'Task 3', completed: false }
  ]
};

const getters = {
  allTasks: state => state.tasks
};

const actions = {
  fetchTask({ commit }, tasks) {
    commit('setTasks', tasks);
  },
  addTask({ commit }, task) {
    commit('newTask', task)
  },
  updateTask({ commit}, task) {
    commit('modTask', task)
  },
  removeTask({ commit }, taskId) {
    commit('delTask', taskId)
  }
};

const mutations = {
  setTasks: (state, tasks)  => state.tasks = tasks,
  newTask:  (state, newTask)   => state.tasks = [ ...state.tasks, newTask ],
  modTask:  (state, modTask)   => {
    const index = state.tasks.findIndex(task => task.id === modTask.id);
    
    if (index !== -1) {
      state.tasks = [ ...state.tasks.slice(0, index), modTask, ...state.tasks.slice(index + 1) ];
    }
  },
  delTask:  (state, taskId) => state.tasks = state.tasks.filter(task => task.id !== taskId)
};

export default {
  state, getters, actions, mutations
}