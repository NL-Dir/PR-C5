const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-result');

let number = localStorage.getItem('prevNumber');
let limit = localStorage.getItem('prevLimit');
console.log(number, limit);

function useRequest (url) {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => { return json; })
      .catch(() => { console.log('error') });
  }

  function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
      `;
      cards = cards + cardBlock;
    });
      
    resultNode.innerHTML = cards;
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const number = localStorage.getItem('prevNumber');
    const limit = localStorage.getItem('prevLimit');

    if (number && limit) {
     console.log("success");
    const requestResult = await useRequest(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`);
    displayResult(requestResult); 
  }
  });


btn.addEventListener('click', async () => {
    const number = document.querySelector('.page_number').value;
    const limit = document.querySelector('.limit').value;
  
    if ((isNaN(number) || (number < 1 || number > 10)) && isNaN(limit) || (limit < 1 || limit > 10)) {
        resultNode.innerHTML = `<span>Номер страницы и лимит вне диапазона от 1 до 10</span>`;}
    else if (isNaN(number) || (number < 1 || number > 10)) {
        resultNode.innerHTML = `<span>Номер страницы вне диапазона от 1 до 10</span>`;}
    else if (isNaN(limit) || (limit < 1 || limit > 10)) {
        resultNode.innerHTML = `<span>Номер страницы вне диапазона от 1 до 10</span>`;}
    else {
    const requestResult = await useRequest(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`);
    displayResult(requestResult);
    localStorage.setItem('prevNumber', number);
    localStorage.setItem('prevLimit', limit);  
  }
  });

