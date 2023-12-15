import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
          <div className="container">
                
                  <ul className="content-list">
                      <li className="content-list__item">
                        <h2 className="title-2">Отблагодарить можно по ссылке ниже</h2>
                        <a href="https://donate.qiwi.com/payin/jspy.top" target="_blank" className="btn">Донат</a>

                      </li>

                  </ul>

          </div>
      </main>

    </>
    

    );
}
 
export default Home;