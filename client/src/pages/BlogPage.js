import React from 'react'
import BlogNews from '../components/BlogNews/BlogNews';
import s from './blog.module.css'
import One from '../img/blog/1.jpg'
import Two from '../img/blog/2.jpg'
import Three from '../img/blog/3.jpg'
import Four from '../img/blog/4.jpg'
import Five from '../img/blog/5.jpg'
import Six from '../img/blog/6.jpg'
import Seven from '../img/blog/7.jpg'
import Eight from '../img/blog/8.jpg'
import Nine from '../img/blog/9.jpg'
import Ten from '../img/blog/10.jpg'
import Eleven from '../img/blog/11.jpg'
import Twelve from '../img/blog/12.jpg'
import Thirteen from '../img/blog/13.jpg'
import Fourteen from '../img/blog/14.jpg'
import Fiveteen from '../img/blog/15.jpg'
import Sixteen from '../img/blog/16.jpg'
import Seventeen from '../img/blog/17.jpg'
import Eighteen from '../img/blog/18.jpg'

const BlogPage = () => {
    return (
        <div className={s.static}>
            <div className={s.inner}>
                <h1 className={s.h1News}>Блог</h1>
                <div className={s.blogWrapper}>
                    <BlogNews
                        img={One}
                        link='https://avanchange.com/ru/blog/148-kak-podklyuchit-polygon-network-v-metamask.html'
                        title='Как подключить Polygon Network в MetaMask?'
                        date='18 Апр 2022'
                        text='Polygon, вероятно, был одним из самых широко обсуждаемых решений для масштабирования второго уровня для Ethereum в 2021 году, благодаря невероятно высокой скорости транзакций при гораздо меньших затратах. Чтобы помочь вам подключить ваш кошелек MetaMask к Polygon, мы создали пошаговое руководство.'
                    />
                    <BlogNews
                        img={Two}
                        link='https://avanchange.com/ru/blog/147-kak-podklyuchit-harmony-one-v-metamask.html'
                        title='Как подключить Harmony One в MetaMask?'
                        date='14 Апр 2022'
                        text='2021 год стал годом межцепочечных сетей. Появилось несколько новых сетей, которые обещают кросс-цепочечную функциональность с "молниеносной" скоростью транзакций при минимальных затратах. Одна из них - Harmony One, открытый и быстрый блокчейн.'
                    />
                    <BlogNews
                        img={Eighteen}
                        link='https://avanchange.com/ru/blog/146-kak-zasteikat-near-cherez-veb-koshelek-near-wallet.html'
                        title='Как застейкать NEAR через веб-кошелек Near Wallet'
                        date='12 Апр 2022 '
                        text='NEAR - это разделенная PoS-платформа на основе блокчейна уровня 1 и смарт-контрактов, разработанная для обеспечения высокой производительности и масштабируемости. Он представляет собой блокчейн с открытым исходным кодом для быстрого создания приложений.'
                    />
                    <BlogNews
                        img={Three}
                        link='https://avanchange.com/ru/blog/143-cena-bitcoin-vyrosla-na-10-na-etoi-nedele-tri-vozmojnye-prichiny.html'
                        title='Цена Биткоина выросла на 10% на этой неделе - три возможные причины'
                        date='25 Мар 2022 '
                        text='За последнюю неделю биткоин подорожал на 10% - на момент написания статьи крупнейшая в мире криптовалюта достигла отметки $44 651. Пробив отметку $45 000, BTC достигнет цены, которой не было в течение месяца, и преодолеет важнейший уровень сопротивления.'
                    />
                    <BlogNews
                        img={Four}
                        link='https://avanchange.com/ru/blog/144-poteryali-bitcoin-navsegda-kak-vosstanovit-poteryannuyu-kriptovalyutu.html'
                        title='Потеряли Bitcoin навсегда? Как восстановить потерянную криптовалюту?'
                        date='23 Мар 2022 '
                        text='Вы не уверены, что отправили биткоин по правильному адресу, или потеряли ключи и не знаете, как их восстановить? Даже спустя более десяти лет люди все еще не знают, что именно означает "потерять Bitcoin". Не знают когда могут, а когда не могут восстановить свои Биткоины.'
                    />
                    <BlogNews
                        img={Five}
                        link='https://avanchange.com/ru/blog/145-kak-podklyuchit-avalanche-avax-v-metamask.html'
                        title='Как подключить Avalanche (AVAX) в MetaMask?'
                        date='21 Мар 2022 '
                        text='В 2021 году у Avalanche был, вероятно, один из самых захватывающих "бычьих рынков" в качестве основного блокчейн сети 1-ого уровня (L1). Блокчейн обещает чрезвычайно высокую скорость транзакций при гораздо меньших затратах.'
                    />
                    <BlogNews
                        img={Six}
                        link='https://avanchange.com/ru/blog/142-steiking-solana-protocol-sol-poshagovaya-instrukciya.html'
                        title='Стейкинг Solana Protocol (SOL). Пошаговая инструкция'
                        date='04 Мар 2022 '
                        text='В активах у вас имеется Solana (SOL)? Почему бы не сделать так, чтобы ваши теокены начали зарабатывать пассивный доход? Прочтите данную статью с пошаговой инструкцией по стейкингу Солана для получения максимального дохода!'
                    />
                    <BlogNews
                        img={Seven}
                        link='https://avanchange.com/ru/blog/141-v-rossii-aktivno-nachali-pokupat-kriptovalyutu-za-rubli.html'
                        title='В России активно начали покупать криптовалюту за рубли и участки Метавселенной'
                        date='02 Мар 2022 '
                        text='Почти за неделю объём торгов, по покупке криптовалюты на рубли, вырос более чем в два раза и достиг 1,5 млрд рублей. На фоне чего Bitcoin буквально за 2 дня подорожал более чем на 18% и достиг отметки в $45 077.'
                    />
                    <BlogNews
                        img={Eight}
                        link='https://avanchange.com/ru/blog/140-chto-takoe-kriptoarbitraj-i-kak-izvlech-iz-nego-vygodu.html'
                        title='Что такое криптоарбитраж и как извлечь из него выгоду?'
                        date='20 Фев 2022 '
                        text='Криптоарбитраж - это популярный метод, позволяющий потенциально получать приличную прибыль от разницы цен на различных криптовалютных рынках. Покупка и продажа криптовалют может быть осуществлена таким образом, что это принесет постоянную прибыль.'
                    />
                    <BlogNews
                        img={Nine}
                        link='https://avanchange.com/ru/blog/139-analiz-ceny-babydoge-stoit-li-pokupat.html'
                        title='Анализ цены BabyDoge, стоит ли покупать?'
                        date='12 Фев 2022 '
                        text='Цена Baby Doge совершила неожиданный поворот от уровня сопротивления $0,0000000025, 21 января, который обвалил ее на 42%.'
                    />
                    <BlogNews
                        img={Ten}
                        link='https://avanchange.com/ru/blog/138-indeks-satoshi-pervaya-kommunal-naya-nft-predlagayuschaya-avtomatizaciyu-kriptoinvesticii.html'
                        title='Индекс Сатоши: Первая коммунальная НФТ, предлагающая автоматизацию криптоинвестиций'
                        date='10 Фев 2022 '
                        text='Средний инвестор не дотягивает до рынка, получая почти на 50% меньше прибыли, чем фондовый рынок.'
                    />
                    <BlogNews
                        img={Eleven}
                        link='https://avanchange.com/ru/blog/137-spacex-s-starlink-budet-prinimat-plateji-v-dogecoin-posle-tesla-nameknul-elon-mask.html'
                        title="SpaceX's Starlink будет принимать платежи в Dogecoin после Tesla, намекнул, Элон Маск"
                        date='08 Фев 2022 '
                        text='В последние месяцы Dogecoin переживает подъем, подпитываемый новостями о принятии криптовалюты.'
                    />
                    <BlogNews
                        img={Twelve}
                        link='https://avanchange.com/ru/blog/136-rekomendacii-irs-kak-kriptoinvestory-mogut-soobschat-o-svoix-pokupkax-v-nalogovyx-formax.html'
                        title='Рекомендации IRS, как криптоинвесторы могут сообщать о своих покупках в налоговых формах'
                        date='06 Фев 2022 '
                        text='Служба внутренних доходов (IRS) подготовила руководство, которое поможет людям подать налоговую декларацию по криптовалютам.'
                    />
                    <BlogNews
                        img={Thirteen}
                        link='https://avanchange.com/ru/blog/135-kollekciya-nft-yaxt-kluba-bored-ape-bayc-vse-chto-vam-nujno-znat.html'
                        title='Коллекция NFT яхт-клуба Bored Ape (BAYC): Все, что вам нужно знать'
                        date='04 Фев 2022 '
                        text='Вот все, что вам нужно знать об одной из самых популярных коллекций NFT - Bored Ape Yacht Club (BAYC).'
                    />
                    <BlogNews
                        img={Fourteen}
                        link='https://avanchange.com/ru/blog/134-xeshreit-i-slojnost-litecoin-ltc-vosstanavlivayutsya-nesmotrya-na-padenie-ceny.html'
                        title='Хэшрейт и сложность Litecoin (LTC) восстанавливаются, несмотря на падение цены'
                        date='02 Фев 2022 '
                        text='Цена Litecoin еще не достигла значительного восстановления, однако, хэшрейт сети вырос до уровня, который последний раз наблюдался в августе 2019 года.'
                    />
                    <BlogNews
                        img={Fiveteen}
                        link='https://avanchange.com/ru/blog/133-chto-takoe-kriptopanki-i-pochemu-oni-takie-dorogie.html'
                        title='Что такое криптопанки и почему они такие дорогие?'
                        date='31 Янв 2022 '
                        text='CryptoPunks - это самая древняя коллекция NFT, добытая в 2017 году. Из этого руководства вы узнаете все необходимое: самые дорогие Панки, как их купить, кто их создал и многое другое.'
                    />
                    <BlogNews
                        img={Sixteen}
                        link='https://avanchange.com/ru/blog/132-rukovodstvo-i-obzor-decentraland-kak-igrat-v-blokchein-igru.html'
                        title='Руководство и обзор Decentraland: Как играть в блокчейн-игру?'
                        date='29 Янв 2022 '
                        text='Decentraland стал известным именем в стране криптовалютных метавселенных. Вот полное руководство по ней и по тому, как в нее играть.'
                    />
                    <BlogNews
                        img={Seventeen}
                        link='https://avanchange.com/ru/blog/131-kak-dobyvat-monero.html'
                        title='Как добывать Монеро'
                        date='27 Янв 2022 '
                        text='Майнинг Monero - одна из последних монет, которую вы можете легко добыть самостоятельно в домашних условиях - так как же на самом деле начать добывать эту монету для приватности?'
                    />
                </div>
                
            </div>
        </div>
    );
};

export default BlogPage;