export default function Navbar() {
    return (
      <header className="h-16 bg-white border-b flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>
  
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            G
          </div>
        </div>
      </header>
    );
  }