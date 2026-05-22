interface Props {

  name: string;

  frequency: string;
}

export default function ReportCard({
  name,
  frequency,
}: Props) {

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        {name}
      </h2>

      <p className="mt-2 text-slate-500">
        Frequency: {frequency}
      </p>

      <button className="mt-4 rounded-lg bg-black px-4 py-2 text-white">

        Download

      </button>

    </div>
  );
}