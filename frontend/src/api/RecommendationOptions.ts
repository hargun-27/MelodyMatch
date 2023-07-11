export interface RecommendationOptions {
  [key: string]: number;
  target_tempo: number;
  target_danceability: number;
  target_energy: number;
  target_loudness: number;
  target_speechiness: number;
  target_acousticness: number;
  target_instrumentalness: number;
  target_liveness: number;
  target_valence: number;
}
