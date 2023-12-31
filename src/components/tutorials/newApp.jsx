import Sammy from '../img/sammy.jpeg';
import React, { useState } from 'react';

// create new functional component welcome
function Article(props) {
    return <article>
    <h2>{props.title}</h2>
    {props.body}
    </article>
}

function Header(props) {
  return <header>
   <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
 }

export default function newApp() {

  const [mode, setmode] = useState('Welcome');
  console.log(mode);
  const topics  = [
    {id : 1, title : "html" , body : "html is ..."},
    {id : 2, title : "css" , body : "css is ..."},
    {id : 3, title : "javascript" , body : "javascript is ..."},
  ]
  let content = null;
  if (mode === "Welcome") {
      content = <Welcome />

  } else if (mode === "about") {
      content = <h1 className="header">About</h1>;
  }

  return (
  <>
  <Header title="WEB" onChangeMode= {()=>{
        alert('hi');
  }}/>
      <Nav topics={topics} onChangeMode={(id)=>{
      alert(id); // 1, 2, 3
      {content}
  );
}

