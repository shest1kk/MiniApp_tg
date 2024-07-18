import React, { useState } from "react";
import './MeetupTiming.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MeetupTiming = () => {
    const [currentDay, setCurrentDay] = useState(1);

    const timingDataDay1 = [
        { time: "14:30", topic: "\nИнтро<hr>Почему Эй Кей лучше, чем другие.<hr>Чем похожи ЭЙ Кей и ЭЙнштейн?\n\n", speaker: '<a href="/faq">Чижов Алексей</a>, Ткачева Светлана' },
        { time: "15:00", topic: "\nPROMO - Как расти дальше?<hr>Простых решений больше нет.<hr>БОНУС\n↓↓↓\n\nФин Дир расскажет, куда тратятся деньги, которые мы зарабатываем.\n\n", speaker: "Антипанова Серафима, Кудряшов Дмитрий" },
        { time: "15:30", topic: "Перерыв", speaker: "" },
        { time: "15:35", topic: "\nВыступление Маркета Сушко\n\n", speaker: "Сушко Павел" },
        { time: "15:45", topic: "\nТиньков, мат и вера в себя.<hr>Как успешно пройти ассес-\nмент на ТУ не с первого раза.\n\n", speaker: "Белимова Людмила" },
        { time: "16:05", topic: "\nНевероятная Астрахань: как все время расти в ТО против тренда\n\n", speaker: "Лепская Екатерина, Болдырева Алия" },
        { time: "16:25", topic: "\nКак небольшие и простые идеи могут давать хороший результат.<hr>Делай, что можешь, для своих людей.<hr>Укрепление HR бренда в г. Рязань\n\n", speaker: "Прокофьева Мария, Михеева Елена" },
        { time: "16:50", topic: "\nЗаложи базу.\nПотом — выжи-\nмай максимум.<hr>Как ставить рекорды по выручке\n\n", speaker: "Хромов Роман" },
        { time: "17:15", topic: "\nУспешные практики в г. Ярославль\n\n", speaker: "Виноградова Валентина, Баранов Иван" },
        { time: "17:40", topic: "Перерыв", speaker: "" },
        { time: "17:55", topic: "\nЛьвы и овцы.\nОхота - как стиль жизни и работы.<hr>Как можно выполнить план по ТО.\n\n", speaker: "Ткачева Светлана" },
        { time: "18:25", topic: "\nНовые технологии стремительно меняют мир.<hr>То, что казалось нереальным - уже в Эй Кей.\n\n", speaker: "Кунаков Иван" },
        { time: "20:00", topic: "Вечернее мероприятие", speaker: "" },
    ];

    const timingDataDay2 = [
        { time: "10:00", topic: "HR  + People", speaker: "HR + Григорян Наталья" },
        { time: "11:30", topic: "Перерыв", speaker: "" },
        { time: "11:40", topic: "Квиз", speaker: "" },
        { time: "11:55", topic: "\nВступление Маркета Кравченко\n\n", speaker: "Кравченко Ксения" },
        { time: "12:05", topic: "Вопреки внешним обстоятель-\nствам", speaker: "Егоров Александр, Дёмин Владислав, Фионина Ольга" },
        { time: "12:25", topic: "Вопреки рынку труда", speaker: "Бурыкина Анастасия, Юдин Сергей, Подлегаева Дарья" },
        { time: "12:55", topic: "\nПуть от директора до ВТУ, история успеха\n\n", speaker: "Мальцева Ирина" },
        { time: "13:10", topic: "\nВопреки установкам. Аналитика в Product\n\n", speaker: "Горельков Александр" },
        { time: "13:25", topic: "\nВопреки ручного труда\n\n", speaker: "Кававина Любовь" },
        { time: "13:40", topic: "Обед", speaker: "" },
        { time: "14:40", topic: "\nКак я нахожу себе проблемы и решаю их на пользу всем :)<hr>Сломанные преграды в доставке и COL\n\n", speaker: "Виноградова Екатерина" },
        { time: "15:00", topic: "\nХотели шоу? Будет шоу!!!<hr>Выступление команды QA\n\n", speaker: "Евдокимов Илья, Вишняков Антон" },
        { time: "15:30", topic: "\nВыступление Генерального Директора\n\n", speaker: "Чижов Алексей" },
        { time: "16:30", topic: "Перерыв", speaker: "" },
        { time: "16:45", topic: "\nПанельная дискуссия\n\n", speaker: "LT" },
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

    const formatSpeakers = (speakers) => {
        return speakers.split(', ').map((speaker, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: speaker }}></div>
        ));
    };

    const formatTopic = (topic) => {
        return { __html: topic.replace(/\n/g, '<br/>').replace(/<hr>/g, '<hr>') };
    };

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
                                    <td dangerouslySetInnerHTML={formatTopic(event.topic)}></td>
                                    <td>{formatSpeakers(event.speaker)}</td>
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
