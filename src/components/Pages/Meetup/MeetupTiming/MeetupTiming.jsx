import React, { useState } from "react";
import './MeetupTiming.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MeetupTiming = () => {
    const [currentDay, setCurrentDay] = useState(1);

    const timingDataDay1 = [
        { time: "14:30", topic: "Интро. Почему Эй Кей Лучше, чем другие. Чем похожи ЭЙ Кей и ЭЙнштейн?", speaker: "Чижов Алексей, Ткачева Светлана" },
        { time: "15:00", topic: "PROMO - Как расти дальше? Простый решений больше нет. ***БОНУС. Фин Дир расскажет, куда тратятся деньги, которые мы зарабатываем.", speaker: "Антипанова Серафима, Кудряшов Дмитрий" },
        { time: "15:30", topic: "Перерыв", speaker: "" },
        { time: "15:35", topic: "Выступление Маркета Сушко", speaker: "Сушко Павел" },
        { time: "15:45", topic: "Тиньков, мат и вера в себя. Как успешно пройти ассесмент на ТУ не с первого раза.", speaker: "Белимова Людмила" },
        { time: "16:05", topic: "Невероятная Астрахань: как все время расти в ТО против тренда", speaker: "Лепская Екатерина, Болдырева Алия" },
        { time: "16:25", topic: "Как небольшие и простые идеи могут давать хороший результат. Делай, что можешь, для своих людей. Укрепление HR бренда в г. Рязань", speaker: "Прокофьева Мария, Михеева Елена" },
        { time: "16:50", topic: "Заложи базу. Потом - выжимай максимум. Как ставить рекорды по выручке.", speaker: "Хромов Роман" },
        { time: "17:15", topic: "Успешные практики в г. Ярославль", speaker: "Виноградова Валентина, Баранов Иван" },
        { time: "17:40", topic: "Перерыв", speaker: "" },
        { time: "17:55", topic: "Львы и овцы. Охота - как стиль жизни и работы. Как можно выполнить план по ТО.", speaker: "Ткачева Светлана" },
        { time: "18:25", topic: "Новые технологии стремительно меняют мир. То, что казалось нереальным - уже в Эй Кей.", speaker: "Кунаков Иван" },
        { time: "20:00", topic: "Вечернее мероприятие", speaker: "" },
    ];

    const timingDataDay2 = [
        { time: "10:00", topic: "HR  + People", speaker: "HR + Григорян Наталья" },
        { time: "11:30", topic: "Перерыв", speaker: "" },
        { time: "11:40", topic: "Квиз", speaker: "" },
        { time: "11:55", topic: "Вступление Маркета Кравченко", speaker: "Кравченко Ксения" },
        { time: "12:05", topic: "Вопреки внешним обстоятельствам", speaker: "Егоров Александр, Дёмин Владислав, Фионина Ольга" },
        { time: "12:25", topic: "Вопреки рынку труда", speaker: "Бурыкина Анастасия, Юдин Сергей, Подлегаева Дарья" },
        { time: "12:55", topic: "Путь от директора до ВТУ, история успеха", speaker: "Мальцева Ирина" },
        { time: "13:10", topic: "Вопреки установкам. Аналитика в Product", speaker: "Горельков Александр" },
        { time: "13:25", topic: "Вопреки ручного труда", speaker: "Кававина Любовь" },
        { time: "13:40", topic: "Обед", speaker: "" },
        { time: "14:40", topic: "Как я нахожу себе проблемы и решаю их на пользу всем :) Сломанные преграды в доставке и COL", speaker: "Виноградова Екатерина" },
        { time: "15:00", topic: "Хотели шоу? Будет шоу!!! Выступление команды QA", speaker: "Евдокимов Илья, Вишняков Антон" },
        { time: "15:30", topic: "Выступление Генерального Директора", speaker: "Чижов Алексей" },
        { time: "16:30", topic: "Перерыв", speaker: "" },
        { time: "16:45", topic: "Панельная дискуссия", speaker: "LT" },
        { time: "17:45", topic: "Завершение", speaker: "" },
        { time: "19:00", topic: "Галла-Ужин", speaker: "" },
    ];

    let timingData;
    let dateLabel;
    if (currentDay === 1) {
        timingData = timingDataDay1;
        dateLabel = "22.07";
    } else if (currentDay === 2) {
        timingData = timingDataDay2;
        dateLabel = "23.07";
    } else {
        dateLabel = "24.07";
    }

    return (
        <div className={'MeetupTiming_wrapper'}>
            <div className={'MeetupTiming_image'}>
                <div className={"MeetupTiming_headerText"}>
                    <img className={'MeetupTiming_headerText_img'} 
                         src='/assets/living.svg'
                         alt='123'/>
                </div>
                <img className={'MeetupTiming_image_img'}
                     src='/assets/logo.svg'
                     alt="123"/>
            </div>
            <div className={'MeetupTiming_text'}>
                <div className="slider">
                    {currentDay > 1 && (
                        <button onClick={() => setCurrentDay(currentDay - 1)}>
                            <FaArrowLeft /> {currentDay === 2 ? "" : ""}
                        </button>
                    )}
                    <span>{dateLabel}</span>
                    {currentDay < 3 && (
                        <button onClick={() => setCurrentDay(currentDay + 1)}>
                            {currentDay === 2 ? "" : ""} <FaArrowRight />
                        </button>
                    )}
                </div>
                {currentDay === 3 ? (
                    <div className="departure-note">
                        ВЫЕЗД ДО 12:00
                    </div>
                ) : (
                    <div className="MeetupTiming_table">
                    <table>
                        <thead>
                            <tr>
                                <th>Время</th>
                                <th>Тема</th>
                                <th>Спикер</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timingData.map((event, index) => (
                                <tr key={index}>
                                    <td>{event.time}</td>
                                    <td>{event.topic}</td>
                                    <td>{event.speaker}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                )}
                <Link to='/meetup'>
                    <Button className={'primary-button'}>Назад</Button>
                </Link>
            </div>
        </div>
    );
};

export default MeetupTiming;
