<script>
import Marked from './Marked'
import Pagination from './Pagination'
import { mapGetters } from 'vuex'

export default {
    props: {
        // 每页数量
        per: Number,
        // 当前页
        page: Number,
        // 总页数
        total: Number,
        // 回复列表
        list: Array,
        // 不显示头像
        noavt: Boolean
    },

    computed: mapGetters([
        'date',
        'avatarURL'
    ]),

    components: { Marked, Pagination }
}
</script>

<template>
<md-whiteframe md-elevation="2">
    <!-- 列表 -->
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="(x, i) in list" :key="x.id" class="reply-list">
            <md-avatar v-if="!noavt">
                <img :src="avatarURL(x.user)">
            </md-avatar>

            <div class="md-list-text-container">
                <div class="meta">
                    <div class="base">
                        <router-link v-if="x.user.name" :to="`/user/${x.user.name}`">{{ x.user.name }}</router-link>
                        <span class="badge" v-if="x.user.identity > 0">{{ x.user.identity === 2 ? 'FOU' : 'MOD' }}</span>
                        <span class="date" :title="x.date">{{ date(x.date) }}</span>
                    </div>
                    <div class="badge">
                        {{ (page - 1) * per + i + 1 }}
                    </div>
                </div>
                <div class="content">
                    <Marked :content="x.content"/>
                </div>
            </div>

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
.badge {
    color: white;
    font-size: 12px;
    line-height: 1;
    min-width: 22px;
    padding: 0px 4px;
    border-radius: 5px;
    text-align: center;
}

.meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.meta > .badge {
    background: #a7a7a7;
}
.meta .base > a {
    margin-right: 10px;
}
.meta .base > .badge {
    margin-left: -5px;
    margin-right: 10px;
    background: #53aef6;
}
.meta .base > .date {
    color: gray;
    font-size: 13px;
}
.content {
    margin-top: 3px;
    white-space: normal;
}
.md-whiteframe {
    width: 100%;
}
</style>

<style>
.reply-list.md-list-item > div.md-list-item-container {
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: flex-start;
    min-height: auto !important;
}
.reply-list.md-list-item > div.md-list-item-container > .md-avatar {
    margin-top: 6px;
}
</style>
