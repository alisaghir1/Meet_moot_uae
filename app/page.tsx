export default function Home() {
  return (
    <main className="relative">
      <video className="relative" width="100%" height="500px" autoPlay muted loop preload="none">
        <source src="/videos/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="absolute top-1/2 left-10 md:left-20 lg:left-48 z-10 text-white">
        <h2 className="text-xl md:text-5xl text-yellow-600">Our Meet</h2>
        <h1 className="text-xl md:text-5xl font-bold text-yellow-400">Slowly Crafted, Quickly Devoured</h1>
        <div className="pt-5">
        <button className="border  border-yellow-400 text-yellow-400 py-2 px-8 hover:bg-yellow-400 hover:text-white transition-colors duration-300 ease-in-out font-bold font-xl font-mono">Find Location</button>
        </div>
      </section>
    </main>
  );
}
