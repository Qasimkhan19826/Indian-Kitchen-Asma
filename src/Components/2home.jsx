

function Home(props) {

  return(
  <div>
    <section id="home">
        <h1 className="h-primary visible">{props.text[props.language].title}</h1>
        <p className="visible">{props.text[props.language].homedescription}</p>
        <button className="btn">{props.text[props.language].ordernow}</button>

    </section>
  </div>
    
  );
}

export default Home;