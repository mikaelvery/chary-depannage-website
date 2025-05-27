export default function PageLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h1>
      <div className="w-5/6 h-[1px] bg-gray-300 mx-auto mb-10" />
      <div className="space-y-6 text-base sm:text-lg leading-relaxed">{children}</div>
    </main>
  );
}
