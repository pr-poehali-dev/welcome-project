import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-800 via-green-800 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1920&h=1080&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6">
          Готов к выживанию?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Присоединяйся к тысячам игроков в самом захватывающем мире динозавров.
          Выживание начинается сейчас!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-12 py-6 text-xl shadow-2xl"
          >
            🎮 Скачать игру
          </Button>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-12 py-6 text-xl"
          >
            💬 Присоединиться к Discord
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold px-12 py-6 text-xl"
          >
            📋 Правила сервера
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-black/50 rounded-lg p-6 border border-gray-600">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Сервер онлайн</div>
          </div>
          <div className="bg-black/50 rounded-lg p-6 border border-gray-600">
            <div className="text-3xl font-bold text-green-400 mb-2">200</div>
            <div className="text-gray-300">Максимум игроков</div>
          </div>
          <div className="bg-black/50 rounded-lg p-6 border border-gray-600">
            <div className="text-3xl font-bold text-red-400 mb-2">15+</div>
            <div className="text-gray-300">Видов динозавров</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
