export default function Card({ title, children }) {
  return (
    <section className="flex flex-col my-6 mx-4 md:mx-8 bg-white rounded-lg overflow-hidden shadow-sm">
      <h2 className="bg-gray-300 font-bold text-base p-3 text-gray-900">
        {title}
      </h2>
      <div className="flex flex-col p-4 space-y-3">
        {children}
      </div>
    </section>
  );
}
