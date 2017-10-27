import Vue from 'vue'
import Router from 'vue-router'

import New from '@/views/New'
import Home from '@/views/Home'
import Node from '@/views/Node'
import List from '@/views/List'
import Rank from '@/views/Rank'
import Topic from '@/views/Topic'

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
            path: '/list',
            component: List
        },
        {
            path: '/rank',
            component: Rank
        },
        {
            path: '/topic/:id',
            component: Topic
        }
    ]
})
