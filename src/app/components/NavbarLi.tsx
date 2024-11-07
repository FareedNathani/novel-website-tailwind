import Link from 'next/link';
import { NavItemProps } from '../../../types/componentTypes';

const NavbarLi: React.FC<NavItemProps> = ({ href, name }) => {
  return (
    <li className="border-b-2 border-transparent hover:border-gray-500">
      <Link href={href} className='block mt-4 lg:mt-1 lg:ml-1 ml-4'>
        {name}
      </Link>
    </li>
  );
};

export default NavbarLi;