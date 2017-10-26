<script>
export default {}
</script>

<template>
<md-menu md-size="7" md-direction="bottom left" md-align-trigger ref="menu">
    <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>notifications</md-icon>
    </md-button>

    <md-menu-content class="notice">
        <div class="card">通知</div>
        <md-menu-item>
            <div class="text">sxyazi 在主题 <a href="#">无奈,感慨一下,中国程序员的普遍平均网络知识(技能)可能在世界前列</a> 中 At 了你</div>
            <md-button class="md-icon-button">
                <md-icon>delete</md-icon>
            </md-button>
        </md-menu-item>
        <md-menu-item>
            <div class="text">sxyazi 在主题 <a href="#">无奈,感慨一下,中国程序员的普遍平均网络知识(技能)可能在世界前列</a> 中 At 了你</div>
            <md-button class="md-icon-button">
                <md-icon>delete</md-icon>
            </md-button>
        </md-menu-item>
        <md-menu-item>
            <div class="text">sxyazi 在主题 <a href="#">无奈,感慨一下,中国程序员的普遍平均网络知识(技能)可能在世界前列</a> 中 At 了你</div>
            <md-button class="md-icon-button">
                <md-icon>delete</md-icon>
            </md-button>
        </md-menu-item>
        <md-menu-item>
            <div class="text">sxyazi 在主题 <a href="#">无奈,感慨一下,中国程序员的普遍平均网络知识(技能)可能在世界前列</a> 中 At 了你</div>
            <md-button class="md-icon-button">
                <md-icon>delete</md-icon>
            </md-button>
        </md-menu-item>
        <md-menu-item>
            <div class="text">sxyazi 在主题 <a href="#">无奈,感慨一下,中国程序员的普遍平均网络知识(技能)可能在世界前列</a> 中 At 了你</div>
            <md-button class="md-icon-button">
                <md-icon>delete</md-icon>
            </md-button>
        </md-menu-item>
        <md-menu-item>
            <div class="text">sxyazi 在主题 <a href="#">无奈,感慨一下,中国程序员的普遍平均网络知识(技能)可能在世界前列</a> 中 At 了你</div>
            <md-button class="md-icon-button">
                <md-icon>delete</md-icon>
            </md-button>
        </md-menu-item>
    </md-menu-content>
</md-menu>
</template>

<style>
.notice .md-menu-item > button.md-button { display: none; }
.notice .md-menu-item .md-list-item-container { cursor: default; }
</style>

<style scoped>
.card {
    padding: 16px;
    font-size: 16px;
    font-weight: 400;
    background: #f1f1f1;
    margin-top: -8px;
    margin-bottom: 8px;
}
.md-menu {
    display: flex;
    align-items: center;
}
.md-menu-item div.text {
    font-size: 13px;
    line-height: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    white-space: normal;
    word-wrap: break-word;
}
</style>
