<script>
import Pagination from './Pagination'

import { mapGetters } from 'vuex'

export default {
    props: {
        // 当前页
        page: Number,
        // 总页数
        total: Number,
        // 主题列表
        list: Array,
        // 不显示头像
        noavt: Boolean
    },

    computed: {
        ...mapGetters([
            'date',
            'nodeTitle',
            'avatarURL'
        ])
    },

    components: { Pagination }
}
</script>

<template>
<md-whiteframe md-elevation="2">
    <!-- 列表 -->
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="x in list" :key="x.id">
            <md-avatar v-if="!noavt">
                <img :src="avatarURL(x.user)">
            </md-avatar>

            <div class="md-list-text-container">
                <router-link :to="`/topic/${x.id}`">{{ x.title }}</router-link>
                <div>
                    <!-- 用户名 -->
                    {{ x.user.name ? `${x.user.name} •` : '' }}
                    <!-- 节点名 -->
                    {{ nodeTitle(x.node) }} •
                    <!-- 回复时间 -->
                    <span :title="x.date">{{ date(x.date) }}</span>
                    <!-- 最后回复 -->
                    {{ x.last_reply ? `• 最后回复来自 ${x.last_reply}` : '' }}
                </div>
            </div>

            <md-button class="md-icon-button">{{ x.replies }}</md-button>

            <md-divider class="md-inset" :class="{noavt: noavt}"></md-divider>
        </md-list-item>
    </md-list>

    <!-- 分页器 -->
    <Pagination
        :page="page"
        :total="total"
        v-if="total > 1"
        @onpage="$emit('onpage', arguments[0])"/>
</md-whiteframe>
</template>

<style scoped>
.noavt {
    margin-left: 0;
}
.md-whiteframe {
    width: 100%;
}
.md-icon-button {
    padding: 0;
    height: 20px;
    color: white;
    font-size: 12px;
    min-width: auto;
    min-height: auto;
    background: #a7a7a7;
    border-radius: 100px;
    line-height: normal;
}
.md-icon-button:hover {
    background: #928f8f !important;
}
.md-list-text-container div {
    margin-top: 10px;
}
.md-list-text-container > a {
    color: rgba(0, 0, 0, .87) !important;
}
</style>
