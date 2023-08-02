import Sammy from '../img/sammy.jpeg';

// create new functional component welcome

export default function Welcome() {
  return (
  <>
  <div className="wrapper">
  <h1>Welcom to React Best Practice</h1>
  <h3> React Best Practice</h3>
  <p>React Best Practice is a collection of best practices for React</p>
  <img src={Sammy} alt ="Sammy" width="200" height="200" />
  </div>
  </>
  );
}

