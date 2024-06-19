import axios from "axios";

const ncnewsAPI = axios.create({
  baseURL: "https://jakesnewsapi.onrender.com/api",
});

export const getTopics = () => {
  return ncnewsAPI
    .get("/topics")
    .then((res) => {
      return res.data.topic;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getAllArticles = () => {
  return ncnewsAPI
    .get("/articles")
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getArticleById = (article_id) => {
  return ncnewsAPI
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getCommentsByArticleId = (id) => {
  return ncnewsAPI
    .get(`/articles/${id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const postLike = (id, vote) => {
  return ncnewsAPI
    .patch(`/articles/${id}`, vote)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      console.error(
        "Error posting like:",
        err.response ? err.response.data : err.message
      );
    });
};

export const postComment = (numericalId, commentBody) => {
  console.log(numericalId, commentBody);
  return ncnewsAPI
    .post(`/articles/${numericalId}/comments`, commentBody)
    .then((res) => {
      console.log(res);
      return res.data.comment;
    })
    .catch((err) => {
      console.error(
        "Error posting comment:",
        err.response ? err.response.data : err.message
      );
    });
};

export const deleteComment = (numericalId) => {
  return ncnewsAPI
    .delete(`/comments/${numericalId}`)
    .then((res) => {
      console.log(res.data);
      return res.data.comment;
    })
    .catch((err) => {
      console.error(
        "Error deleting comment:",
        err.response ? err.response.data : err.message
      );
    });
};

export const getArticlesByTopics = (topic) => {
  return ncnewsAPI
    .get(`/articles?topic=${topic}`)
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getArticlesByDateAsc = () => {
  return ncnewsAPI
    .get(`/articles?sort_by=date&order=asc`)
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getArticlesByDateDsc = () => {
  return ncnewsAPI
    .get(`/articles?sort_by=date&order=desc`)
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getArticlesByCommentNoAsc = () => {
  return ncnewsAPI
    .get(`/articles?sort_by=comment_count&order=asc`)
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getArticlesByCommentNoDsc = () => {
  return ncnewsAPI
    .get(`/articles?sort_by=comment_count&order=desc`)
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getArticlesByVoteAsc = () => {
  return ncnewsAPI
    .get(`/articles?sort_by=votes&order=asc`)
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};

export const getArticlesByVoteDsc = () => {
  return ncnewsAPI
    .get(`/articles?sort_by=votes&order=desc`)
    .then((res) => {
      return res.data.allArticles;
    })
    .catch((err) => {
      "Error posting like:", err.response ? err.response.data : err.message;
    });
};