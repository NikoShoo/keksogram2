export const getData = () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((answer) => {
    if (!answer.ok) {
      throw new Error('Внимание ОШИБОЧКА!');
    }
    return answer.json();
  });
// .catch((error) => {
//   throw new Error(error);
// })

