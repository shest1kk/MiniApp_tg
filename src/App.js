import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();

    // Устанавливаем параметры основной кнопки
    tg.MainButton.setParams({
      text: "Закрыть приложение",
      is_visible: true,
      color: "#ff0000",
    });

    // Добавляем обработчик события нажатия основной кнопки
    tg.MainButton.onClick(() => {
      tg.close();
    });

    // Обработчик закрытия приложения
    tg.onEvent('backButtonClicked', () => {
      tg.showConfirm("Вы действительно хотите закрыть приложение?")
        .then((result) => {
          if (result) {
            tg.close();
          }
        });
    });

    return () => {
      // Очищаем обработчики при размонтировании компонента
      tg.MainButton.offClick();
      tg.offEvent('backButtonClicked');
    };
  }, [tg]);

  return (
    <div className="App">
      {/* Ваше содержимое здесь */}
    </div>
  );
}

export default App;
