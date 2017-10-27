<script>
// import _ from 'lodash'
export default {
    props: {
        // ID
        id: String,
        // 是否显示
        show: Boolean,
        // 标题
        title: String
    },

    watch: {
        show (val) {
            const ref = this.$refs[this.name]
            if (val === false && ref.closed) {
                ref.closed = false
                return
            }

            val ? ref.open() : ref.close()
        }
    },

    methods: {
        close (type) {
            this.$refs[this.name].closed = true

            this.$emit('close')
            if (type === 'ok') {
                this.$emit('submit')
            }
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
<md-dialog-confirm
    :ref="name"
    :md-title="title"
    @close="close"
    md-ok-text="ok"
    md-cancel-text="cancel"
    :md-content-html="$slots.default[0].text"/>
</template>
