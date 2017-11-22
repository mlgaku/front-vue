<script>
export default {
    data: () => ({
        alive: false,
        closed: false
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

            // 打开
            if (val) {
                this.alive = true
                this.closed = false
                open()
                return
            }

            // 还没有关闭
            if (this.closed === false) {
                close()
            }

            // 关闭动画结束从插槽中彻底销毁
            setTimeout(() => { this.alive = false }, 500)
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
<md-dialog :ref="name" @close="closed=true; $emit('close')">
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
