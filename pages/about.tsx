import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

const AboutUsPage: NextPage = () => {
    return <div> <Head>
          <meta charSet="UTF-8" />
          <title>Flex Pay</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/src/style.css" />
        </Head><div className="landing-page">
          <header>
            <div className="container">
              <Link href="/" className="logo flex pay">
                Flex <b>Pay</b>
              </Link>
              <ul className="links">
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li className="selected">Документация</li>
              </ul>
            </div>
          </header>
          <div className="content">
            <div className="container">
              <div className="info docs">
                <h5>Инструкция по использованию нашего API:</h5>
                <p style={{ color: "black" }}>
                Стандартный запрос: <strong><code>https://pay.{"{domain}"}/kassa/{"merchant"}/create_bill или
                    check_bill</code></strong><br /><br />

                    Доступные мерчанты (на 13.07.2023):<br />
                    - payok<br />
                    - enot<br />
                    - cryptobot<br /><br />

                    Доступные домены (на 14.10.2023):<br />
                    - cazqev.dev (pay.cazqev.dev)<br /><br/><br/>

                    Документация <b>V1</b>:<br /><br />

               
                  </p>
          

                  <code>

                    <strong>/kassa/enot/create_bill</strong><br />
                    <b>Требуемые значения:</b><br />
                    (передаются в {"json"})<br />
                    - merchant_id: str (merchant_id от enot.io)<br />
                    - secret_key: str (secret_key от enot.io)<br />
                    - order_amount: float | int (сумма заказа в рублях)<br />
                    <strong>Ответ: 
                        {"pay_url: pay_url"},
                        {"bill_id: payment_id"},
                        {"merchant: EnotKassa"}
                        
                        </strong>
                    <br /><br /><br />

                    <strong>/kassa/payok/create_bill</strong><br />
                    <b>Требуемые значения:</b><br />
                    (передаются в {"json"})<br />
                    - shop_id: str | int (shop_id от payok.io)<br />
                    - secret: float | int (secret от payok.io)<br />
                    - currency: str (валюта, по умолчанию {"RUB"})<br />
                    - desc: str (описание, по умолчанию {"buy"})<br />
                    - currency: str (валюта, по умолчанию {"RUB"})<br />
                    - amount: float | int (сумма заказа в рублях)<br />
                    <strong>Ответ: 
                        {"pay_url: pay_url"},
                        {"bill_id: payment_id"},
                        {"merchant: PayOk"}
                      
                        </strong>
                    <br /><br /><br />

                    <strong>/kassa/cryptobot/create_bill</strong><br />
                    <b>Требуемые значения:</b><br />
                    (передаются в {"json"})<br />
                    - api_token: str | int (api_token от @CryptoBot)<br />
                    - asset: str (криптовалюта, например {"USDT"})<br />
                    - amount: int | float (сумма заказа в криптовалюте)<br />
                    - description: str (описание, может быть пустым)<br />
                    <strong>Ответ: 
                        {"pay_url: pay_url"},
                        {"bill_id: payment_id"},
                        {"merchant: CryptoBot"}
                    
                    </strong>
                    <br /><br /><br />

                    <strong>/kassa/enot/check_bill</strong><br />
                    Возращает список всех платежей в json<br />
                    <b>Требуемые значения:</b><br />
                    (передаются в {"json"})<br />
                    - api_key: str | int (api_key от enot.io)<br />
                    - email: str (email от enot.io)<br />
                    - shop_id: str (shop_id от enot.io)<br />
                    <strong>Ответ: json всех платежей
                    </strong>
                    <br /><br /><br />

                    <strong>/kassa/payok/check_bill</strong><br />
                    Возращает список найденных платежей в json<br />
                    <b>Требуемые значения:</b><br />
                    (передаются в {"json"})<br />
                    - api_id: str | int (api_id от payok.io)<br />
                    - api_key: str (api_key от payok.io)<br />
                    - shop_id: str (shop_id от payok.io)<br />
                    - bill_id: str (айди платежа)<br />

                    <strong>Ответ: список найденных платежей
                    </strong>
                    <br /><br /><br />

                    <strong>/kassa/cryptobot/check_bill</strong><br />
                    Возращает список найденных платежей в json<br />
                    <b>Требуемые значения:</b><br />
                    (передаются в {"json"})<br />
                    - api_token: str | int (api_token от @CryptoBot)<br />
                    - bill_id: str (айди платежа(ей) , разделять запятой)<br />
                    - status: str (статус платежа, может быть пустым , {"active илии paid"} )<br />

                    <strong>Ответ: список найденных платежей
                    </strong>
                    <br /><br /><br />


                    </code>

          </div>
        </div>
      </div>
      </div>
      </div>
}

export default AboutUsPage
