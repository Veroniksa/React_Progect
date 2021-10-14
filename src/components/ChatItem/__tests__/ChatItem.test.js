import React from "react";

import { ChatItemView } from "../ChatItenView";
import { ListItem } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import { render, fireEvent } from "@testing-library/react";


describe("render ChatIten", () => {
  it("returns ListItem", () => {
    const handleDelete = jest.fn();
      const component = render(<ListItem><DeleteIcon onDelete={handleDelete}></DeleteIcon></ListItem>);
      const deleted = component.toContain("DeleteIcon");

      fireEvent(deleted, new MouseEvent('click', { bubbles: true }));

      expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
