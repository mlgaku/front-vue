<script>
export default {}
</script>

<template>
<md-speed-dial md-open="hover" md-direction="top" class="md-fab-bottom-right">
    <md-button class="md-fab" md-fab-trigger onclick="scroll(0,0)">
        <md-icon md-icon-morph>keyboard_arrow_up</md-icon>
        <md-icon>add</md-icon>
    </md-button>

    <md-button class="md-fab md-primary md-mini md-clean">
        <router-link to="/new"><md-icon>note_add</md-icon></router-link>
    </md-button>

    <md-button class="md-fab md-primary md-mini md-clean">
        <md-icon>alarm_add</md-icon>
    </md-button>
</md-speed-dial>
</template>

<style scoped>
.md-fab a,
.md-fab a:hover {
    color: rgba(255, 255, 255, .87);
}
.md-speed-dial {
    right: 70px;
    bottom: 70px;
}
</style>
