import {NavLink} from 'react-router-dom';
import {navEnum} from '../../core/enums/enums';

const navItems = [
  {name: 'Главная', path: '/'},
  {name: 'Персонажи', path: `/${navEnum.Characters}`},
  {name: 'Локации', path: `/${navEnum.Locations}`},
  {name: 'Эпизоды', path: `/${navEnum.Episodes}`}
];

export const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        {
          navItems.map((item) => {
            return (<li key={item.path}>
              <NavLink
                to={item.path}
                className={({isActive}) => isActive
                  ? 'link active'
                  : 'link'
                }
              >
                {item.name}
              </NavLink>
            </li>)
          })
        }
      </ul>
    </nav>
  );
}
