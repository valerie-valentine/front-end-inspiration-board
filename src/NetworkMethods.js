import axios from "axios";

const kBaseUrl = `${process.env.REACT_APP_BACKEND_URL}`;

const getAllBoards = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      return response.data.map(convertFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAllCards = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}/cards`)
    .then((response) => {
      return response.data.map(convertCardFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

const postCardApi = (boardId, data) => {
  return axios
    .post(`${kBaseUrl}/boards/${boardId}/cards`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateCardApi = (cardId, likeStatus) => {
  const endpoint = likeStatus ? "increase_likes" : "decrease_likes";
  return axios
    .patch(`${kBaseUrl}/cards/${cardId}/${endpoint}`)
    .then((response) => {
      return convertCardFromApi(response.data.card);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteCardApi = (cardId) => {
  return axios
    .delete(`${kBaseUrl}/cards/${cardId}`)
    .then(() => null)
    .catch((error) => {
      console.log(error);
    });
};

const convertFromApi = (apiBoard) => {
  const { id: boardId, ...board } = apiBoard;
  const newBoard = { boardId, ...board };
  return newBoard;
};

const convertCardFromApi = (apiCard) => {
  const { likes_count: likesCount, ...card } = apiCard;
  const newCard = { likesCount, ...card };
  return newCard;
};

export {
  kBaseUrl,
  getAllBoards,
  getAllCards,
  postCardApi,
  updateCardApi,
  deleteCardApi,
  convertFromApi,
  convertCardFromApi,
};
