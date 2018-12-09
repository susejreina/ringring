export function PostData(type, userData) {
  let BaseUrl = 'http://localhost:3001/api/';

  return new Promise((resolve, reject) => {
    fetch(BaseUrl+type, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
    }
  );
}
