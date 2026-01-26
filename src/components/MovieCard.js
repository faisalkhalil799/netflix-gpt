const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[160px] cursor-pointer hover:scale-105 transition-transform duration-300">
      <img src={posterPath} alt="movie poster" className="rounded-md" />
    </div>
  );
};

export default MovieCard;
