import axios from 'axios';

const ncnewsAPI= axios.create({
    baseURL: "https://jakesnewsapi.onrender.com/api",
  });

  export const getTopics = () => {
    return ncnewsAPI.get('/topics')
    .then((res) => {
      return res.data.topic;
    }).catch((err) => {
      console.log(err);
    })
  }

  export const getAllArticles = () => {
    return ncnewsAPI.get('/articles')
    .then((res) => {
      return res.data.allArticles;
    }).catch((err) => {
      console.log(err);
    })
  }

  export const getArticleById = (article_id) => {
    return ncnewsAPI.get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    }).catch((err) => {
      console.log(err);
    })
  }

  export const getCommentsByArticleId = (id) => {
    return ncnewsAPI.get(`/articles/${id}/comments`)
    .then((res) => {
      return res.data.comments;
    }).catch((err) => {
      console.log(err);
    })
  }

