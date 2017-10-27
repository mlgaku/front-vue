import Vue from 'vue'
import Router from 'vue-router'

import New from '@/views/New'
import Home from '@/views/Home'
import Node from '@/views/Node'
import Rank from '@/views/Rank'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/new',
            component: New
        },
        {
            path: '/node',
            component: Node
        },
        {
            path: '/rank',
            component: Rank
        },
        {
            path: '/topic/:id',
            component: Rank
        }
    ]
})
