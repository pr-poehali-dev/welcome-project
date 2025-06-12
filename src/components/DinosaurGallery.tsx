import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const DinosaurGallery = () => {
  const dinosaurs = [
    {
      name: "Карнотавр",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      description: "Быстрый хищник среднего размера с мощными челюстями",
      diet: "Хищник",
      size: "Средний",
      price: 1000,
    },
    {
      name: "Утаринус",
      image:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400",
      description: "Маленький быстрый хищник, охотится стаями",
      diet: "Хищник",
      size: "Маленький",
      price: 500,
    },
    {
      name: "Цератозавр",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
      description: "Крупный хищник с характерным рогом на носу",
      diet: "Хищник",
      size: "Большой",
      price: 2500,
    },
    {
      name: "Диаблоцератопс",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400",
      description: "Травоядный с массивным воротником и рогами",
      diet: "Травоядный",
      size: "Большой",
      price: 2500,
    },
    {
      name: "Галлимим",
      image:
        "https://images.unsplash.com/photo-1567880905822-56f8e06c7b8c?w=400",
      description: "Быстрый страусоподобный динозавр",
      diet: "Всеядный",
      size: "Средний",
      price: 1000,
    },
    {
      name: "Пахицефалозавр",
      image:
        "https://images.unsplash.com/photo-1578662015879-c0d74b3ee20a?w=400",
      description: "Травоядный с толстым черепом для боевых ударов",
      diet: "Травоядный",
      size: "Средний",
      price: 1000,
    },
  ];

  const getDietColor = (diet: string) => {
    switch (diet) {
      case "Хищник":
        return "text-red-400 bg-red-900/20";
      case "Травоядный":
        return "text-green-400 bg-green-900/20";
      case "Всеядный":
        return "text-yellow-400 bg-yellow-900/20";
      default:
        return "text-gray-400 bg-gray-900/20";
    }
  };

  const getSizeColor = (size: string) => {
    switch (size) {
      case "Маленький":
        return "text-blue-400 bg-blue-900/20";
      case "Средний":
        return "text-purple-400 bg-purple-900/20";
      case "Большой":
        return "text-orange-400 bg-orange-900/20";
      default:
        return "text-gray-400 bg-gray-900/20";
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Доступные Динозавры
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Выбери своего идеального хищника или травоядного и начни выживание в
            мире EVRIMA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dinosaurs.map((dino, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={dino.image}
                  alt={dino.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl font-bold text-white">
                    {dino.name}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-400">
                      {dino.price}₽
                    </div>
                  </div>
                </div>

                <CardDescription className="text-gray-400 mb-4 leading-relaxed">
                  {dino.description}
                </CardDescription>

                <div className="flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getDietColor(dino.diet)}`}
                  >
                    {dino.diet}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getSizeColor(dino.size)}`}
                  >
                    {dino.size}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Секция оплаты */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-orange-500 border-2">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  💳 Информация для оплаты
                </h3>
                <p className="text-gray-400">
                  Переведите деньги на карту и укажите желаемого динозавра в
                  комментарии
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-orange-400 mb-4">
                    Реквизиты для перевода
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <span className="text-gray-400">Номер карты:</span>
                      <div className="text-white font-mono text-lg">
                        2202 2063 1234 5678
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Получатель:</span>
                      <div className="text-white">Иван Петров</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Банк:</span>
                      <div className="text-white">Сбербанк</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-orange-400 mb-4">
                    Инструкция по оплате
                  </h4>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                    <li>Переведите сумму за выбранного динозавра</li>
                    <li>В комментарии укажите имя динозавра</li>
                    <li>
                      Напишите в Discord:{" "}
                      <span className="text-orange-400">@EnergieSurvival</span>
                    </li>
                    <li>Прикрепите скриншот перевода</li>
                    <li>Получите доступ к персонажу в течение 24 часов</li>
                  </ol>

                  <div className="mt-6 p-4 bg-orange-900/20 border border-orange-500 rounded-lg">
                    <p className="text-orange-400 text-sm">
                      ⚠️ Внимание: Возврат средств не предусмотрен. Убедитесь в
                      правильности выбора динозавра.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DinosaurGallery;
