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
