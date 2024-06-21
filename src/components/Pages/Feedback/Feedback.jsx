import React from "react";
import './Feedback.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";

// Функция для копирования текста и вывода alert через Telegram WebApp
const handleCopyText = () => {
  const textToCopy = '+79969184707';

  // Копируем текст в буфер обмена
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Выводим alert через Telegram WebApp
    window.Telegram.WebApp.showAlert('Вы скопировали номер телефона');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
};

const Feedback = () => {
  return (
    <div className={'Feedback_wrapper'}>
      <div className={'Feedback_text'}>
        <span>Обратная связь</span>
      </div>
      <div className={'Meetup_categories'}>
      <a target='_blank' href="https://t.me/feyhoa779">
          <Button className={'primary-button'}>Телеграм</Button>
        </a>
        <a href="https://wa.me/79969184707">
          <Button className={'primary-button'}>WhatsApp</Button>
        </a>
        <Button className={'primary-button'} onClick={handleCopyText}>Телефон</Button>
        <Link to='/sections'>
          <Button className={'primary-button'}>Назад</Button>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
