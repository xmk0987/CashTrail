import CsvUploadMapper from "../components/CSVUploader";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CsvUploadMapper />
    </div>
  );
}
