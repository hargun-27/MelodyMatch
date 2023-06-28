import React from 'react'
import FilterCard from '../components/Filters'

function Profile() {
  return (
    <div>
      <FilterCard title="Acousticness" description="A confidence measure from 0 to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic" />
      <FilterCard title="Liveness" description="Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live" />
      <FilterCard title="Danceability" description="How suitable a track is for dancing. A value of 0 is least danceable and 100 is most danceable 0 - 100" />
      <FilterCard title="Instrumentalness" description="Predicts whether a track contains no vocals" />
      <FilterCard title="Energy Level" description="Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity" />
      <FilterCard title="Valence" description="A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track" />
      <FilterCard title="Loudness" description="The overall loudness of a track in decibels (dB)" />
      <FilterCard title="BPM" description="The overall estimated tempo of a track in beats per minute (BPM)" />
      <FilterCard title="Speechiness" description="Speechiness detects the presence of spoken words in a track." />
    </div>
  )
}

export default Profile