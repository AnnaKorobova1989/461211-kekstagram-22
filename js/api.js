const API_URL = 'https://22.javascript.pages.academy/kekstagram';

export const getData = (onSuccsess, onError) => {
  return fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccsess(data);
    })
    .catch((err) => {
      onError(err);
    })
}


export const sendData = (onSuccess, onError, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch((err) => {
      onError(err);
    });
};
