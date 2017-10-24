<script>
import Toolbar from '@/components/Toolbar'

export default {
    components: { Toolbar }
}
</script>

<template>
    <div>
        <!-- 头部 -->
        <Toolbar/>

        <md-layout md-align="center">
            <md-layout md-flex="65">
                <md-layout class="main" md-gutter="16">
                    <md-layout md-flex="75">
                        左侧
                    </md-layout>
                    <md-layout md-flex="25">
                        右侧
                    </md-layout>
                </md-layout>
            </md-layout>
        </md-layout>

    </div>
</template>

<style scoped>
.main {
    align-items: flex-start;
}
</style>