<script>
export default {
    data: () => ({
        select: 1
    }),

    props: {
        // 当前页
        page: Number,
        // 总页数
        total: Number
    },

    watch: {
        select (val) {
            this.$emit('onpage', val)
        }
    },

    methods: {
        prev () {
            if (this.page > 1) {
                this.$emit('onpage', this.page - 1)
            }
        },
        next () {
            if (this.total > this.page) {
                this.$emit('onpage', this.page + 1)
            }
        }
    },

    computed: {
        pageList () {
            const list = new Set()

            // 前面
            for (let i = Math.min(5, this.page - 1); i > 0; i--) {
                list.add(this.page - i)
            }

            // 当前
            list.add(this.page)

            // 后面
            for (let i = 1; i <= Math.min(5, this.total - this.page); i++) {
                list.add(this.page + i)
            }

            return Array.from(list)
        }
    }
}
</script>

<template>
<div class="pagination">
    <div class="page">
        <span>Pages: </span>
        <md-select v-model="select">
            <md-option v-for="(x, i) in pageList" :key="i" :value="x">{{ x }}</md-option>
        </md-select>
    </div>
    <div class="text">
        {{ page }} of {{ total }}
    </div>
    <md-button class="md-icon-button" @click="prev()" :style="{color: page > 1 ? 'black' : '#bbb'}">
        <md-icon>keyboard_arrow_left</md-icon>
    </md-button>
    <md-button class="md-icon-button" @click="next()" :style="{color: total > page ? 'black' : '#bbb'}">
        <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
</div>
</template>

<style scoped>
.pagination {
    color: gray;
    display: flex;
    font-size: 12px;
    padding: 8px 0;
    background: white;
    align-items: center;
    justify-content: flex-end;
}
.pagination > .page {
    display: flex;
    align-items: center;
}
.pagination > .text {
    margin: 0 16px;
}
</style>

<style>
.md-list + .pagination {
    margin-top: -8px;
}
.pagination > .page .md-select {
    width: auto;
    margin: 0 32px;
    font-size: 12px;
    min-width: 36px;
}
.pagination > .page .md-select-value {
    font-size: 12px;
}
</style>
