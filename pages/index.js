import Nav from '../components/Nav';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Nav />
      <section className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Reimbursable Health</h1>
        <p className="text-gray-600">
          Instantly look up Medicare reimbursement data — ASP pricing, HCPCS codes, billing guidelines, and more.
        </p>
        <div className="flex gap-2">
          <input
            className="border p-2 flex-grow rounded"
            placeholder="Enter a drug name or HCPCS code..."
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => alert('Search feature coming soon')}
          >
            Search
          </button>
        </div>
        <div className="text-sm text-gray-500">
          Start by searching above, or choose a tab to explore Part B pricing, Part D formularies, billing guidance, and more.
        </div>
      </section>
    </main>
  );
}