<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        // 节点信息
        info: Object
    },

    computed: {
        ...mapGetters([
            'nodeTitle'
        ])
    }
}
</script>

<template>
<md-card>
    <md-card-header>
        <md-card-header-text>
            <div class="md-title">{{ info.title }}</div>
            <div class="md-subhead">共有 349 个主题 &nbsp; 父节点为 {{ nodeTitle(info.parent) }}</div>
        </md-card-header-text>

        <md-menu md-size="4" md-direction="bottom left">
            <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
            </md-button>

            <md-menu-content>
                <md-menu-item>
                    <span>编辑</span>
                    <md-icon>phone</md-icon>
                </md-menu-item>

                <md-menu-item>
                    <span>删除节点</span>
                    <md-icon>message</md-icon>
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    </md-card-header>

    <md-card-content>
        节点的一些描述信息
    </md-card-content>
</md-card>
</template>

<style scoped>
.md-card {
    width: 100%;
}
</style>
