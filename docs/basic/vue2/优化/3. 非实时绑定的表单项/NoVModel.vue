<script>
function randomId() {
  return Math.random().toString(16).substr(2, 5)
}

export default {
  data() {
    return {
      todos: [
        { id: randomId(), content: '完成「vue过渡和动画的」的学习' },
        { id: randomId(), content: '看一部电影' },
        { id: randomId(), content: '学一首新歌' },
      ],
    }
  },
  methods: {
    addTodo(e) {
      const newContent = e.target.value
      if (!newContent) return
      this.todos.unshift({
        id: randomId(),
        content: newContent,
      })
      e.target.value = ''
    },
    finishTodo(item) {
      this.todos = this.todos.filter(it => it !== item)
    },
    shuffle() {
      this.todos.sort(() => Math.random() - 0.5)
    },
  },
}
</script>

<template>
  <div class="_container demo">
    <input
      type="text"
      @keypress.enter="addTodo"
      placeholder="input todo"
    />
    <button class="small" @click="shuffle">随机排序</button>
    <transition-group tag="ul" name="todo" class="todo-container">
      <li v-for="item in todos" :key="item.id" class="todo">
        <span>{{ item.content }}</span>
        <button @click="finishTodo(item)">完成</button>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
._container {
  margin: 1em auto;
  padding: 1.5em;
  border-radius: 5px;
}
.shuffle {
  margin: 1em 0;
}

.todo-container {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}
.todo {
  padding: 0.5em 0;
  border-bottom: 1px solid #f0efef;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
}

.todo-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.todo-enter-active,
.todo-leave-active,
.todo-move {
  transition: 5s;
}
.todo-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.todo-leave-active {
  position: absolute;
}
</style>
