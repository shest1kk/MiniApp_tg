import React from "react";
import './Feedback.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";

// Функция для копирования текста и вывода alert
const handleCopyText = () => {
  const textToCopy = '+79969184707';

  // Создаем временный элемент для копирования текста
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // Выделяем текст и копируем его
  textarea.select();
  document.execCommand('copy');

  // Удаляем временный элемент
  document.body.removeChild(textarea);

  // Выводим alert
  alert('Вы скопировали номер телефона');
};

const Feedback = () => {
  return (
    <div className={'Feedback_wrapper'}>
      <div className={'Feedback_text'}>
        <span>Обратная связь</span>
      </div>
      <div className={'Feedback_categories'}>
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
