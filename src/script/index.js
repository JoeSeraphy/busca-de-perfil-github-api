import { getUser } from "./services/users.js";
import { getRepositories } from "./services/repositories.js";
import { getEvents } from "./services/events.js";

import { screen } from "./objects/screen.js";
import { user } from "./objects/users.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (validadeEmptyInput(userName)) return;
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const userEnterPress = key === 13;

  if (userEnterPress) {
    if (validadeEmptyInput(userName)) return;
    getUserData(userName);
  }
});

function validadeEmptyInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub");
    return true;
  }
}

async function getUserData(userName) {
  const userResponse = await getUser(userName);
  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const userEvents = await getEvents(userName);

  const repositoriesResponse = await getRepositories(userName);

  user.setInfo(userResponse);
  user.setEvents(userEvents);
  user.setRepositories(repositoriesResponse);

  screen.renderUser(user);
}
