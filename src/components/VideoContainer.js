import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoContainer = ({ id }) => {
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchTrailerDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS,
        );
        const data = await response.json();

        const trailers = data?.results?.filter(
          (video) =>
            video.type === "Trailer" ||
            video.type === "Clip" ||
            video.type === "Teaser",
        );

        setTrailerId(trailers?.[0]?.key || null);
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    fetchTrailerDetails();
  }, [id]);

  if (!trailerId) return null;

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoContainer;
