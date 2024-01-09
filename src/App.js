import React, { Suspense } from "react";
// ** Router Import
import Router from "./router/Router";
import AuthProvider from "./utility/context/AuthContext";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./views/Error";


const App = () => {
  return (
    <Suspense fallback={null}>
      <AuthProvider>
        <ErrorBoundary FallbackComponent={Error} >
          <Router />
        </ErrorBoundary>
      </AuthProvider>
    </Suspense>
  );
};

export default App;
