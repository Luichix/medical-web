declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_HTTP_GRAPHQL_ENDPOINT: string
    NEXT_PUBLIC_WS_GRAPHQL_ENDPOINT: string
    NODE_ENV: 'development' | 'production'
    PORT?: string
    PWD: string
  }
}
