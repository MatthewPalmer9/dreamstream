function App() {
  return (
    <div className="App">
      <video id="videoPlayer" controls muted="muted" autoPlay>
        <source 
          src="http://localhost:3000/video/big-buck" type="video/mp4"
        />
      </video>
    </div>
  );
}

export default App;
