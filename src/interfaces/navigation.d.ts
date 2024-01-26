interface Route {
  route: string
  ref: string
  anchor?: string
}

export interface Navigation {
  navigator: string
  routes: Route[]
  ref: string
}
