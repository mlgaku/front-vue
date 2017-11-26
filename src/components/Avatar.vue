<script>
import { Draw, Crc32 } from '@/utils'
import { mapGetters } from 'vuex'

export default {
    props: {
        // 用户信息
        user: Object
    },

    computed: mapGetters([
        'avatarURL'
    ]),

    directives: {
        avatar: (el, binding) => {
            const { url, name, avatar } = binding.value
            if (name === undefined) {
                return
            }

            if (avatar === true) {
                el.src = url
                return
            }

            fetch(url)
            .then(res => res.blob())
            .then(blob => {
                const reader = new FileReader()
                reader.onload = () => {
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
<img v-avatar="{ url: avatarURL(user), name: user.name, avatar: user.avatar }"/>
</template>
