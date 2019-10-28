export type PostsState = {
    posts?: [Post],
    articleDisplayed: boolean,
    currentArticle: PostArticle,
    loading: boolean
}

export type Post = {
    title: string,
    excerpt: string,
    teaser: string,
    date: Date,
    _id: string
}

export type PostArticle = {
    title: string,
    cover: string,
    date: Date,
    _id?: string,
    author?: string,
    excerpt: string,
    body: string
}

export type ArticleState = {
    text: string
  }
  
export type ArticleProps ={
    article: PostArticle,
  }