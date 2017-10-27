<script>
export default {
    data: () => ({
        // 初始值
        initial: ''
    }),

    props: {
        // ID
        id: String,
        // 提示信息
        msg: String
    },

    watch: {
        msg (val) {
            if (val !== '' && this.initial === '') {
                this.initial = val
            }
        },
        initial (val) {
            if (this.initial === '') {
                return
            }
            this.$nextTick(() => setTimeout(() => {
                const { open, close } = this.$refs[this.name]
                val === '' ? close() : open()
            }, 0))
        }
    },

    methods: {
        clear () {
            if (this.msg === this.initial) {
                this.$emit('clear')
            }
            this.initial = ''
        }
    },

    computed: {
        name () {
            return this.id || escape(this.initial).replace(/[^A-Z]/g, '') + Math.random()
        }
    }
}
</script>

<template>
<md-snackbar v-if="initial !== ''" md-position="top center" :ref="name" @close="clear()">
    <span>{{ msg }}</span>
</md-snackbar>
</template>
