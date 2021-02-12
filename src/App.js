

const foodILike = [{
  id: 1,
  name: "Kimchi",
  image: "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465_1280.jpg"
},
{
  id: 2,
  name: "Samgyeopsal",
  image: "https://cdn.pixabay.com/photo/2015/11/20/08/17/meat-1052571_1280.jpg"
},
{
  id: 3,
  name: "Bibimbap",
  image: "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863_1280.jpg"
}
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image}/>
// }

function Food({name, picture}){
  return(
    <div>
      <h1>I like {name}</h1>
      <img src={picture}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* dish(red color) is object */}
      {/* key is just for react, using unique key, for remove warning message */}
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
