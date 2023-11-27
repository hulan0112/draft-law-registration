import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/law">
              <h1>Хуулийн төсөл</h1>
            </Link>
          </li>
          <li>
            <Link href="/committee">
              <h1>Хуралдаан</h1>
            </Link>
          </li>
          <li>
            <Link href="/lawmaker">
              <h1>Хууль санаачлагч</h1>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <h1>Тохиргоо</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
