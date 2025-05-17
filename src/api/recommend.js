import http from '@/utils/http'

export const getBanner = () => {
  return http.get('/banner/0')
}

// 热门歌单分类
export const getHotCategories = () => {
  return http.get('/playlist/hot')
}

// 获取推荐的歌单
export const getRecommendPlayList = (params) => {
  return http.get('/top/playlist', {
    params
  })
}
