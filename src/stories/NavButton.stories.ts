import { Meta, StoryObj } from "@storybook/react";
import { NavButton } from "../app/components/NavButton/NavButton";

const meta: Meta<typeof NavButton> = {
    title: 'Fuse/NavButton',
    component: NavButton,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
    args: {
        label: 'Button',
        active: false
    }
}

export const Active: Story = {
    args: {
        label: 'Button',
        active: true
    }
}