/// <reference types="vite/client" />


//2024-2-25 解决波浪线
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const vueComponent: DefineComponent<{}, {}, any>
    export default vueComponent
  }

declare module '*./router' {
  import type { DefineComponent } from 'vue-router'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router'

declare module "file-saver";

// <reference types="vite/client" />
// 解决引入vue的报错
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 解决引入scss报错问题
declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

/* 
  解决axios报错：类型“{ params: any; "": any; }”的参数不能赋给类型“AxiosRequestConfig<any>
  解决：属性“xxxxx”在类型”{ $: ComponentInternalInstance; $data : {}; $props:Part......报错问题
  */
declare module "axios" {
  export interface AxiosRequestConfig {
    // 添加数据类型
    handlerEnabled?: boolean;
    baseURL: string;
    timeout: number;
    headers?:object;
  }
}

// 处理TS数据类型问题  类型“AxiosResponse<any, any>”上不存在属性“meta”。
declare module "axios" {
  interface AxiosResponse<T = any> {
    meta: any;
    // 这里追加你的参数
    baseURL?: string;
    timeout?: number;
    headers?:object;
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

