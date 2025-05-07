export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Reimbursable Health – Medicare Tools</h1>
      <p className="text-gray-600 mb-4">
        Instantly look up Medicare reimbursement data — ASP pricing, HCPCS codes, billing guidelines, and more.
      </p>
      <div className="flex gap-2">
        <input className="border p-2 flex-grow rounded" placeholder="Enter a drug name or HCPCS code..." />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>
    </section>
  );
}