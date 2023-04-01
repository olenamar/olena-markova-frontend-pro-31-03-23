import React, {useState} from "react";

const AllSmiles = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, emoji: "😊", count: 0 },
    { id: 2, emoji: "😎", count: 0 },
    { id: 3, emoji: "🙃", count: 0 },
    { id: 4, emoji: "🤓", count: 0 },
    { id: 5, emoji: "🤗", count: 0 },
  ]);

  const handleClickEmoji = (id) => {
    const voitSmileys = smileys.map((smiley) => smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley);
    setSmileys(voitSmileys);
  }
    
  const [champion, setChampion] = useState(null);
    
  const showResults = () => {
    let countChampion = 0;
    let smileyChampion = null;
    console.log(smileyChampion)
    smileys.forEach((smiley) => {
      if (smiley.count > countChampion) {
        countChampion = smiley.count;
        smileyChampion = smiley.emoji;
      }
    });
    setChampion(smileyChampion);
  };
    
  return (
    <div className="container">
      <h1>Choose your favorite emoticon:</h1>
    <ul className="smilyes_ul">
      {smileys.map((smiley) => (
        <li className="smilyes_li" key={smiley.id}>
          <span>{smiley.emoji}</span>
          <span>{smiley.count}</span>
          <button className="smiles" onClick={() => handleClickEmoji(smiley.id)}>❤️</button>
        </li>
      ))}
    </ul>
    <div className="champion">
      <button className="result" onClick={showResults}>Show Results</button>
      {champion &&<div>{alert (`The champion is: ${champion}`)}</div>}
      </div>
    </div>
  );
}
  
export default AllSmiles;