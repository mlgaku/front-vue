<script>
import Card from './Card'

import { Beat } from '@/utils'
import { mapState, mapGetters } from 'vuex'
import { MSG, USER_AVATAR, USER_SET_AVATAR, USER_EDIT_PROFILE } from '@/store/types'

export default {
    data: () => ({
        // 更改密码
        passwd: {
        }
    }),

    watch: {
        // 编辑资料
        editStatus (val) {
            if (Beat(val)) {
                this.$store.dispatch(MSG, '成功保存资料')
            }
        },

        // 得到token后上传文件
        'avatar.token' (val) {
            if (val === '') {
                return
            }

            const fd = new FormData(this.$refs.avatar)
            fd.append('key', this.avatar.file)
            fd.append('token', this.avatar.token)
            this.avatar.token = ''

            fetch('https://up.qbox.me', {
                body: fd,
                method: 'POST'
            })
            .then(res => res.json())
            .then(data => {
                if (data.error !== undefined) {
                    this.$store.dispatch(MSG, `上传失败: ${data.error}`)
                    return
                }

                if (data.hash === undefined) {
                    this.$store.dispatch(MSG, `上传失败: 未知错误`)
                    return
                }

                this.$store.dispatch(USER_SET_AVATAR)
            })
        },

        // 设置头像
        'avatar.set' (val) {
            if (Beat(val)) {
                this.$store.dispatch(MSG, '设置头像成功')
            }
        },

        // 移除头像
        'avatar.remove' (val) {
            if (Beat(val)) {
                this.$store.dispatch(MSG, '移除头像成功')
            }
        }
    },

    methods: {
        // 提交信息
        edit () {
            this.$store.dispatch(USER_EDIT_PROFILE, this.userInfo)
        },

        // 上传头像
        upload () {
            const input = this.$refs.avatar.querySelector('input[type="file"]')
            if (!input.files[0]) {
                this.$store.dispatch(MSG, '请选择要上传的图片')
                return
            }
            if (input.files[0].size > 1048576) {
                this.$store.dispatch(MSG, '请选择 1M 以内的文件')
                return
            }

            this.$store.dispatch(USER_AVATAR)
        },

        // 更改密码
        change () {

        }
    },

    computed: {
        avatarURL () {
            return this.userAvatar + '?' + this.avatar.set
        },
        ...mapState({
            avatar: s => s.user.avatar,
            userInfo: s => s.user.info,
            editStatus: s => s.user.edit
        }),
        ...mapGetters([
            'userAvatar'
        ])
    },

    components: { Card }
}
</script>

<template>
<div class="root">

    <Card title="编辑资料">
        <form novalidate @submit.stop.prevent="edit">
            <md-input-container>
                <label>用户名</label>
                <md-input v-model="userInfo.name" readonly/>
            </md-input-container>
            <md-input-container>
                <label>电子邮箱</label>
                <md-input v-model="userInfo.email" readonly/>
            </md-input-container>
            <md-input-container>
                <label>签名</label>
                <md-input v-model="userInfo.tagline"/>
            </md-input-container>
            <md-input-container>
                <label>个人网站</label>
                <md-input v-model="userInfo.website"/>
            </md-input-container>
            <md-input-container>
                <label>个人简介</label>
                <md-textarea v-model="userInfo.intro"></md-textarea>
            </md-input-container>
            <md-button type="submit" class="md-raised md-primary">保存修改</md-button>
        </form>
    </Card>

    <Card title="上传头像">
        <div class="avatar" v-if="userInfo.avatar">
            <img :src="avatarURL" width="140" height="140">
            <img :src="avatarURL" width="40" height="40">
        </div>
        <div v-else>
            当前还没有上传头像
        </div>
        <form ref="avatar" novalidate @submit.stop.prevent="upload">
            <md-input-container>
                <label>选择图片</label>
                <md-file required name="file" accept="image/*"/>
            </md-input-container>
            <div class="same">
                <span>修改后可能不会立即生效, 可以尝试清除浏览器缓存查看效果</span>
                <md-button type="submit" class="md-raised md-primary">保存修改</md-button>
            </div>
        </form>
    </Card>

    <Card title="更改密码">
        <form novalidate @submit.stop.prevent="change">
            <md-input-container>
                <label>当前密码</label>
                <md-input type="password"/>
            </md-input-container>
            <md-input-container md-has-password>
                <label>新密码</label>
                <md-input type="password"/>
            </md-input-container>
            <md-button type="submit" class="md-raised md-primary">保存修改</md-button>
        </form>
    </Card>

</div>
</template>

<style scoped>
.root {
    width: 100%;
}
.same {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.same span {
    color: gray;
}
.root > * + * {
    margin-top: 20px
}
.avatar img + img {
    margin-left: 10px;
    vertical-align: bottom;
}
form {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
</style>
