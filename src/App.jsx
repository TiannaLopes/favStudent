import './App.css';
import React,  { useState, Fragment } from 'react' ;
import Header from './Components/Header'


const initialState =[
  {id:1, name : 'Shaivy' , position :2 },
  {id:2, name : 'Sachin' , position :78 },
  {id:3, name : 'Kevin' , position :99 },
  {id:4, name : 'Arushi' , position :40 },
  {id:5, name : 'Rajvi' , position :30 },
  {id:6, name : 'Avinash' , position :9 },
  {id:7, name : 'Ingrid' , position :5 },
  {id:8, name : 'Tanisha' , position :89 },
  {id:9, name : 'Tianna' , position :100},
  {id:10, name : 'Swasti' , position :77 },
  {id:11, name : 'Prashant' , position :45 },
  

]

function App() {


  const [rankings, setRankings] = useState(initialState)
  const [fav, SetFav] = useState('No one selected yet')
  const [clicks, setClicks] = useState(()=>10 * 0)

  function moveUp(name, pos) {
    // do some thing here 
      let newRank = rankings.map(i=>{
        if(i.name === name) {
          return {...i,position:pos-1}
        }
        return i
      })
      setRankings(newRank);
  }

  function moveDown(name, pos) {
    // do some thing here 
    let newRank = rankings.map(i=>{
      if(i.name === name) {
        return {...i,position:pos+1}
      }
      return i
    })
    setRankings(newRank);
}

  

  function changeFavorite(name) {
   setClicks(clicks+1);
    SetFav(name);
  }

  //ReactDOM.render(changeFavorite(), `Currently your favorite person is ${fav}`)
  
 

const showRankings =rankings
.sort((a,b)=> a.position - b.position)
.map((i, idx, arr)=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button onClick={()=>moveUp(i.name, arr[idx-1].position)}>Move Up </button>&nbsp;
 <button onClick={()=>moveDown(i.name, arr[idx+1].position)}> Move Down </button>&nbsp;
</div>)
})

const favs =rankings
.map(i=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button disabled={clicks===3}
 onClick={()=>changeFavorite(i.name)}>{`Click Here to make ${i.name} your Favorite`}</button>{" "}
</div>)
})

return (


  
<div style={{margin:"10vw", padding:"20px"}}>
<h2>Who in the class speaks the most other , Top speakers go on top</h2> 
{showRankings}

<h2> Vote  on your most favorite person in class - Only one -- You guys better vote for me</h2>  
<h3> I have set myself as default ..HAHA  </h3> 
<h4>Only rule , you can change your mind 3 times , after which all buttons are disabled </h4> 
<p>{`Currently your favorite person is ${fav}`}</p> 
{favs}



</div>
  );
}

export default App;

