import Link from "next/link";
import { useRouter } from "next/router";
import styles from './navbar.module.css'
import { CSSProperties, FC } from 'react';

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      {menuItems.map(({ href, text }) => (
        <ActiveLink key={text} href={href} text={text} />
      ))}
    </nav>
  )
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  text: string;
  href: string;
}

const ActiveLink: FC<Props> = ({ text, href }) => {

  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}