import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile
}

export default meta;

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {};