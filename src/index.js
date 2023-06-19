import './style.css';

const gameID = 'lbiRP4qGSp6Pffahuzll';

const postScore = async (name, score) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        "user": name,
        "score": score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const getScores = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`);
  const json = await response.json();
  return json.result;
};

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  let name = document.getElementById('name');
  let score = document.getElementById('scoreinput');
  postScore(name.value, score.value);
  name.value = '';
  score.value = '';
});

const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', () => {
  render();
});

const render = () => {
  const scores = getScores();
  const table = document.getElementById('entries');
  table.innerHTML = '';
  scores.then((result) => {
    result.forEach((score) => {
      table.innerHTML += `<li>${score.user}: ${score.score}</li>`;
    });
  });
};

render();
