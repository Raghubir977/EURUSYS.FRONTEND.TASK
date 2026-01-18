
import { v4 as uuid } from "uuid";

export default function CreateContract() {
  const blueprints = JSON.parse(localStorage.getItem("blueprints") || "[]");

  const create = (bp) => {
    const c = {
      id: uuid(),
      blueprintId: bp.id,
      blueprintName: bp.name,
      status: "CREATED",
      createdAt: new Date().toISOString()
    };
    const list = JSON.parse(localStorage.getItem("contracts") || "[]");
    localStorage.setItem("contracts", JSON.stringify([...list, c]));
  };

  return (
    <div>
      {blueprints.map(bp => (
        <button key={bp.id} onClick={() => create(bp)}>
          Create from {bp.name}
        </button>
      ))}
    </div>
  );
}
