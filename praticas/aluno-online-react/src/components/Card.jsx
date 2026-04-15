export default function Card({ title, items }) {
  return (
    <>
      <section className="flex flex-col f-1 my-4 mx-4 md:mx-8 bg-white rounded-lg overflow-hidden shadow-sm font-sans">
        <h2 className="bg-gray-300 font-bold text-sm p-3">{title}</h2>
        <article className="flex f-1 flex-col p-4 space-y-2">
          {items.map((item, idx) => (
            <p key={idx} className="text-gray-700 text-sm">
              {item}
            </p>
          ))}
        </article>
      </section>
    </>
  );
}
