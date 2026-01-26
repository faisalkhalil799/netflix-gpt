import TitleContainer from "./TitleContainer";
import VideoContainer from "./VideoContainer";

const MainContainer = ({ movieData }) => {
  if (!movieData) return null; //early return if no data is there

  const { original_title, overview, id } = movieData;

  return (
    <div className="relative h-screen w-full">
      {/* Overlay Content */}
      <TitleContainer title={original_title} overview={overview} />

      {/* Background Video */}
      <VideoContainer id={id} />
    </div>
  );
};

export default MainContainer;
