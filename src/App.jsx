import React, { Suspense } from "react";
import Loader from "./loader/Loader";


// Lazy load the EditableTable component
const EditableTable = React.lazy(() => import("./components/EditableTable"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <EditableTable />
      </Suspense>
    </div>
  );
};

export default App;
