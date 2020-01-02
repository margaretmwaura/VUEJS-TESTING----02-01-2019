<template>

    <div>
<!--        {{propValue}}-->
        <p>{{ count }}</p>
        <button  @click.native="increment()" id="mine">Increment</button>
    </div>

</template>

<script>
    export default {
        props: ['propValue'],
        data() {
            return {
                count: 0
            }
        },

        methods: {
            increment() {
                this.count++
            }
        }
    }
</script>
