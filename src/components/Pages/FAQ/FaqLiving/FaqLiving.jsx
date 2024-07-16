import React, { useState, useEffect, useRef } from "react";
import './FaqLiving.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; // Импортируем иконку поиска

const FaqLiving = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const bottomSpacerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const guestData = [
        { id: 1, names: ["Базина Ольга", "Красавина Галина"] },
        { id: 2, names: ["Кушкин Алексей", "Пилосян Меликсет"] },
        { id: 3, names: ["Селезнева Екатерина", "Вилонина Юлия"] },
        { id: 4, names: ["Леваков Александр", "Егоров Александр"] },
        { id: 5, names: ["Елсаков Алексей", "Лапшин Артём"] },
        { id: 6, names: ["Тулина Мария", "Кабиева Диана"] },
        { id: 7, names: ["Баранов Иван", "Сморода Роман"] },
        { id: 8, names: ["Хромов Роман", "Ахметвалеев Артур"]},
        { id: 9, names: ["Полянская Светлана", "Шичкина Екатерина"] },
        { id: 10, names: ["Шарова Кристина", "Познаева Лилит"] },
        { id: 11, names: ["Михеева Елена", "Красавина Виктория"] },
        { id: 12, names: ["Трошкина Екатерина", "Павлюк Сильвия"] },
        { id: 13, names: ["Прокофьева Мария", "Круглова Юлия"] },
        { id: 14, names: ["Власова Иван", "Ярмухамедов Тимур"] },
        { id: 15, names: ["Мильниченко Анастасия", "Прудникова Светлана"] },
        { id: 16, names: ["Лепская Екатерина", "Болдырева Алия"] },
        { id: 17, names: ["Дударева Оксана", "Пескова Елизавета"] },
        { id: 18, names: ["Лебедев Дмитрий", "Бабушкин Михаил"] },
        { id: 19, names: ["Юсипов Дмитрий", "Еремин Станислав"] },
        { id: 20, names: ["Муза Юрий", "Василенко Максим"] },
        { id: 21, names: ["Артемова Мария", "Молдаванова Олеся"] },
        { id: 22, names: ["Корнеева Елена", "Синёва Евгения"] },
        { id: 23, names: ["Прокофьева Виктория", "Кокорская Ирина"] },
        { id: 24, names: ["Войнов Роман", "Алиев Рафгат"] },
        { id: 25, names: ["Нурмуханова Айгуль", "Нурмуханов Аят"] },
        { id: 26, names: ["Павлова Анастасия", "Лукина Замира"] },
        { id: 27, names: ["Дмитриева Лариса", "Кававина Любовь"] },
        { id: 28, names: ["Гулямов Фархад", "Жабинский Михаил"] },
        { id: 29, names: ["Юсупова Кристина", "Денисова Анна"] },
        { id: 30, names: ["Власова Анна", "Салихова Анна"] },
        { id: 31, names: ["Пряхина Надежда", "Васенева Катрина"] },
        { id: 32, names: ["Железова Людмила", "Танделова Диана"] },
        { id: 33, names: ["Мальцева Ирина", "Трифонова Екатерина"] },
        { id: 34, names: ["Горбунова Ольга", "Мохова Галина"] },
        { id: 35, names: ["Бурыкина Анастасия", "Садовская Екатерина"] },
        { id: 36, names: ["Виноградова Екатерина", "Григорян Наталья"] },
        { id: 37, names: ["Антипанова Серафима", "Шелудякова Виктория"] },
        { id: 38, names: ["Джафарова Камила", "Смельцова Ксения"] },
        { id: 39, names: ["Савельева Анна", "Языкова Елена"] },
        { id: 40, names: ["Мишеквич Эдуард", "Дёмин Владислав"] },
        { id: 41, names: ["Фионина Ольга", "Маклакова Олеся"] },
        { id: 42, names: ["Мокрова Анастасия", "Маркелова Арина"] },
        { id: 43, names: ["Копылов Максим", "Костенко Никита"] },
        { id: 44, names: ["Заботкина Виктория", "Корнилова Екатерина"] },
        { id: 45, names: ["Николаева Светлана", "Тункина Елена"] },
        { id: 46, names: ["Подрезов Никита", "Сорокин Юрий"] },
        { id: 47, names: ["Виноградова Валентина", "Владыкина Диана"] },
        { id: 48, names: ["Горельков Александр", "Щукин Александр"] },
        { id: 49, names: ["Баткаев Алмаз", "Богданов Максим"] },
        { id: 50, names: ["Волкова Елена", "Подлегаева Дарья"] },
        { id: 51, names: ["Столярова Софья", "Маслакова Инна"] },
        { id: 52, names: ["Ильин Артём", "Гесейнов Рауф"] },
        { id: 53, names: ["Домовитова Елизавета", "Сисеналиева Сауле"] },
        { id: 54, names: ["Дауткулова Майя", "Мезей Алёна"] },
        { id: 55, names: ["Демьянова Анастасия", "Калинина Лилия"] },
        { id: 56, names: ["Андриянова Анастасия", "Анисимова Марина"] },
        { id: 57, names: ["Шеменков Александр", "Затрутин Кирилл", "Беликов Никита"] },
        { id: 58, names: ["Мельникова Татьяна", "Лазутина Ирина", "Тимченко Юлия"] },
        { id: 59, names: ["Тугузов Роман", "Семенин Михаил", "Ахмедов Роман"] },
        { id: 60, names: ["Чистяков Даниил", "Шатилов Николай", "Юдин Сергей"] },
        { id: 61, names: ["Гужвина Наталья", "Уханова Оксана", "Королева Ольга"] },
        { id: 62, names: ["Галузина Тамара", "Пугачева Алла", "Белова Ирина"] },
        { id: 63, names: ["Шакирова Анна", "Пирогова Нина", "Канаева Мария"] },
        { id: 64, names: ["Павлова Дарья", "Бабина Светлана", "Митина Елена"] },
        { id: 65, names: ["Забежайлов Максим", "Захаревич Александр"] },
        { id: 66, names: ["Уткина Анна", "Чернышова Елена", "Гаврилова Светлана"] },
        { id: 67, names: ["Алышев Максим", "Куликов Максим", "Матвеев Евгений"] },
        { id: 68, names: ["Мясникова Елена", "Касаткина Екатерина"] },
        { id: 69, names: ["Максакова Ольга", "Смирнова Анна", "Зайцева Юлия"] },
        { id: 70, names: ["Лаптев Евгений", "Ситцов Евгений", "Кузин Михаил"] },
        { id: 71, names: ["Романов Иван", "Доброхотов Леонид", "Герасимов Владислав"] },
        { id: 72, names: ["Пахарев Егор", "Павлов Андрей", "Попов Илья"] },
        { id: 73, names: ["Леунин Александр", "Мусин Ринат"] },
        { id: 74, names: ["Масленникова Алина", "Лукина Александра", "Михеева Анна", "Васина Елизавета", "Васина Анастасия"] },
        { id: 75, names: ["Евдокимов Илья", "Вишняков Антон", "Михалёв Ярослав", "Романов Роман"] },


    ];

    const scrollToRow = (row) => {
        if (row) {
            const rowTop = row.offsetTop;
            const rowHeight = row.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollToPosition = rowTop + rowHeight / 2 - windowHeight / 2;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleSearch = () => {
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const names = row.cells[1].querySelectorAll('div');

            names.forEach(nameDiv => {
                const name = nameDiv.innerText;
                if (name.toLowerCase().includes(searchQuery.toLowerCase())) {
                    scrollToRow(row);
                }
            });
        });

        setSearchQuery('');
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleScroll = () => {
        const rows = document.querySelectorAll('tbody tr');
        const seventhRow = rows[6];

        if (seventhRow) {
            const seventhRowTop = seventhRow.offsetTop;
            const windowHeight = window.innerHeight;
            const scrolled = window.scrollY;

            if (scrolled > seventhRowTop) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        }

        const bottomSpacerTop = bottomSpacerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (bottomSpacerTop <= windowHeight) {
            setIsSticky(false);
        } else {
            setIsSticky(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={'FaqLiving_wrapper'}>
            <div className={'FaqLiving_image'}>
                <div className={"FaqLiving_headerText"}>
                    <img className={'FaqLiving_headerText_img'} 
                         src='/assets/living.svg'
                         alt='123'/>
                </div>
                <img className={'FaqLiving_image_img'}
                     src='/assets/logo.svg'
                     alt="123"/>
            </div>
            <div className={'FaqLiving_text'}>
                <div className="search-container">
                    <div className="search-input-container">
                        <input 
                            type="text" 
                            placeholder="Поиск по фамилии..." 
                            value={searchQuery} 
                            onChange={handleInputChange} 
                            onKeyPress={handleKeyPress}
                            className="search-input"
                        />
                        <FaSearch className="search-icon" onClick={handleSearch} />
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Номер</th><th>Гость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guestData.map((guest, index) => (
                            <tr key={guest.id}>
                                <td>{guest.id}</td>
                                <td>
                                    {guest.names.map((name, idx) => (
                                        <div key={idx}>{name}</div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`} onClick={scrollToTop}>
                    <img src="/assets/arrow-up.svg" alt="Scroll to Top" />
                </div>
                <div className={isSticky ? 'sticky-button' : 'normal-button'}>
                    <Link to='/faq'>
                        <Button className={'primary-button'}>Назад</Button>
                    </Link>
                </div>
                <div className="bottom-spacer" ref={bottomSpacerRef}></div>
            </div>
        </div>
    );
};

export default FaqLiving;