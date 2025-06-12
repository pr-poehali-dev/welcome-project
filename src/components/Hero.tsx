import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 text-white flex items-center justify-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-400 mb-2 tracking-widest">
            ENERGIE SURVIVAL
          </h1>
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl">
            THE ISLE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-green-400 tracking-wider">
            EVRIMA
          </h3>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Выживи в мире доисторических хищников. Стань динозавром, охоться,
          развивайся и доминируй в первобытном мире
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-4 text-lg shadow-2xl"
          >
            🎮 Присоединиться к серверу
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold px-10 py-4 text-lg"
          >
            💬 Discord сообщество
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>Сервер онлайн</span>
          </div>
          <div>👥 127 игроков</div>
          <div>🦕 15 видов динозавров</div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
