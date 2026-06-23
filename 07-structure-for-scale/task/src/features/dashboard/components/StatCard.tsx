interface StatCardProps {
  label: string;
  value: string | number;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    // grid grid-cols-3
    <div className="mb-8">
      <div className="bg-white w-64 p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">
            {label}
          </h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
      {/* ... more cards ... */}
    </div>
  )
}
