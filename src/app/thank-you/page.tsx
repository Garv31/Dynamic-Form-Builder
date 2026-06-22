export default function ThankYouPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
          <div className="text-6xl mb-4">🎉</div>
  
          <h1 className="text-3xl font-bold mb-3">
            Response Submitted
          </h1>
  
          <p className="text-gray-600">
            Thank you for filling out the form.
            Your response has been recorded successfully.
          </p>
        </div>
      </div>
    );
  }