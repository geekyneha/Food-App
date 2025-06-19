const ResCardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer-animate"></div>
      <div className="shimmer-content">
        <div className="shimmer-line short shimmer-animate"></div>
        <div className="shimmer-line shimmer-animate"></div>
        <div className="shimmer-line shimmer-animate"></div>
        <div className="shimmer-safety">
          <div className="shimmer-box shimmer-animate"></div>
          <div className="shimmer-line tiny shimmer-animate"></div>
        </div>
      </div>
    </div>
  );
};

export default ResCardShimmer;
