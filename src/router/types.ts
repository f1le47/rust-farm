import type { Component } from 'vue'

export enum Paths {
  Home = '/',
  Genetics = '/genetics',
  Raids = "/raids"
}

export interface Route {
  path: Paths
  name: string
  component: Component
}
