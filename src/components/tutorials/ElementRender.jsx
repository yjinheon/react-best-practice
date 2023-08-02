
export default function Tick() {
  const element = (
      <div>
      <h2> Hello Tick Tock</h2>   
      <h2> It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  return element
} 

setInterval(Tick,1000) // is 
