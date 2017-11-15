<script>
export default {}
</script>

<template>
<md-speed-dial md-open="hover" md-direction="top" class="md-fab-bottom-right">
    <md-button class="md-fab" md-fab-trigger onclick="window.scrollTo(0,0)">
        <md-icon md-icon-morph>keyboard_arrow_up</md-icon>
        <md-icon>add</md-icon>
    </md-button>

    <router-link to="/new" class="md-button md-fab md-primary md-mini md-clean md-theme-default">
        <md-icon>note_add</md-icon>
    </router-link>

    <md-button class="md-fab md-primary md-mini md-clean">
        <md-icon>alarm_add</md-icon>
    </md-button>
</md-speed-dial>
</template>

<style scoped>
.md-speed-dial {
    position: fixed;
    right: 70px;
    bottom: 70px;
}
</style>
