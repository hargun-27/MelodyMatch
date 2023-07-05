const prefix = 'https://api.spotify.com/v1/';

export async function getRecommendation(token: string): Promise<any> {
  const headers = new Headers();  
  headers.append("Authorization", `"Bearer " ${token}`);
  const reqParams = new URLSearchParams({
    target_tempo: '140',
  }).toString();
  const response = await fetch(`${prefix}recommendations?${reqParams}`, {
    headers,
    method: 'GET',
  });
  return response;
}
