import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Добро пожаловать в будущее! 🚀
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100 animate-fade-in">
          Создавайте невероятные проекты с помощью современных технологий
        </p>
        <div className="space-x-4 animate-fade-in">
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3"
          >
            Начать проект
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
