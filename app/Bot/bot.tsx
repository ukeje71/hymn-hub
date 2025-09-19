import { ArrowRightIcon } from "lucide-react";

export default function Bot() {
  return (
    <div>
      {/* Bot Assistant */}
      <section className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Bot Assistant</h2>
        <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              AI
            </div>
            <p className="text-slate-700 text-sm pt-1">
              Hello! How can I assist you with hymn metadata today?
            </p>
          </div>

          <button className="w-full px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
            Find me "Amazing Grace" details.
          </button>

          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <p className="text-sm text-slate-700">
              "Amazing Grace" is a Christian hymn published in 1779 with words
              by English poet John Newton.
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow px-2 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
            />
            <button className="px-2 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                <ArrowRightIcon size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
