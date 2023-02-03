import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";
import AboutList from "../datas/about.json"

function About() {
    return (
      <div>
        <main>
          <AboutBanner />
          <div className="container">
      <ul>
          {AboutList.map(({ id, title, content }) => (
            <Collapse key={id} title={title} content={content} />
          ))}
      </ul>
      </div>
        </main>
      </div>
    )
  }
  
  export default About