import Song from './Song'

describe('song Reducer开始jest', () => {
  let state;
  it('保存传入的song', ()=> {
    expect(Song(state, {type: 'CHECK_SONG', data: {url: 'asd', name: 'asd'}})).toEqual({url: 'asd', name: 'asd'})
  })
})