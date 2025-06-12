import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Готовы начать свой проект?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Присоединяйтесь к тысячам разработчиков, которые уже создают будущее
        </p>
        <div className="space-x-4">
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4"
          >
            Создать проект бесплатно
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4"
          >
            Посмотреть примеры
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
