import React from "react";
import { components, isValidArray } from "../../utils";
import { Grid, Box } from "@material-ui/core";

const ResultTab = (props) => {
  const { config } = props;

  const renderButtons = () =>
    isValidArray(config) &&
    config.items
      .filter((component) => component.type === "button")
      .map((item, i) => (
        <Grid key={i} item>
          {React.createElement(components[item.type], { ...item })}
        </Grid>
      ));

  const renderFromConfig = () =>
    isValidArray(config) &&
    config.items
      .filter((component) => component.type !== "button")
      .map((item, i) => (
        <Grid key={i} item md={6}>
          {React.createElement(components[item.type], { ...item })}
        </Grid>
      ));

  return (
    <>
      <Box
        width="500px"
        border={1}
        borderRadius={3}
        justifyContent="center"
        mx="auto"
        my={4}
        py={3}
        px={3}
      >
        <Box>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            {renderFromConfig()}
          </Grid>
        </Box>

        <Box py={1}>
          <Grid container spacing={2} direction="row" justify="flex-end">
            {renderButtons()}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ResultTab;
