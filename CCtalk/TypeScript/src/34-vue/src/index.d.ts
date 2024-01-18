export {};

declare module "vue" {
  // 全局的方法
  interface ComponentCustomProperties {
    $get: (url: string) => Promise<any>; // 定义一个全局方法
  }

  interface ComponentCustomOptions {
    test?: (a: number, b: number) => number;
  }
}
