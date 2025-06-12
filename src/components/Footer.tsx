import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Поехали! 🚀
            </h3>
            <p className="text-gray-400 mb-6">
              Платформа для создания современных веб-приложений с помощью
              искусственного интеллекта
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Github"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              />
              <Icon
                name="Twitter"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              />
              <Icon
                name="Mail"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Возможности
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Цены
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Документация
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                API
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Помощь
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Сообщество
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Контакты
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Статус
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Поехали! Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
