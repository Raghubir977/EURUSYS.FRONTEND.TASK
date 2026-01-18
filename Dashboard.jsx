
export default function Dashboard() {
  const contracts = JSON.parse(localStorage.getItem("contracts") || "[]");
  return (
    <div>
      <h2>Contracts</h2>
      {contracts.map(c => (
        <div key={c.id}>
          {c.blueprintName} - {c.status}
        </div>
      ))}
    </div>
  );
}
