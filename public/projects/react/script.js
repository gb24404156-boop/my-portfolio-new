const { useState } = React;

const initialCards = [
  { id:1, value:"🍎", color:"#ff4d4d", matched:false },
  { id:2, value:"🍌", color:"#ffe066", matched:false },
  { id:3, value:"🍇", color:"#9966ff", matched:false },
  { id:4, value:"🥝", color:"#66cc66", matched:false },
  { id:5, value:"🍒", color:"#ff1a66", matched:false },
  { id:6, value:"🍉", color:"#33cc33", matched:false },
  { id:7, value:"🍎", color:"#ff4d4d", matched:false },
  { id:8, value:"🍌", color:"#ffe066", matched:false },
  { id:9, value:"🍇", color:"#9966ff", matched:false },
  { id:10, value:"🥝", color:"#66cc66", matched:false },
  { id:11, value:"🍒", color:"#ff1a66", matched:false },
  { id:12, value:"🍉", color:"#33cc33", matched:false },
];

function shuffle(array){ return array.sort(()=>Math.random()-0.5); }

function CardMatchGame(){
  const [cards, setCards] = useState(shuffle([...initialCards]));
  const [flipped, setFlipped] = useState([]);
  const [matches, setMatches] = useState(0);

  const handleClick = (index)=>{
    if(flipped.includes(index) || cards[index].matched) return;
    const newFlipped = [...flipped,index];
    setFlipped(newFlipped);

    if(newFlipped.length===2){
      const [first,second]=newFlipped;
      if(cards[first].value===cards[second].value){
        const newCards = [...cards];
        newCards[first].matched=true;
        newCards[second].matched=true;
        setCards(newCards);
        setMatches(matches+1);
      }
      setTimeout(()=>setFlipped([]),800);
    }
  };

  const restart=()=>{
    setCards(shuffle([...initialCards].map(c=>({...c,matched:false}))));
    setFlipped([]); setMatches(0);
  };

  return (
    <div className="game-container">
      <h2>카드 매칭 게임</h2>
      <div className="card-grid">
        {cards.map((card,index)=>(
          <div
            key={card.id+index}
            className={`card ${flipped.includes(index)||card.matched?'flipped':''}`}
            onClick={()=>handleClick(index)}
            style={{backgroundColor:flipped.includes(index)||card.matched?card.color:'#eee'}}
          >
            {flipped.includes(index)||card.matched?card.value:'❓'}
          </div>
        ))}
      </div>
      {matches===initialCards.length/2 && (
        <div className="game-complete">
          <p>🎉 모든 카드 매칭 완료!</p>
          <button className="restart-btn" onClick={restart}>다시 시작</button>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CardMatchGame />);

// 모달 열기/닫기 + 스크롤 금지
const modal=document.getElementById("modal");
const openModalBtn=document.getElementById("openModal");
const closeModalBtn=document.getElementById("closeModal");

openModalBtn.onclick = ()=>{
  modal.style.display='flex';
  document.body.style.overflow='hidden';
};
closeModalBtn.onclick = ()=>{
  modal.style.display='none';
  document.body.style.overflow='';
};
window.addEventListener('click', e=>{
  if(e.target===modal){
    modal.style.display='none';
    document.body.style.overflow='';
  }
});
