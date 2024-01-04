interface Loading {
  title?: string;
  needLoadingRequestCount?: number;
}

/**
 * @description: 全局loading
 * @returns {Loading}
 */
export const createLoad = class createLoad {
  needLoadingRequestCount: number;
  title: string;
  constructor(params?: Loading) {
    const { needLoadingRequestCount = 0, title = "加载中..." } = params as Loading;
    this.needLoadingRequestCount = needLoadingRequestCount;
    this.title = title;
  }
  showLoading(isLoading: boolean) {
    if (isLoading) {
      this.needLoadingRequestCount++;
      if (this.needLoadingRequestCount === 1) {
        const toast = uni.showLoading({
          title: this.title
        });
        return toast;
      }
    }
  }
  cancelLoading() {
    if (this.needLoadingRequestCount <= 0) return;
    this.needLoadingRequestCount--;
    uni.hideLoading();
  }
};
export const globalLoading = new createLoad();
