<script>
import Card from './Card'
import Avatar from './Avatar'

import { mapState } from 'vuex'
import {
    MSG,
    USER_AVATAR, USER_SET_AVATAR, USER_REMOVE_AVATAR,
    USER_EDIT_PROFILE, USER_CHANGE_PASSWORD
} from '@/store/types'

export default {
    data: () => ({
        // 更改密码
        passwd: {}
    }),

    watch: {
        // 编辑资料
        editStatus (val) {
            if (val) {
                this.$store.dispatch(MSG, '成功保存资料')
            }
        },

        // 更改密码
        changeStatus (val) {
            if (val) {
                this.$store.dispatch(MSG, '更改密码成功')
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
            if (val) {
                this.$store.dispatch(MSG, '设置头像成功')
            }
        },

        // 移除头像
        'avatar.remove' (val) {
            if (val) {
                this.$store.dispatch(MSG, '移除头像成功')
            }
        }
    },

    methods: {
        // 提交信息
        edit () {
            this.validate('edit', () => this.$store.dispatch(USER_EDIT_PROFILE, this.userInfo))
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

        // 取消头像
        cancel () {
            this.$store.dispatch(USER_REMOVE_AVATAR)
        },

        // 更改密码
        change () {
            this.validate('change', () => this.$store.dispatch(USER_CHANGE_PASSWORD, this.passwd))
        },

        // 表单验证
        validate (s, fn) {
            this.$validator.validateAll(s).then(res => res && fn())
        }
    },

    computed: mapState({
        avatar: s => s.user.avatar,
        userInfo: s => s.user.info,
        editStatus: s => s.user.edit,
        changeStatus: s => s.user.change
    }),

    components: { Card, Avatar }
}
</script>

<template>
<div class="root">
    <Card title="编辑资料">
        <form novalidate @submit.stop.prevent="edit" data-vv-scope="edit">
            <md-input-container>
                <label>用户名</label>
                <md-input v-model="userInfo.name" readonly/>
            </md-input-container>
            <md-input-container>
                <label>电子邮箱</label>
                <md-input v-model="userInfo.email" readonly/>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('edit.tagline')}">
                <label>签名</label>
                <md-input
                    name="tagline"
                    v-model="userInfo.tagline"
                    v-validate="'min:3|max:30'"/>
                <span class="md-error" v-show="errors.has('edit.tagline')">{{ errors.first('edit.tagline') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('edit.website')}">
                <label>个人网站</label>
                <md-input
                    name="website"
                    v-model="userInfo.website"
                    v-validate="'min:3|max:30|url'"/>
                <span class="md-error" v-show="errors.has('edit.website')">{{ errors.first('edit.website') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('edit.intro')}">
                <label>个人简介</label>
                <md-textarea
                    name="intro"
                    v-model="userInfo.intro"
                    v-validate="'min:5|max:100'"/>
                <span class="md-error" v-show="errors.has('edit.intro')">{{ errors.first('edit.intro') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('edit.github')}">
                <label>GitHub</label>
                <md-input
                    name="github"
                    v-model="userInfo.github"
                    v-validate="'min:20|max:50|url'"/>
                <span class="md-error" v-show="errors.has('edit.github')">{{ errors.first('edit.github') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('edit.twitter')}">
                <label>Twitter</label>
                <md-input
                    name="twitter"
                    v-model="userInfo.twitter"
                    v-validate="'min:20|max:50|url'"/>
                <span class="md-error" v-show="errors.has('edit.twitter')">{{ errors.first('edit.twitter') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('edit.telegram')}">
                <label>Telegram</label>
                <md-input
                    name="telegram"
                    v-model="userInfo.telegram"
                    v-validate="'min:15|max:40|url'"/>
                <span class="md-error" v-show="errors.has('edit.telegram')">{{ errors.first('edit.telegram') }}</span>
            </md-input-container>
            <md-button type="submit" class="md-raised md-primary">保存修改</md-button>
        </form>
    </Card>

    <Card title="上传头像">
        <div slot="oper">
            <a @click="cancel" class="button">取消当前头像</a>
        </div>

        <div class="avatar" v-if="userInfo.avatar">
            <Avatar :user="userInfo" width="140" height="140"/>
            <Avatar :user="userInfo" width="40" height="40"/>
        </div>
        <div v-else>
            <p>当前还没有上传头像</p>
            <p>如果你在 <a href="https://cn.gravatar.com" target="_blank">Gravatar</a> 设置了头像，则会使用它，否则将为你绘制出默认的头像</p>
        </div>

        <form ref="avatar" novalidate @submit.stop.prevent="upload" data-vv-scope="none">
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
        <form novalidate @submit.stop.prevent="change" data-vv-scope="change">
            <md-input-container :class="{'md-input-invalid': errors.has('change.password')}">
                <label>当前密码</label>
                <md-input
                    required
                    type="password"
                    name="password"
                    v-model="passwd.password"
                    v-validate="'required|min:8|max:20|alpha_num'"/>
                <span class="md-error" v-show="errors.has('change.password')">{{ errors.first('change.password') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('change.new_password')}" md-has-password>
                <label>新密码</label>
                <md-input
                    required
                    type="password"
                    name="new_password"
                    v-model="passwd.new_password"
                    v-validate="'required|min:8|max:20|alpha_num'"/>
                <span class="md-error" v-show="errors.has('change.new_password')">{{ errors.first('change.new_password') }}</span>
            </md-input-container>
            <md-button type="submit" class="md-raised md-primary">保存修改</md-button>
        </form>
    </Card>
</div>
</template>

<style lang="scss" scoped>
.root {
    width: 100%;

    & > * + * {
        margin-top: 20px
    }
}

.same {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        color: gray;
    }
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

a.button {
    color: gray;
    padding: 0 8px;
    cursor: pointer;
    &:hover {
        color: gray;
    }
}
</style>
