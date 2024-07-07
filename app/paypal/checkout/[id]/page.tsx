import { Suspense } from "react";

import { CodePage } from "./code";
import { Loader1 } from "../loader1";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <main className="grid place-items-center py-32">
      <Suspense fallback={<Loader1 />}>
        <CodePage id={id} />
      </Suspense>
    </main>
  );
}
