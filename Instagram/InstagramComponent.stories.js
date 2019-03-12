/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Instagram from "./InstagramComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Instagram", module)
  .add("default", () => <Instagram {...myProps} {...actions} />)
  .add("pinned", () => <Instagram {...myProps} pinned={true} {...actions} />)
  .add("archived", () => (
    <Instagram {...myProps} archived={true} {...actions} />
  ));
