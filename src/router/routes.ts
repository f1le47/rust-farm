import { Paths, type Route } from './types'
import HomeView from '@/views/HomeView.vue'
import GeneticsView from '@/views/GeneticsView.vue'
import RaidsView from '@/views/RaidsView.vue'

export const routes: Route[] = [
  {
    path: Paths.Home,
    name: 'Home',
    component: HomeView,
  },
  {
    path: Paths.Genetics,
    name: 'Genetics',
    component: GeneticsView,
  },
  {
    path: Paths.Raids,
    name: 'Raids',
    component: RaidsView
  }
]
