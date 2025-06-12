import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Skull",
      title: "Реалистичное выживание",
      description:
        "Охотись, избегай хищников и выживай в жестоком мире динозавров с реалистичной системой голода и жажды",
    },
    {
      icon: "Users",
      title: "Мультиплеер до 200 игроков",
      description:
        "Сражайся с другими игроками, создавай стаи или охотись в одиночку на огромных картах",
    },
    {
      icon: "TreePine",
      title: "Доисторический мир",
      description:
        "Исследуй детализированные биомы мезозойской эры с аутентичной флорой и фауной",
    },
    {
      icon: "TrendingUp",
      title: "Прогрессия персонажа",
      description:
        "Развивай своего динозавра от детеныша до взрослой особи, открывай новые способности",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Особенности игры
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Погрузись в самый реалистичный симулятор жизни динозавров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name={feature.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
