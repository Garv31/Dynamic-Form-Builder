interface StatsCardProps {
  title: string;
  value: string | number;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm font-medium">
          {title}
        </h3>

        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <p className="text-4xl font-bold mt-4 text-slate-900">
        {value}
      </p>

      <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
      </div>
    </div>
  );
}