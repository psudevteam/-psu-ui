// @vitest-environment happy-dom
import { render } from "@testing-library/react";
import { Button } from "./";
import { describe, it, expect } from "vitest";

describe("Button Component Test", () => {
  it("Should render successfully", () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it("Should render children", () => {
    const { getAllByText } = render(<Button>Button</Button>);
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render disabled", () => {
    const { getAllByText } = render(<Button disabled>Button</Button>);
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render loading", () => {
    const { getAllByText } = render(<Button state="loading">Button</Button>);
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render variant", () => {
    const { getAllByText } = render(<Button variant="primary">Button</Button>);
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render size", () => {
    const { getAllByText } = render(<Button size="sm">Button</Button>);
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render variantType", () => {
    const { getAllByText } = render(
      <Button variantType="outline">Button</Button>
    );
    expect(getAllByText("Button")).toBeTruthy();
  });

  it("Should render state", () => {
    const { getAllByText } = render(<Button state="default">Button</Button>);
    expect(getAllByText("Button")).toBeTruthy();
  });
});
