<script>
import Card from './Card'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'nodeList'
        ])
    },

    components: { Card }
}
</script>

<template>
<div class="root">
    <Card v-for="x in nodeList" :key="x.id" :title="x.title">
        <div slot="oper">
            <md-button class="md-icon-button" @click="$emit('remove', x.id)">
                <md-icon>remove</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="$emit('add', x.id)">
                <md-icon>add</md-icon>
            </md-button>
        </div>
        <div class="list">
            <router-link
                v-for="c in x.child"
                :key="c.id"
                :to="`/node/${c.name}`"
            >{{ c.title }}</router-link>
        </div>
    </Card>
</div>
</template>

<style scoped>
.root {
    width: 100%;
}
.root > * {
    margin-top: 20px;
}
.list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.list a {
    color: black;
    font-size: 12px;
    padding: 3px 10px;
    margin: 2px 5px;
    border-radius: 20px;
    border: 1px solid #e0e0e0;
}
.list a:hover {
    color: black;
    background: #e0e0e0;
    text-decoration: none;
}
.md-button {
    margin: 0;
    color: rgba(0, 0, 0, 0.54);
}
</style>
