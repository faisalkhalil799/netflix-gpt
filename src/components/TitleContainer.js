const TitleContainer = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative px-6 md:px-12 max-w-xl text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-200 line-clamp-4">
          {overview}
        </p>

        {/* Action buttons (no handlers) */}
        <div className="mt-6 flex items-center gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            ▶️ Play
          </button>

          <button className="bg-gray-700/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
