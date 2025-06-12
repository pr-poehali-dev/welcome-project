import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Rocket",
      title: "Быстрый старт",
      description:
        "Запускайте проекты за считанные минуты с готовыми шаблонами",
    },
    {
      icon: "Zap",
      title: "Высокая производительность",
      description: "Современные технологии для максимальной скорости работы",
    },
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Проверенные решения с гарантией стабильной работы",
    },
    {
      icon: "Users",
      title: "Командная работа",
      description: "Эффективное сотрудничество в команде над проектами",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600">
            Мощные инструменты для реализации ваших идей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={feature.icon}
                  size={32}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
