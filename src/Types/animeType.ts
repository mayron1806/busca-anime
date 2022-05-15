type AnimeType = {
  title: string,
  url: string,
  images: {
    jpg :{
      image_url: string
      large_image_url: string
      small_image_url: string
    }
  },
  synopsis: string,
  rank: number,
  trailer: {
    url: string
  }
}
export default AnimeType;