function Title({ text }) {
  return (
    <h2 className="main-title text-[var(--main-color)] font-bold tracking-widest relative z-1 hover:transition-[0.5s] hover:delay-[0.3s] hover:text-white px-5 py-3 mx-auto mb-20 text-2xl md:text-4xl text-center">
      {text}
    </h2>
  );
}

export default Title;
