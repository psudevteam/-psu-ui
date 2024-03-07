// @vitest-environment happy-dom
import { render } from "@testing-library/react";
import { Button } from "./";
import { describe, it, expect } from "vitest";

describe("Button Component Test", () => {
  it("Should render successfully", () => {
    const { baseElement } = render(
      <Button size={"sm"} variant={"primary"} variantType={"outline"} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("Should render children", () => {
    const { getAllByText } = render(
      <Button size={"sm"} variant={"primary"} variantType={"outline"}>
        Button
      </Button>
    );
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render disabled", () => {
    const { getAllByText } = render(
      <Button disabled size={"sm"} variant={"primary"} variantType={"outline"}>
        Button
      </Button>
    );
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render loading", () => {
    const { getAllByText } = render(
      <Button size={"sm"} variant={"primary"} variantType={"outline"}>
        Button
      </Button>
    );
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render variant", () => {
    const { getAllByText } = render(
      <Button variant="primary" size={"sm"} variantType={"outline"}>
        Button
      </Button>
    );
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render size", () => {
    const { getAllByText } = render(
      <Button size="sm" variant={"primary"} variantType={"outline"}>
        Button
      </Button>
    );
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render variantType", () => {
    const { getAllByText } = render(
      <Button variantType="outline" size={"sm"} variant={"primary"}>
        Button
      </Button>
    );
    expect(getAllByText("Button")).toBeTruthy();
  });
});
