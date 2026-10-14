const Loading = () => {
  return (
    <div className="flex min-h-[65vh] items-center justify-center bg-kaveri-cream">
      <div className="w-52 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-kaveri-muted">
          Kaveri
        </p>

        <div className="relative mt-6 h-[2px] w-full overflow-hidden bg-kaveri-sand">
          <div className="animate-loading-line absolute left-0 top-0 h-full w-1/3 bg-kaveri-ink" />
        </div>

        <p className="font-editorial mt-5 text-3xl leading-none">
          Preparing your edit.
        </p>
      </div>
    </div>
  );
};

export default Loading;
