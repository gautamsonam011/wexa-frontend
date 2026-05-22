interface Props {

  title: string;

  value: string;

  growth?: string;
}

export default function KPIWidget({
  title,
  value,
  growth,
}: Props) {

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        {value}
      </h2>

      {growth && (

        <p className="mt-2 text-sm text-green-600">

          {growth}

        </p>
      )}

    </div>
  );
}