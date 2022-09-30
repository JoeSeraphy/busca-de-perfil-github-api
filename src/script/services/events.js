import { baseUrl, repositoriesQunatity } from "../variables.js";

async function getEvents(userName) {
  const events = await fetch(
    `${baseUrl}/${userName}/events?per_page=${repositoriesQunatity}`
  );
  console.log(events);
  return await events.json();
}

export { getEvents };
