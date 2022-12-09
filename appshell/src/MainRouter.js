import React, { lazy, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress, Grid } from "@material-ui/core";
import { NotFound } from "./NotFound";

const MyAccount = lazy(() => import("MyAccount/MyAccount"));
const Catalog = lazy(() => import("Catalog/Catalog"));
const SignIn = lazy(() => import("SignIn/SignIn"));

export const MainRouter = () => {
  const renderMicrofrontend = useCallback((Microfrontend) => {
    return(
      <React.Suspense
        fallback={(
          <Grid
            container={true}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh", minWidth: "500px" }}
          >
            <CircularProgress />
          </Grid>
        )}
      >
        <Microfrontend />
      </React.Suspense>
    )
  }, []);

  return (
    <Routes>
      <Route path="/" element={renderMicrofrontend(SignIn)}/>
      <Route path="/myaccount/*" element={renderMicrofrontend(MyAccount)}/>
      <Route path="/shop/*" element={renderMicrofrontend(Catalog)}/>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
