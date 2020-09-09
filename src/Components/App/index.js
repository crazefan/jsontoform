import React, { useState } from "react";
import TabsContainer from "../TabsContainer";
import ErrorDialog from "../ErrorDialog";

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState({});

  const onInvalidJsonError = () => {
    setDialogOpen(true);

    setDialogConfig({
      title: "JSON input error",
      text:
        "Looks like JSON you've entered is incorrect or invalid. Please check the input.",
    });
  };

  return (
    <>
      <TabsContainer onInvalidJsonError={onInvalidJsonError} />;
      <ErrorDialog
        open={dialogOpen}
        dialogConfig={dialogConfig}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};

export default App;
