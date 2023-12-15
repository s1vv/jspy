import "./style.css";
import i from './../../img/i.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          src={i} // Замените на путь к вашему изображению
          alt="I"
          className="header__image"
        />
          <h1 className="header__title">
            <strong>Приветствую, меня зовут <em>Вячеслав</em></strong><br />
            изучаю JS и Python
          </h1>
          <div className="header__text">
            <p>после javascript курсов Богдана Стащука и Сергея Балакирева, сделал дополнительные задания,
            надеюсь они помогут закрепить знания.<br />
            Задачи структурированы по темам и проходят проверку тестами Jest</p>
          </div>
          <a href="https://github.com/s1vv/js-jest-tasks" className="btn">Репозиторий GitHub</a>
      
      </div>
    </header>
    );
}
 
export default Header;