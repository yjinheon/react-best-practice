import Sammy from '../img/sammy.jpeg';


// create new functional component welcome

export default function Welcome() {
  const [mode, setMode] = useState('Welcome');
  console.log('Welcome mode : ', mode);
  // 값을 바꿀 때 setmode 사용
  let content = null;
  if (mode === 'Welcome') {
    content = <h1 className="header">Welcome to React Best Practice2 TEST</h1>;
  } else if (mode === 'about') {{
    content = <h1 className="header">About</h1>;
  }

  return (
  <>
  <div className="wrapper">
  <h1>Welcome to React Best Practice</h1>
   {content}
  <h3> React Best Practice</h3>
  <p>React Best Practice is a collection of best practices for React</p>
  <img src={Sammy} alt ="Sammy" width="200" height="200" />
  </div>
  </>
  );
}

