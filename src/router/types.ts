import type { Component } from 'vue'

export enum Paths {
  Home = '/',
  Genetics = '/genetics',
}

export interface Route {
  path: Paths
  name: string
  component: Component
}
