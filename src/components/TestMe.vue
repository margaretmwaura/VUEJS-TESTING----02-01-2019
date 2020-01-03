<template>

    <div>
        <button  @click="increment" id="mine">Increment</button>
        <p>This is Maggie</p>
        <h1>{{count}}</h1>
        <h4> {{name}}</h4>

        <div class="error">
            <h3 v-if="awesome" class="awe">Vue is awesome!</h3>
            <h3 v-else class="oh">Oh no</h3>
        </div>

        <ul>
            <li v-for="item in listItems">{{ item }}</li>
        </ul>

    </div>


</template>

<script>
    export default {
        data() {
            return {
                count: 0,
                awesome : true,
                name : "",
                listItems: ['Maggie', 'Wanjiru', 'Mwaura'],
            }
        },

        methods: {
            increment() {
                this.count++
            }
        }
    }
</script>
