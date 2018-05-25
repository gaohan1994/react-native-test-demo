class Music {

  constructor() {

  }
  /**
   * 根据音乐的ID fetchurl
   * http://qntest.huanmusic.com/
   * @memberof Hmusic
   */
  AntiTheftChain = (id) => {
      return fetch(`http://www-dev.huanmusic.com/qnsign/${id}`).then((res) => res.text());
  }

  /**
   * copy from WEB_2.0
   * 
   * @memberof Hmusic
   */
  checkMusic = async(arr) => {
    for (const i of arr) {
      
      /*
        每首音乐有一个数组组成，一个数组包含两个对象，具有相同的key名字 avInfo fsize 和key，value不同
        这里取第二个对象的后缀（一般是MP3）
      */
      const type = i.key.split('.')[1];
      console.log(`your music type is ${type}`)

      /*
        使用从父组件拿回来的异步函数，并传入key，得到返回的key
        该函数在App.js中，根据传入的key用fetch访问，返回 访问到的text，就是音乐的url
      */
      console.log('i.key', i.key)
      // const key = await this.AntiTheftChain(i.key);
      return i.key;
    }
  }

  /**
   * 异步发送搜索数据请求
   * 
   * @param {String} value 
   */
  searchData = async (value) => {
    //http://www-dev.huanmusic.com/api/search?kw=${value}
    //https://api.douban.com/v2/movie/us_box
    const response = fetch(`http://www-dev.huanmusic.com/api/search?kw=${value}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .catch( e => console.log(e));

    const Data = await response;
    return {data: Data}
  }


  test = async (data) => {
    const Text = await data.toString()
    return {data: Text};
  }
}

export default new Music();

