const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-result');

function useRequest (url) {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
    const height = document.querySelector('.pic_height').value;
    const width = document.querySelector('.pic_width').value;
  if ((height >= 100 && height <= 300) && (width >= 100 && width <= 300)) {
    const requestResult = await useRequest(`https://picsum.photos/${height}/${width}`);
    resultNode.innerHTML = `<img src='${requestResult}' alt='image'>`;
  }
  else {
    resultNode.innerHTML = `<span>одно из чисел вне диапазона от 100 до 300</span>`;
  }
  });