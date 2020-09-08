import React from "react";
import { components } from "../../utils";
import { Grid, Box } from "@material-ui/core";

const ResultTab = (props) => {
  const { config } = props;

  console.log(config.items.filter((item) => item.type === ""));

  const renderButtons = () =>
    config &&
    config.items &&
    Array.isArray(config.items) &&
    config.items.length > 0 &&
    config.items
      .filter((component) => component.type === "button")
      .map((item, i) => (
        <Grid key={i} item md={2}>
          {React.createElement(components[item.type], { ...item })}
        </Grid>
      ));

  const renderFromConfig = () =>
    config &&
    config.items &&
    Array.isArray(config.items) &&
    config.items.length > 0 &&
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
        display="flex"
        border={1}
        borderRadius={16}
        alignItems="center"
        justifyContent="center"
        mx="auto"
        my={4}
        py={3}
        px={3}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          {renderFromConfig()}
        </Grid>

        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {renderButtons()}
        </Grid>
      </Box>
    </>
  );
};

export default ResultTab;
