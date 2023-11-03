import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function News(prop) {
    const [showReadNews, setShowReadNews] = useState(false);
    const [clickedId, setClickedId] = useState(1);

    // check if home's about clicked data for reading:
    useEffect(() => {
        if (window.location.search.slice(1) !== '') {
            setClickedId(+window.location.search.slice(1));
            setShowReadNews(true);
        }  
    }, [])
    
    return (
        <>
            {!showReadNews ?
                <div className="news-container">
                    <header className="header-news">
                        <h1>XƏBƏRLƏR</h1>
                    </header>
                    <section>
                        <div className="page-info-nav">
                            <Link to={'/'}><h4>Ana Səhifə /</h4></Link>
                            <span>&nbsp; Xəbərlər</span>
                        </div>
                        <div className="content-wrapper">
                            {prop.news && prop.news.map((news) => {
                                return news.headComponent && (<div key={news.id} className="head-news">
                                    <img src={require(`../../images/news/${news.img}`)} alt="news" />
                                    <div className="right-text-content-wrapper">
                                        <h3>{news.title}</h3>
                                        <span>{news.releasedTime}</span>
                                        <p>{news.content}</p>
                                        <button onClick={() => { setShowReadNews(true); setClickedId(news.id); window.scrollTo(0, 0); }}>Ətraflı</button>
                                    </div>
                                </div>)
                            })
                            }
                            <div className="other-news-cards-wrapper">
                                <div className="left-black-bgS">
                                    {prop.news && prop.news.map((news) => {
                                        return (news.blackBG && !news.headComponent) && (
                                            <div key={news.id} className="news-card" onClick={() => { setShowReadNews(true); setClickedId(news.id); window.scrollTo(0, 0); }}>
                                                <div className="img-wrapper">
                                                    <img src={require(`../../images/news/${news.img}`)} alt="news" />
                                                    <h3>{news.title}</h3>
                                                    <span>{news.releasedTime}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="right-light-bgS">
                                    {prop.news && prop.news.map((news) => {
                                        return (!news.blackBG && !news.headComponent) && (
                                            <div key={news.id} className="news-card" onClick={() => { setShowReadNews(true); setClickedId(news.id); window.scrollTo(0, 0); }}>
                                                <div className="img-wrapper">
                                                    <img src={require(`../../images/news/${news.img}`)} alt="news" />
                                                    <h3>{news.title}</h3>
                                                    <span>{news.releasedTime}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                : <div className='read-news-container'>
                    {prop.news && prop.news.map((news) => {
                        return clickedId === news.id && (
                            <div key={news.id} className="read-news-wrapper">
                                <div className="page-info-nav">
                                    <Link to={'/'}><h4>Ana Səhifə / &nbsp;</h4></Link>
                                    <h4 onClick={() => { setShowReadNews(false) }}>&nbsp; Xəbərlər /</h4>
                                    <span>&nbsp;&nbsp; {news.title}</span>
                                </div>
                                <div className="read-news-card">
                                    <h3>{news.title}</h3>
                                    <img src={require(`../../images/news/${news.img}`)} alt="news" />
                                    <span>{news.releasedTime}</span>
                                    <p>{news.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>}
        </>
    )
}
