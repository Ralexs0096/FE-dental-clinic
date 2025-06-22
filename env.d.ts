/// <reference types="vite/client" />

// Add shims for Vue SFCs and path aliases
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<object, object, any>
  export default component
}

declare module '@/*'
declare module '@/pages/*'
declare module '@/layouts/*'
