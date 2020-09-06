import React from "react";
import { components } from "../OutputComponents";

const ResultTab = (props) => {
  const { config } = props;

  const renderFromConfig = () =>
    config &&
    config.items &&
    Array.isArray(config.items) &&
    config.items.length > 0 &&
    config.items.map((item) =>
      React.createElement(components[item.type].component, { ...item })
    );

  return <>{renderFromConfig()}</>;
};

export default ResultTab;
