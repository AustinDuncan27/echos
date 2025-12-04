import { useState } from "react";
import { episodeList } from "./data";

function EpisodesList({ episodes, setActiveEpisode }) {
  const handleClickItem = (episode,idx)=>() => {
    setActiveEpisode({
      position: idx+1,
      title: episode.title,
      description: episode.description
    });
  };
  return (
    <div>
      <h2>Episodes List</h2>
      <ul>
        {episodes.map((episode, idx) => (
          <li onClick={handleClickItem(episode,idx)}>{episode.title}</li>
        ))}
      </ul>
    </div>
  );
}
function EpisodeDetails({ activeEpisode }) {
  if (activeEpisode === undefined) {
    return <p>Select an episode!</p>;
  }
  return (
    <div>
      <h2>Episode {activeEpisode.position}</h2>
      <h3>{activeEpisode.title}</h3>
      <p>{activeEpisode.description}</p>
      <button>Watch Now</button>
    </div>
  );
}
export default function App() {
  const [episodes, setEpisodes] = useState(episodeList);
  const [activeEpisode, setActiveEpisode] = useState();
  return (
    <div>
      <h1>Dark Echoes</h1>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black", width: "50%" }}>
          <EpisodesList episodes={episodes} setActiveEpisode={setActiveEpisode} />
        </div>
        <div style={{ border: "1px solid black", width: "50%" }}>
          <EpisodeDetails
            activeEpisode={activeEpisode}
            
          />
        </div>
      </div>
    </div>
  );
}
