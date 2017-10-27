<script>
export default {
    data: () => ({
        alive: false
    }),

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
            const { open, close } = this.$refs[this.name]
            if (val) {
                this.alive = true
                open()
            } else {
                close()
                setTimeout(() => { this.alive = false }, 500)
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
<md-dialog :ref="name" :md-click-outside-to-close="false">
    <md-dialog-title>{{ title }}</md-dialog-title>

    <md-dialog-content>
        <slot v-if="alive"/>
    </md-dialog-content>

    <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('close')">取消</md-button>
        <md-button class="md-primary" @click="$emit('submit')">提交</md-button>
    </md-dialog-actions>
</md-dialog>
</template>

<style>
.md-dialog {
    min-width: 350px;
}
</style>
