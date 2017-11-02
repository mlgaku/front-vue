<script>
import Card from '@/components/Card'
import UserHome from '@/components/UserHome'

import { mapState, mapGetters } from 'vuex'
import { USER_HOME } from '@/store/types'

export default {
    watch: {
        name: {
            handler (val) {
                if (val) {
                    this.$store.dispatch(USER_HOME, val)
                }
            },
            immediate: true
        }
    },

    computed: {
        // 用户名
        name () {
            return this.$route.params.name
        },
        ...mapState({
            userHome: s => s.user.home
        }),
        ...mapGetters([
        ])
    },

    components: { Card, UserHome }
}
</script>

<template>
<md-layout md-align="center">
    <md-layout md-flex="65">
        <md-layout class="main" md-gutter="16">
            <md-layout md-flex="75">
                <!-- 用户信息 -->
                <UserHome :info="userHome"/>
            </md-layout>
            <md-layout md-flex="25">
                <!-- 卡片 -->
                <Card title="热门节点">
                    这里是一些测试的文字内容
                </Card>
            </md-layout>
        </md-layout>
    </md-layout>
</md-layout>
</template>

<style scoped>
.main {
    align-items: flex-start;
}
.main > .md-layout {
    padding-top: 20px;
    padding-bottom: 20px;
}
.main .md-layout > * + * {
    margin-top: 20px;
}
</style>
