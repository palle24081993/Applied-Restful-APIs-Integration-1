import { useState } from "react";

export default function RandomVerse() {
  const [verse, setVerse] = useState("");
  const [reference, setReference] = useState("");

  const getRandomVerse = async () => {
    try {
      const res = await fetch("https://labs.bible.org/api/?passage=random&type=json");
      const data = await res.json();
      setVerse(data[0].text);
      setReference(`${data[0].bookname} ${data[0].chapter}:${data[0].verse}`);
    } catch (err) {
      console.error("Error fetching verse:", err);
    }
  };

  return (
    <div className="card">
      <h2>Random Verse</h2>
      <button onClick={getRandomVerse}>Get Random Verse</button>
      {verse && (
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontStyle: "italic" }}>"{verse}"</p>
          <p style={{ color: "#4f46e5", fontWeight: "bold" }}>{reference}</p>
        </div>
      )}
    </div>
  );
}
