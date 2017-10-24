<script>
import Card from './Card'
import InputBox from './InputBox'

export default {
    data: () => ({
        // 显示模态框
        show: false,
        // 子节点名
        name: '',
        // 子节点标题
        title: ''
    }),

    methods: {

    },

    components: { Card, InputBox }
}
</script>

<template>
<div class="root">
    <Card title="全部节点">
        共有 3 个父节点, 22 个子节点
    </Card>
    <Card title="分享探索">
        <div slot="oper">
            <md-button class="md-icon-button">
                <md-icon>remove</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="show = true">
                <md-icon>add</md-icon>
            </md-button>
        </div>
        <ul class="list">
            <li>问与答</li>
            <li>分享发现</li>
            <li>分享创造</li>
            <li>分享邀请码</li>
            <li>自言自语</li>
            <li>奇思妙想</li>
            <li>随想</li>
            <li>设计</li>
            <li>Blog</li>
            <li>问与答</li>
            <li>分享发现</li>
            <li>分享创造</li>
            <li>分享邀请码</li>
            <li>自言自语</li>
            <li>奇思妙想</li>
            <li>随想</li>
            <li>设计</li>
            <li>Blog</li>
            <li>问与答</li>
            <li>分享发现</li>
            <li>分享创造</li>
            <li>分享邀请码</li>
            <li>自言自语</li>
            <li>奇思妙想</li>
            <li>随想</li>
            <li>设计</li>
            <li>Blog</li>
        </ul>
    </Card>
    <!-- 模态框 -->
    <InputBox :show="show" title="添子节点" @close="show = false">
        <form>
            <md-input-container>
                <label>名称</label>
                <md-input v-model="name" required></md-input>
            </md-input-container>
            <md-input-container>
                <label>标题</label>
                <md-input v-model="title" required></md-input>
            </md-input-container>
        </form>
    </InputBox>
</div>
</template>

<style scoped>
.root {
    width: 100%;
}
.list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: flex-start;
}
.list li {
    padding: 3px 10px;
    font-size: 12px;
    margin: 2px 5px;
    border-radius: 20px;
    border: 1px solid #e0e0e0;
}
.list li:hover {
    background: #e0e0e0;
}
.md-button {
    margin: 0;
    color: rgba(0, 0, 0, 0.54);
}
</style>
