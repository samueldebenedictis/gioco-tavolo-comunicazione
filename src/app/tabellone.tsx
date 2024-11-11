function Casella() {
  return <div className="md border">Sono una casella</div>;
}

export default function Tabellone() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Casella />
      <Casella />
      <Casella />
      <Casella />
      <Casella />
      <Casella />
      <Casella />
      <Casella />
      <Casella />
    </div>
  );
}
