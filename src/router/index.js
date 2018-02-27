import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import train from './../components/train'
import personal from './../components/personal'
import mycircle from '../components/mycircle'
import index from './../components'
import traindetails from './../components/hottraining'
import trainlist from './../components/trainlist'
import trainRun from './../components/trainrun'
import trainWalk from './../components/trainwalk'
import trains from './../components/trains'
import trainRiding from './../components/trainriding'
import circlehot from './../components/circlehot'
import circlenearby from './../components/circlenearby'
import circlefollow from './../components/circlefollow'
import trainvideo from './../components/trainvideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/menu/train',
      name: 'train',
      component: train,
      redirect:'/menu/train/s',
      children: [
        {path: '/menu/train/run', component: trainRun, name: 'trainRun'},
        {path: '/menu/train/s', component: trains, name: 'trains'},
        {path: '/menu/train/walk', component: trainWalk, name: 'trainWalk'},
        {path: '/menu/train/riding', component: trainRiding, name: 'trainRiding'},
      ]
    },
    {
      path: '/menu/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/menu/circle',
      name: 'mycircle',
      component: mycircle,
      children: [
        {path: '/menu/circle/hot', component: circlehot, name: 'circlehot'},
        {path: '/menu/circle/nearby', component: circlenearby, name: 'circlenearby'},
        {path: '/menu/circle/follow', component: circlefollow, name: 'circlefollow'},
      ]

    },
    {
      path: '/menu/index',
      name: 'index',
      component: index
    },
    {
      path: '/traindetails/hottraining/:active',
      name: 'traindetails',
      component: traindetails
    },
    {path: '/trainlist/:active/video/:actives', component: trainvideo, name: 'trainvideo'},
    {
      path: '/trainlist/:active',
      name: 'trainlist',
      component: trainlist,

    }
  ]
})
