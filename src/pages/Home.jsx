import ModelCanvas from "../components/ModelCanvas";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Harshal 👋</h1>
      <p className="text-lg text-gray-400 mb-8 text-center">
        Electronics Engineer • Embedded Systems • AI Enthusiast
      </p>
      <ModelCanvas />
    </section>
  );
}
