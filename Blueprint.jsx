
import { v4 as uuid } from "uuid";

export default function Blueprint() {
  const create = () => {
    const bp = {
      id: uuid(),
      name: "Sample Blueprint",
      fields: []
    };
    const list = JSON.parse(localStorage.getItem("blueprints") || "[]");
    localStorage.setItem("blueprints", JSON.stringify([...list, bp]));
  };

  return <button onClick={create}>Create Blueprint</button>;
}
