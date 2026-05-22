interface Props {

  title: string;

  metric: string;

  threshold: number;
}

export default function AlertCard({
  title,
  metric,
  threshold,
}: Props) {

  return (
    <div className="rounded-2xl border border-red-200 bg-white p-6">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-slate-500">
        Metric: {metric}
      </p>

      <p className="mt-2 text-red-500">
        Threshold: {threshold}
      </p>

    </div>
  );
}