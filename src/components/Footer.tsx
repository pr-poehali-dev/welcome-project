import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-orange-400">
              ENERGIE SURVIVAL 🦕
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Официальный сервер The Isle EVRIMA. Выживание, охота и эволюция в
              мире динозавров. Присоединяйся к нашему сообществу выживших!
            </p>
            <div className="flex space-x-4">
              <Icon
                name="MessageCircle"
                size={28}
                className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors"
                title="Discord"
              />
              <Icon
                name="Youtube"
                size={28}
                className="text-red-400 hover:text-red-300 cursor-pointer transition-colors"
                title="YouTube"
              />
              <Icon
                name="Twitch"
                size={28}
                className="text-purple-500 hover:text-purple-400 cursor-pointer transition-colors"
                title="Twitch"
              />
              <Icon
                name="Steam"
                size={28}
                className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
                title="Steam"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Игра</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="Download" size={16} />
                Скачать игру
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="BookOpen" size={16} />
                Руководство новичка
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="Map" size={16} />
                Карты мира
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="Activity" size={16} />
                Статус сервера
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">
              Сообщество
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="MessageSquare" size={16} />
                Discord сервер
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="FileText" size={16} />
                Правила сервера
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="AlertTriangle" size={16} />
                Подать жалобу
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Icon name="Trophy" size={16} />
                Рейтинг игроков
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>
              &copy; 2024 ENERGIE SURVIVAL THE ISLE EVRIMA. Все права защищены.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Сервер онлайн
              </span>
              <span>127/200 игроков</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
