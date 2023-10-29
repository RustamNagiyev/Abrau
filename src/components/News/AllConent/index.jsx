import { Link } from 'react-router-dom';
import './index.css';

export default function AllConent(prop) {
    return (
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
                            <img src={require(`../../../images/news/${news.img}`)} alt="news" />
                            <div className="right-text-content-wrapper">
                                <h3>{news.title}</h3>
                                <span>{news.releasedTime}</span>
                                <p>{news.content}</p>
                                {/* <Link to={`/news/read-news/${news.id}`}> */}
                                <Link to={`/news/read-news`}>
                                    <button>Ətraflı</button>
                                </Link>
                            </div>
                        </div>)
                    })
                    }
                    <div className="other-news-cards-wrapper">
                        <div className="left-black-bgS">
                            {prop.news && prop.news.map((news) => {
                                return (news.blackBG && !news.headComponent) && (
                                    <div key={news.id} className="news-card">
                                        <Link to={{ pathname: '/news/read-news', query: 'aa' }}>
                                            <div className="img-wrapper">
                                                <img src={require(`../../../images/news/${news.img}`)} alt="news" />
                                                <h3>{news.title}</h3>
                                                <span>{news.releasedTime}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="right-light-bgS">
                            {prop.news && prop.news.map((news) => {
                                return (!news.blackBG && !news.headComponent) && (
                                    <div key={news.id} className="news-card">
                                        <Link to={`/news/read-news/${news.id}`}>
                                            <div className="img-wrapper">
                                                <img src={require(`../../../images/news/${news.img}`)} alt="news" />
                                                <h3>{news.title}</h3>
                                                <span>{news.releasedTime}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
