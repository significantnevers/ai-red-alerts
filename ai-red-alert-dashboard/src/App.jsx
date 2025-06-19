function App() {
  const alerts = [
    { level: "🟥", message: "Lawsuit tripwire breached" },
    { level: "🟠", message: "Insurers testing AI exclusions" },
    { level: "🟠", message: "VC cooling to ~40% YoY" },
    { level: "🟢", message: "GPU prices steady" },
    { level: "🟢", message: "Power draw = 1.5% global load" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl p-6 w-full max-w-md shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">📊 AI Red-Alert Dashboard</h1>
        <ul className="space-y-2">
          {alerts.map((alert, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span>{alert.level}</span>
              <span>{alert.message}</span>
            </li>
          ))}
        </ul>
        <div className="text-sm text-center text-gray-400 mt-4">2025‑06‑19</div>
      </div>
    </div>
  );
}

export default App