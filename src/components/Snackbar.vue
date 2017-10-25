<script>
export default {
    props: {
        // ID
        id: String,
        // 提示信息
        msg: String
    },

    watch: {
        msg (val) {
            const { open, close } = this.$refs[this.name]
            val === '' ? close() : open()
        }
    },

    computed: {
        name () {
            return this.id || Math.random()
        }
    }
}
</script>

<template>
<md-snackbar md-position="top center" :ref="name" @close="$emit('close')">
    <span>{{ msg }}</span>
</md-snackbar>
</template>
