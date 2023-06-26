import logo from "./logo.svg";
import useGetAllFilms from "./hooks/useGetAllFilms";
import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef(null);
  const { error, loading, films } = useGetAllFilms();

  useEffect(() => {
    if (!ref.current) {
      let socket = new WebSocket(
        "wss://javascript.info/article/websocket/demo/hello"
      );

      socket.onopen = (e) => {
        console.info("socket connection is established");
        console.info("sending to server");
        socket.send("My name is John");
      };
    }

    ref.current = "mounted"
  }, [ref]);

  if (error) return <div>error . . . .</div>;

  return (
    <div className="App">
      <header className="App-header">
        {loading && <img src={logo} className="App-logo" alt="logo" />}

        <p>List Of Films</p>

        {!loading &&
          films &&
          films.map(({ id, title, director }) => (
            <a
              key={id}
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{title}</b> - directed by {director}
            </a>
          ))}
      </header>
    </div>
  );
}

export default App;
