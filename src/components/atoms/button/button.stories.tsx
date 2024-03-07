import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "Components/Atoms/Button",
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "success",
        "info",
        "ghost",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variantType: {
      options: ["solid", "outline"],
      defaultValue: "solid",
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    variantType: "solid",
    size: "sm",
    children: "Button Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    variantType: "solid",
    children: "Button Secondary",
  },
};
