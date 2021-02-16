import classs from './Header.module.css';
function Header() {
    return (
      <section>
      <nav>
        <ul className={classs.nav_list}>
          <li><a href="/profile">Профиль</a></li>
          <li><a href="/dialogs">Диалоги</a></li>
          <li><a href="#">Меню</a></li>
          <li><a href="#">Данные</a></li>         
        </ul>
      </nav>
      
      </section>
  
    );
  }
  export default Header;