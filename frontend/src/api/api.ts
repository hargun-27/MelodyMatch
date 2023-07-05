const prefix = 'https://api.spotify.com/v1/';

export async function getRecommendation(token: string): Promise<any> {
  const reqParams = new URLSearchParams({
    target_tempo: '140',
  }).toString();
  const response = await fetch(`${prefix}recommendations?${reqParams}`, {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  return await response.json();
}
