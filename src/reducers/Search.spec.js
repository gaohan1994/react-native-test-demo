import Search, * as SearchFunc from './Search'

describe('开始测试Search Reducer', () => {
  describe('测试获取数据', () => {
    const initialState = {
      obj: {},
      arr: [],
    }
    let state
    it('如果没传入数据那么应该返回初始数据', () => {
      expect(Search(undefined, {})).toEqual(initialState.obj)
    })
    it('如果传入数据那么应该返回相同数据'  , () => {
      expect(Search({}, {type: 'RECEIVE_SEARCHDATA', data: [1,2,3]})).toEqual([1,2,3])
    });

  })

  describe('根据ID获取正在播放的音乐', () => {
      beforeEach( () => {
        state = Search({}, {
          type: 'RECEIVE_SEARCHDATA',
          data: {
            musics: [
              {id: 1, origin: 0, name: 'name1', user: 'user1'}
            ],
            arr: []
          }
        })
      })

      it('已经有数据候不传入数据返回元数据', () => {
        expect(Search(state, {})).toEqual({
          musics: [
            {id: 1, origin: 0, name: 'name1', user: 'user1'}
          ],
          arr: []
        })
      })
    })
})