import { RecommendationOptions } from "./RecommendationOptions";
const prefix = 'https://api.spotify.com/v1/';

export async function getRecommendation(token: string, params: RecommendationOptions): Promise<any> {
  const defaultParams: RecommendationOptions = {
    target_tempo: '140',
  }
  params = params || defaultParams;

  const reqParams = new URLSearchParams(params).toString();
  const response = await fetch(`${prefix}recommendations?${reqParams}`, {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  return await response.json();
}

export async function getRandomRecommendation(token: string) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length)) + '%';
  let randomSearch = '';
  if (Math.round(Math.random())) {
    randomSearch = randomCharacter + '%';
  } else {
    randomSearch = '%' + randomCharacter + '%';
  }
  // 0 - 1000, higher = later on the search response
  const obscureness = 200;
  const randomOffset = Math.floor(Math.random() * obscureness);
  const reqParams = new URLSearchParams({
    type: "track",
    q: randomSearch,
    offset: randomOffset.toString(),
  }).toString();
  const response = await fetch(`${prefix}search?${reqParams}`, {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  return await response.json();
}
