<script>
import { Draw, Crc32 } from '@/utils'
import { mapGetters } from 'vuex'

export default {
    props: {
        // 用户信息
        user: Object
    },

    computed: {
        id () {
            return `avatar-${this.user.name}-${Math.random()}`
        },
        ...mapGetters([
            'avatarURL'
        ])
    },

    directives: {
        avatar: (el, binding) => {
            const { id, url, name, avatar } = binding.value
            if (avatar === true) {
                el.src = url
                return
            }

            fetch(url)
            .then(res => res.blob())
            .then(blob => {
                const reader = new FileReader()
                reader.onload = () => {
                    const el = document.getElementById(id)
                    if (!el) {
                        return
                    }

                    const data = reader.result
                    if (Crc32(data) === 2137162192) {
                        el.src = Draw(name)
                    } else {
                        el.src = `data:image/jpeg;base64,${btoa(data)}`
                    }
                }
                reader.readAsBinaryString(blob)
            })
        }
    }
}
</script>

<template>
<img :id="id" v-avatar="{ id, url: avatarURL(user), name: user.name, avatar: user.avatar }"/>
</template>
