<script>
export default {}
</script>

<template>
<md-menu md-size="4" md-direction="bottom left" md-align-trigger ref="menu">
    <md-button class="md-icon-button" md-menu-trigger>
        <img src="http://vuematerial.io/assets/marcosmoura.jpg">
    </md-button>

    <md-menu-content>
        <div class="author-card">
            <md-avatar class="md-large">
                <img src="http://vuematerial.io/assets/marcosmoura.jpg">
            </md-avatar>
            <div class="author-card-info">
                <span>sxyazi</span>
                <div class="author-card-links">
                    <a>sxyazi@gmail.com</a>
                </div>
            </div>
        </div>
        <md-menu-item>余额</md-menu-item>
        <md-menu-item>设置</md-menu-item>
        <md-menu-item>退出</md-menu-item>
    </md-menu-content>
</md-menu>
</template>

<style scoped>
.author-card {
    display: flex;
    padding: 8px 16px;
    align-items: center;
    background: #f1f1f1;
    margin-top: -8px;
    margin-bottom: 8px;
}
.md-large {
    width: 40px;
    height: 40px;
    min-width: auto;
    min-height: auto;
    border-radius: 50%;
}
.md-avatar {
    margin-right: 16px;
}
.author-card span {
    font-size: 16px;
}
.author-card-info {
    flex: 1;
    display: flex;
    flex-flow: column;
}
.author-card-links {
    display: flex;
}
.md-icon-button {
    padding: 3px;
    box-sizing: content-box;
}
.md-icon-button img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
</style>
