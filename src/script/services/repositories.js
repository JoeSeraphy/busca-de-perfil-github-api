import { baseUrl, repositoriesQunatity } from "../variables.js";

async function getRepositories(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${repositoriesQunatity}`
  );
  return await response.json();
}

export { getRepositories };
