import Header from '../header/Header';

function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <iframe
                width="330"
                height="200"
                src="https://www.youtube.com/embed/WMJJioImKIg?si=_umIKOV9GVe6E9qs"
                title="YouTube video player"
                frameBorder="0"
                allow=""
                allowFullScreen
              />
              <div>

                <a
                  href="https://donate.qiwi.com/payin/jspy.top"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Отблагодарить
                </a>
              </div>

            </li>

          </ul>

        </div>
      </main>

    </>

  );
}

export default Home;
