<template>
  <div class="container" v-cloak>
    <div>
      <section>
        <input type="text" v-model="firstName" placeholder="Enter firstname">
        <p>First Name: {{firstName}}</p>
      </section>
      <br/>
      <section>
        <button @click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
      </section>
      <br />
      <section>
        <button @click="say('wazzup')">Say hi</button>
      </section>
      <br />
      <section>
        <button @click="isVisible = !isVisible">toggle</button>
        <h1 v-show="isVisible">Hello!</h1>
      </section>
      <br />
      <section>
        <p v-if="counter > 10">{{ counter }} in stock.</p>    
        <p v-else-if="counter > 0">Hurry up, there are just a few items left!</p>    
        <p v-else>Oops! Sorry, we're all out!</p>  
      </section>
      <br />
      <section>
        <h4>TODOS</h4>
        <ul class="todos">
          <li v-for="(todo, index) in todos" :key="index">
            {{todo.title}}
          </li>
        </ul>
      </section>
      <br />
      <section>
        <p v-html="rawHTML" />
      </section>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      firstName: '',
      counter: 0,
      isVisible: true,
      todos: [
        {title: 'Meeting with Kelly'},
        {title: '1-on-1 with Vince'}
      ],
      rawHTML: '<h1>Luke!</h1> <span>I am your father.</span> '
    }
  },
  methods: {
    say(message) {
      alert(message);
    }
  }
}
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .container div {
    padding: 20px; 
  }

  section {
    padding: 50px;
    background: #f1f1f1;
    margin: 5px;
  }
</style>