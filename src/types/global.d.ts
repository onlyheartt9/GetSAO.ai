declare global {
    interface Window {
      // 添加你需要的属性和方法
      gtag: (...args: any[]) => void;
    }
  }
  
  // 确保这个文件被当作模块处理
  export {};