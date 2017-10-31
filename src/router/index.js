import Vue from 'vue'
import Router from 'vue-router'

import New from '@/views/New'
import Edit from '@/views/Edit'
import Home from '@/views/Home'
import Node from '@/views/Node'
import Rank from '@/views/Rank'
import List from '@/views/List'
import Topic from '@/views/Topic'
import Setting from '@/views/Setting'

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
            path: '/setting',
            component: Setting
        },
        {
            path: '/node/:name',
            component: List
        },
        {
            path: '/edit/:id',
            component: Edit
        },
        {
            path: '/topic/:id',
            component: Topic
        }
    ]
})
