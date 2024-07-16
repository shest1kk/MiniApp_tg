import React, { useState, useEffect, useRef } from "react";
import './FaqLiving.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const FaqLiving = () => {
    const [isSticky, setIsSticky] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedRow, setHighlightedRow] = useState(null);
    const bottomSpacerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const bottomSpacerTop = bottomSpacerRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (bottomSpacerTop <= windowHeight) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearch = () => {
        const elements = document.querySelectorAll('td');
        elements.forEach(el => {
            const names = el.textContent.split('<br/>'); // Разделяем ячейку на имена
            names.forEach(name => {
                if (name.toLowerCase().includes(searchQuery.toLowerCase())) {
                    setHighlightedRow(el.parentNode);
                    setTimeout(() => {
                        setHighlightedRow(null);
                    }, 3000); // Выделение будет длиться 3 секунды
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

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
                    <input 
                        type="text" 
                        placeholder="Поиск по фамилии..." 
                        value={searchQuery} 
                        onChange={handleInputChange} 
                        onKeyPress={handleKeyPress}
                        className="search-input"
                    />
                    <Button onClick={handleSearch} className="search-button">Найти</Button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Номер</th><th>Гость</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className={highlightedRow === 1 ? 'highlighted' : ''}><td>1</td><td>Кушкин Алексей<br/>Пилосян Меликсет</td></tr>
                    <tr className={highlightedRow === 2 ? 'highlighted' : ''}><td>2</td><td>Леваков Александр<br/>Егоров Александр</td></tr>
                    <tr className={highlightedRow === 3 ? 'highlighted' : ''}><td>3</td><td>Елсаков Алексей<br/>Лапшин Артем</td></tr>
                    <tr className={highlightedRow === 4 ? 'highlighted' : ''}><td>4</td><td>Тулина Мария<br/>Кабиева Диана</td></tr>
                    <tr className={highlightedRow === 5 ? 'highlighted' : ''}><td>5</td><td>Баранов Иван<br/>Сморода Роман</td></tr>
                    <tr className={highlightedRow === 6 ? 'highlighted' : ''}><td>6</td><td>Хромов Роман<br/>Ахметвалеев Артур</td></tr>
                    <tr className={highlightedRow === 7 ? 'highlighted' : ''}><td>7</td><td>Полянская Светлана<br/>Шичкина Екатерина</td></tr>
                    <tr className={highlightedRow === 8 ? 'highlighted' : ''}><td>8</td><td>Шарова Кристина<br/>Познаева Лилит</td></tr>
                    <tr className={highlightedRow === 9 ? 'highlighted' : ''}><td>9</td><td>Михеева Елена<br/>Красавина Виктория</td></tr>
                    <tr className={highlightedRow === 10 ? 'highlighted' : ''}><td>10</td><td>Трошкина Екатерина<br/>Павлюк Сильвия</td></tr>
                        <tr className={highlightedRow === 11 ? 'highlighted' : ''}><td>11</td><td>Костерина Дарья<br/>Сидорова Анастасия</td></tr>
                        <tr className={highlightedRow === 12 ? 'highlighted' : ''}><td>12</td><td>Тугузов Роман<br/>Нурмуханов Аят</td></tr>
                        <tr className={highlightedRow === 13 ? 'highlighted' : ''}><td>13</td><td>Власов Иван<br/>Ярмухамедов Тимур</td></tr>
                        <tr className={highlightedRow === 14 ? 'highlighted' : ''}><td>14</td><td>Мильниченко Анастасия<br/>Прудникова Светлана</td></tr>
                        <tr className={highlightedRow === 15 ? 'highlighted' : ''}><td>15</td><td>Лепская Екатерина<br/>Болдырева Алия</td></tr>
                        <tr className={highlightedRow === 16 ? 'highlighted' : ''}><td>16</td><td>Дударева Оксана<br/>Пескова Елизавета</td></tr>
                        <tr className={highlightedRow === 17 ? 'highlighted' : ''}><td>17</td><td>Лебедев Дмитрий<br/>Бабушкин Михаил</td></tr>
                        <tr className={highlightedRow === 18 ? 'highlighted' : ''}><td>18</td><td>Юсипов Дмитрий<br/>Еремин Станислав</td></tr>
                        <tr className={highlightedRow === 19 ? 'highlighted' : ''}><td>19</td><td>Муза Юрий<br/>Василенко Максим</td></tr>
                        <tr className={highlightedRow === 20 ? 'highlighted' : ''}><td>20</td><td>Артемова Мария<br/>Молдаванова Олеся</td></tr>
                        <tr className={highlightedRow === 21 ? 'highlighted' : ''}><td>21</td><td>Корнеева Елена<br/>Синёва Евгения</td></tr>
                        <tr className={highlightedRow === 22 ? 'highlighted' : ''}><td>22</td><td>Прокофьева Виктория<br/>Кокорская Ирина</td></tr>
                        <tr className={highlightedRow === 23 ? 'highlighted' : ''}><td>23</td><td>Войнов Роман<br/>Алиев Рифгат</td></tr>
                        <tr className={highlightedRow === 24 ? 'highlighted' : ''}><td>24</td><td>Горбунова Ольга<br/>Нурмуханова Айгуль</td></tr>
                        <tr className={highlightedRow === 25 ? 'highlighted' : ''}><td>25</td><td>Павлова Анастасия<br/>Лукина Замира</td></tr>
                        <tr className={highlightedRow === 26 ? 'highlighted' : ''}><td>26</td><td>Дмитриева Лариса<br/>Кававина Любовь</td></tr>
                        <tr><td>27</td><td>Гулямов Фархад<br/>Жабинский Михаил</td></tr>
                        <tr><td>28</td><td>Юсупова Кристина<br/>Денисова Анна</td></tr>
                        <tr><td>29</td><td>Власова Анна<br/>Салихова Анна</td></tr>
                        <tr><td>30</td><td>Пряхина Надежда<br/>Васенева Катрина</td></tr>
                        <tr><td>31</td><td>Железова Людмила<br/>Танделова Диана</td></tr>
                        <tr><td>32</td><td>Мальцева Ирина<br/>Трифонова Екатерина</td></tr>
                        <tr><td>33</td><td>Орлова Оксана<br/>Савченко Елена</td></tr>
                        <tr><td>34</td><td>Бурыкина Анастасия<br/>Садовская Екатерина</td></tr>
                        <tr><td>35</td><td>Виноградова Екатерина<br/>Григорян Наталья</td></tr>
                        <tr><td>36</td><td>Антипанова Серафима<br/>Шелудякова Виктория</td></tr>
                        <tr><td>37</td><td>Джафарова Камила<br/>Смельцова Ксения</td></tr>
                        <tr><td>38</td><td>Савельева Анна<br/>Языкова Елена</td></tr>
                        <tr><td>39</td><td>Мишкевич Эдуард<br/>Дёмин Владислав</td></tr>
                        <tr><td>40</td><td>Фионина Ольга<br/>Маклакова Олеся</td></tr>
                        <tr><td>41</td><td>Мокрова Анастасия<br/>Маркелова Арина</td></tr>
                        <tr><td>42</td><td>Копылов Максим<br/>Костенко Никита</td></tr>
                        <tr><td>43</td><td>Заботкина Виктория<br/>Корнилова Екатерина</td></tr>
                        <tr><td>44</td><td>Николаева Светлана<br/>Тункина Елена</td></tr>
                        <tr><td>45</td><td>Подрезов Никита<br/>Сорокин Юрий</td></tr>
                        <tr><td>46</td><td>Виноградова Валентина<br/>Владыкина Диана</td></tr>
                        <tr><td>47</td><td>Горельков Александр<br/>Щукин Александр</td></tr>
                        <tr><td>48</td><td>Волкова Елена<br/>Подлегаева Дарья</td></tr>
                        <tr><td>49</td><td>Столярова Софья<br/>Маслакова Инна</td></tr>
                        <tr><td>50</td><td>Ильин Артем<br/>Гусейнов Рауф</td></tr>
                        <tr><td>51</td><td>Минухина Евгения<br/>Климова Ольга</td></tr>
                        <tr><td>52</td><td>Дауткулова Майя<br/>Калинина Лилия</td></tr>
                        <tr><td>53</td><td>Демьянова Анастасия<br/>Мезей Алёна</td></tr>
                        <tr><td>54</td><td>Андриянова Анастасия<br/>Анисимова Марина</td></tr>
                        <tr><td>55</td><td>Шеменков Александр<br/>Затрутин Кирилл<br/>Беликов Никита</td></tr>
                        <tr><td>56</td><td>Бондарева Юлия<br/>Лазутина Ирина<br/>Мохова Галина</td></tr>
                        <tr><td>57</td><td>Прокофьева Мария<br/>Круглова Юлия</td></tr>
                        <tr><td>58</td><td>Чистяков Даниил<br/>Шатилов Николай<br/>Юдин Сергей</td></tr>
                        <tr><td>59</td><td>Гужвина Наталья<br/>Уханова Оксана<br/>Королева Ольга</td></tr>
                        <tr><td>60</td><td>Галузина Тамара<br/>Пугачева Алла<br/>Новикова Нина</td></tr>
                        <tr><td>61</td><td>Шакирова Анна<br/>Пирогова Нина<br/>Канаева Мария</td></tr>
                        <tr><td>62</td><td>Павлова Дарья<br/>Бабина Светлана<br/>Митина Елена</td></tr>
                        <tr><td>63</td><td>Кондраков Кирилл<br/>Забежайлов Максим<br/>Захаревич Александр</td></tr>
                        <tr><td>64</td><td>Уткина Анна<br/>Чернышова Елена<br/>Гаврилова Светлана</td></tr>
                        <tr><td>65</td><td>Алышев Максим<br/>Куликов Максим<br/>Романов Иван</td></tr>
                        <tr><td>66</td><td>Белова Ирина<br/>Мясникова Елена<br/>Касаткина Екатерина</td></tr>
                        <tr><td>67</td><td>Максакова Ольга<br/>Смирнова Анна<br/>Зайцева Юлия</td></tr>
                        <tr><td>68</td><td>Базина Ольга<br/>Красавина Галина</td></tr>
                        <tr><td>69</td><td>Лаптев Евгений<br/>Ситцов Евгений<br/>Кузин Михаил</td></tr>
                        <tr><td>70</td><td>Матвеев Евгений<br/>Доброхотов Леонид<br/>Герасимов Владислав</td></tr>
                        <tr><td>71</td><td>Пахарев Егор<br/>Павлов Андрей<br/>Попов Илья</td></tr>
                        <tr><td>72</td><td>Масленникова Алина<br/>Александра Лукина<br/>Анна Михеева<br/>Васина Елизавета<br/>Васина Анастасия</td></tr>
                        <tr><td>73</td><td>Селезнева Екатерина<br/>Вилонина Юлия</td></tr>
                        <tr><td>74</td><td>Евдокимов Илья<br/>Вишняков Антон<br/>Михалёв Ярослав<br/>Романов Роман</td></tr>
                    </tbody>
                </table>
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
