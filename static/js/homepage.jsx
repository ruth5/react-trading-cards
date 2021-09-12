"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome to the trading card game! </h1>
      <a href="/cards">Trading Cards Page</a>
      <img src="/static/img/balloonicorn.jpg"></img>
      </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
