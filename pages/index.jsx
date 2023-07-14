import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };
  return (
<div className="landing-page">
      <Head>
        <title>Flex Pay</title>
        <link rel="stylesheet" href="/src/style.css" />

      </Head>
      <header>
        <div className="container">
          <Link href="/">
            <a className="logo flex pay">
              Flex <b>Pay</b>
            </a>
          </Link>
          <ul className="links">
            <li className="selected">
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/about"> Документация</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>просто. быстро. надёжно.</h1>
            <p>
              Мы объеденяем более 10 популярных мерчантов для приема платежей
              Ваших клиентов. Мы предоставляем готовые модули для работы с нашим
              API, больше не нужно задумыватся о подключении мерчантов и подписи
              платежей
            </p>
            <button className="btn0" onClick={handleButtonClick}>
              Начать 
            </button>
          </div>

          <div className="image">
            <Image src="/src/image.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
