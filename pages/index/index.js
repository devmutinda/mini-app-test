Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    my.setNavigationBar({
      title: 'TEST',
      backgroundColor: '#1074FF',
    });
  },
  onShow() {
    my.showLoading();
    setTimeout(() => {
      my.hideLoading();
      this.navigateToHome();
    }, 3000)
  },

  navigateToHome() {
    my.navigateTo({
      url: '/pages/home/home?param=demas&message=learning',
    });
  }
});
