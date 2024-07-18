import React, { useState } from "react";
import "./MeetupTiming.css";
import Button from "../../../Buttons/Button";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MeetupTiming = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [modalData, setModalData] = useState(null);

  const timingDataDay1 = [
    {
      id: 1,
      time: "14:30",
      topic:
        "\nИнтро<hr>Почему Эй Кей лучше, чем другие.<hr>Чем похожи <u>ЭЙ</u> Кей и <u>ЭЙ</u>нштейн?\n\n",
      speakers: [
        { id: 101, name: "Чижов Алексей" },
        { id: 102, name: "Ткачева Светлана" },
      ],
    },
    {
      id: 2,
      time: "15:00",
      topic:
        "\nPROMO - Как расти дальше?<hr>Простых решений больше нет.<hr>БОНУС\n↓↓↓\n\nФин Дир расскажет, куда тратятся деньги, которые мы зарабатываем.\n\n",
      speakers: [
        { id: 103, name: "Антипанова Серафима" },
        { id: 104, name: "Кудряшов Дмитрий" },
      ],
    },
    {
      id: 3,
      time: "15:30",
      topic: "Перерыв",
      speakers: [],
    },
    {
        id: 4,
        time: "15:35",
        topic: "\nВыступление Маркета Сушко.\n\nСоздаем возможности сами!\n\n",
        speakers: [
            { id: 105, name: "Сушко Павел"}
        ],
      },
      {
        id: 5,
        time: "15:45",
        topic: "\nТиньков, мат и вера в себя.<hr>Как успешно пройти ассес-\nмент на ТУ не с первого раза.\n\n",
        speakers: [
            { id: 106, name: "Железова Людмила"}
        ],
      },
      {
        id: 6,
        time: "16:05",
        topic: "\nНевероятная Астрахань: как все время расти в ТО против тренда.\n\n",
        speakers: [
            { id: 107, name: "Лепская Екатерина"},
            { id: 108, name: "Болдырева Алия"}
        ],
      },
      {
        id: 7,
        time: "16:25",
        topic: "\nКак небольшие и простые идеи могут давать хороший результат.<hr>Делай, что можешь, для своих людей.<hr>Укрепление HR бренда в г. Рязань.\n\n",
        speakers: [
            { id: 109, name: "Мария Прокофьева"},
            { id: 110, name: "Михеева Елена"}
        ],
      },
      {
        id: 8,
        time: "16:50",
        topic: "\nЗаложи базу. Потом - выжимай максимум.<hr>Как ставить рекорды по выручке.\n\n",
        speakers: [
            { id: 111, name: "Хромов Роман"},
        ],
      },
      {
        id: 9,
        time: "17:15",
        topic: "\nУспешные практики в г. Ярославль.\n\n",
        speakers: [
            { id: 112, name: "Виноградова Валентина"},
            { id: 113, name: "Баранов Иван"}
        ],
      },
      {
        id: 10,
        time: "17:40",
        topic: "\nПерерыв\n\n",
        speakers: [
            
        ],
      },
      {
        id: 11,
        time: "17:55",
        topic: "\nЛьвы и овцы.\nОхота как стиль жизни и работы.<hr>Как можно выполнить план по ТО.\n\n",
        speakers: [
            { id: 114, name: "Ткачева Светлана"}
        ],
      },
      {
        id: 12,
        time: "18:25",
        topic: "\nНовые технологии стремительно меняют мир.<hr>То, что казалось нереальным - уже в Эй Кей.\n\n",
        speakers: [
            { id: 115, name: "Кунаков Иван"}
        ],
      },
      {
        id: 13,
        time: "19:10",
        topic: "\nОкончание 1го дня конференции.\n\n",
        speakers: [
            
        ],
      },
    // Add more entries as needed
  ];

  const timingDataDay2 = [
    {
      id: 4,
      time: "10:00",
      topic: "HR  + People",
      speakers: [{ id: 5, name: "Григорян Наталья" }],
    },
    {
      id: 5,
      time: "11:30",
      topic: "Перерыв",
      speakers: [],
    },
    {
      id: 6,
      time: "11:40",
      topic: "Квиз",
      speakers: [],
    },
    // Add more entries as needed
  ];

  const speakersData = {
    101: {
      id: 101,
      name: "Чижов Алексей",
      image: "/assets/1.png",
      text: "CEO, Алексей Чижов поделится секретом успеха ЭйКей и что позволяет Компании быть лучшими.\n\nА так же расскажет, почему Эйнштейн стал нашим выбором для SSM в этом году, и что общего между выдающимся физиком и нашей Компанией?",
    },
    102: {
      id: 102,
      name: "Ткачева Светлана",
      image: "/assets/1.png",
      text: "CEO, Алексей Чижов поделится секретом успеха ЭйКей и что позволяет Компании быть лучшими.\n\nА так же расскажет, почему Эйнштейн стал нашим выбором для SSM в этом году, и что общего между выдающимся физиком и нашей Компанией?",
    },
    103: {
      id: 103,
      name: "Антипанова Серафима",
      image: "/assets/2.png",
      text: "Лидер Промо, Серафима Антипанова подведет итоги 1го полугодия.\nОтветит на вопросы<hr>Как расти в товарообороте дальше?<hr>В чем будет заключаться новый подход в блоке Promo?<hr>Что мы ждем от команды директоров для достижения целей?",
    },
    104: {
      id: 104,
      name: "Кудряшов Дмитрий",
      image: "/assets/2.png",
      text: "Лидер Промо, Серафима Антипанова подведет итоги 1го полугодия.\nОтветит на вопросы:<hr>Как расти в товарообороте дальше?<hr>В чем будет заключаться новый подход в блоке Promo?<hr>Что мы ждем от команды директоров для достижения целей?",
    },
    105: {
      id: 105,
      name: "Сушко Павел",
      image: "/assets/3.png",
      text: "Маркет Менеджер,\nПавел Сушко расскажет про построение работы через поддержку инициативы команды своего маркета, как важна поддержка идеи команды, вера в них.\n\nНе ждать, а давать возможность пробовать здесь и сейчас. ",
    },
    106: {
        id: 106,
        name: "Железова Людмила",
        image: "/assets/4.png",
        text: "Людмила Железова расскажет про свой опыт прохождения Ассессмент центра в ЭйКей, и как важно иметь внутреннюю мотивацию.",
      },
      107: {
        id: 107,
        name: "Лепская Екатерина",
        image: "/assets/5.png",
        text: "Алия Болдырева и Екатерина Лепская на примере города Астрахань покажут, как важно не останавливаться на достигнутом, уметь находить нешаблонные решения. Почему очень важно намерения и в чем сила мечты.",
      },
      108: {
        id: 108,
        name: "Болдырева Алия",
        image: "/assets/5.png",
        text: "Алия Болдырева и Екатерина Лепская на примере города Астрахань покажут, как важно не останавливаться на достигнутом, уметь находить нешаблонные решения. Почему очень важно намерения и в чем сила мечты.",
      },
      109: {
        id: 109,
        name: "Мария Прокофьева",
        image: "/assets/6.png",
        text: "Елена Михеева и Мария Прокофьева расскажут, как небольшие и простые идеи могут давать крутой результат.\n\nКак простая инициатива одного человека влияет на укрепление  HR бренда  целого города. ",
      },
      110: {
        id: 110,
        name: "Михеева Елена",
        image: "/assets/6.png",
        text: "Елена Михеева и Мария Прокофьева расскажут, как небольшие и простые идеи могут давать крутой результат.\n\nКак простая инициатива одного человека влияет на укрепление  HR бренда  целого города. ",
      },
      111: {
        id: 111,
        name: "Хромов Роман",
        image: "/assets/7.png",
        text: 'Роман Хромов расскажет, про выведенную на своем опыте формулу достижения рекордной выручки на самом сложном ресторане.<hr>"Заложи базу.\nПотом - выжимай максимум."',
      },
      112: {
        id: 112,
        name: "Виноградова Валентина",
        image: "/assets/8.png",
        text: 'Валя Виноградова и Иван Баранов поделятся лучшими практиками Ярославля, а так же  расскажут, почему большого результата не бывает без совершения  маленьких шагов.',
      },
      113: {
        id: 113,
        name: "Баранов Иван",
        image: "/assets/8.png",
        text: 'Валя Виноградова и Иван Баранов поделятся лучшими практиками Ярославля, а так же  расскажут, почему большого результата не бывает без совершения  маленьких шагов.',
      },
      114: {
        id: 114,
        name: "Ткачева Светлана",
        image: "/assets/9.png",
        text: 'Светалана Ткачева расскажет о том, в чем она видит силу победителя.\nКак это отображается в ее подходе к работе, и как это поможет в выполнении плана товарооборота.',
      },
      115: {
        id: 115,
        name: "Кунаков Иван",
        image: "/assets/10.png",
        text: 'Иван Кунаков покажет, как важно следить за развитием технологий в нашем Бизнесе, расскажет про собственные инновационные проекты в Эй\nКей.\nА так же покажет, как искуственный интелект может помочь в рутине директора.',
      },
    // Add more entries as needed
  };

  const openModal = (speakerId) => {
    if (speakersData.hasOwnProperty(speakerId)) {
      setModalData(speakersData[speakerId]);
    } else {
      console.error(`Speaker with id ${speakerId} not found in speakersData`);
    }
  };

  const closeModal = () => {
    // Add a delay to ensure fadeOut animation completes before resetting modalData
    setTimeout(() => {
      setModalData(null);
    }, 700); // Match animation duration in milliseconds

    // Add fadeOut class to initiate fadeOut animation
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.classList.add("fadeOut");
    }
  };
  const formatSpeakers = (speakers) => {
    return speakers.map((speaker, index) => (
      <React.Fragment key={index}>
        {index > 0 && <hr />}
        <div>
          <a
            // href="/"
            onClick={(e) => {
              e.preventDefault();
              openModal(speaker.id);
            }}
          >
            {speaker.name}
          </a>
        </div>
      </React.Fragment>
    ));
  };

  const formatTopic = (topic) => {
    return {
      __html: topic.replace(/\n/g, "<br/>").replace(/<hr>/g, "<hr>"),
    };
  };

  let timingData;
  let dateLabel;
  if (currentDay === 1) {
    timingData = timingDataDay1;
    dateLabel = "22.07";
  } else if (currentDay === 2) {
    timingData = timingDataDay2;
    dateLabel = "23.07";
  } else {
    // Handle other days if needed
  }

  return (
    <div className={"MeetupTiming_wrapper"}>
      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={'modal-image'}><img className={'modal-image-img'} src={modalData.image} alt='123'/></div>
            <div className={'modal-text'} dangerouslySetInnerHTML={{ __html: modalData.text.replace(/\n/g, '<br/>') }}></div>
            <div className={'modal-close'}><button onClick={closeModal}>Назад</button></div>
          </div>
        </div>
      )}
      <div className={"MeetupTiming_image"}>
        <div className={"MeetupTiming_headerText"}>
          <img
            className={"MeetupTiming_headerText_img"}
            src="/assets/living.svg"
            alt="123"
          />
        </div>
        <img
          className={"MeetupTiming_image_img"}
          src="/assets/logo.svg"
          alt="123"
        />
      </div>
      <div className={"MeetupTiming_text"}>
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
          <div className="departure-note">ВЫЕЗД ДО 12:00</div>
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
                    <td>{formatSpeakers(event.speakers)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Link to="/meetup">
          <Button className={"primary-button"}>Назад</Button>
        </Link>
      </div>
    </div>
  );
};

export default MeetupTiming;
