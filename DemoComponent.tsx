import { useParams, useSearchParams } from "next/navigation";

export function DemoComponent() {
  const params = useParams();
  const searchParams = useSearchParams();

  return (
    <div>
      <h2>useParams()</h2>
      <pre>{JSON.stringify(params, null, 2)}</pre>

      <h2>useSearchParams()</h2>
      <pre>
        {JSON.stringify(
          Object.fromEntries(searchParams ? searchParams.entries() : []),
          null,
          2
        )}
      </pre>
    </div>
  );
}
