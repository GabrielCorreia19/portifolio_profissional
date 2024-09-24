
async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/GabrielCorreia19/portifolio_profissional/refs/heads/main/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}