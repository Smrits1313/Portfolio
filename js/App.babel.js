/* Root app — stacks the two full-height sections and mounts to #root. */
(function () {
  const Hero = window.Hero;
  const Capabilities = window.Capabilities;

  const App = () => (
    <React.Fragment>
      <Hero />
      <Capabilities />
    </React.Fragment>
  );
  window.App = App;

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
})();
