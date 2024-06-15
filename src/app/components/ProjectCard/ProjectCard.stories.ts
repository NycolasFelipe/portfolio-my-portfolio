import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/Project Card",
  component: ProjectCard
}

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Primary: Story = {};