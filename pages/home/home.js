Page({
  data: {
    message: 'Hello world!',
    list: [
      {
        name: 'Hello world',
        id: 1,
      },
      {
        name: 'Learning JS',
        id: 2,
      },
      {
        name: 'Lorem ipsum',
        id: 3,
      },
    ]
  },
  onLoad(params) {
    console.log(params);
    my.setNavigationBar({
      title: 'HOME',
    });
  },
  
  handleTap(e) {
    console.log(e);
    // my.alert({
    //   title: 'ERROR',
    //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    //   buttonText: 'OK',
    //   success: (res) => {
    //     console.log(res);
        
    //   },
    //   fail: () => {
        
    //   },
    //   complete: () => {
        
    //   }
    // });
    my.confirm({
      title: 'CONFIRM',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      confirmButtonText: 'OK',
      cancelButtonText: 'CANCEL',
      success: (res) => {
        console.log('Success',res);
        const { confirm } = res;
        if(confirm) {
          my.navigateTo({
            url: '/pages/other/other',
          });
        }
      },
    });
  },

  itemTapped(event) {
    console.log(event);
    const { id } = event.currentTarget;
    const { list } = this.data;
    this.setData({
      message: list[parseInt(id)].name,
    });
    // const { list } = this.data;

    // const value = list.find(elem => elem.id == id);

    // this.setData({
    //   message: value.name,
    // });
  },

  printMessage(params) {
    console.log('Hello');
    console.log(this.data.message);
    this.setData({
      message: `${params.param} is ${params.message}`,
    });
  }
});
