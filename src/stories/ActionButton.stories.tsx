import { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from '../app/components/ActionButton/ActionButton';
import SvgComponent from "../app/components/Icons/Zap";

const meta: Meta<typeof ActionButton> = {
    title: 'Fuse/ActionButton',
    component: ActionButton,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Simple: Story = {
    args: {
        type: 'simple',
        icon: <SvgComponent color="#344054"/>
    }
}

export const Full: Story = {
    args: {
        label: 'Button',
        type: 'full',
        icon: <SvgComponent color="#344054"/>
    }
}

export const Transparent: Story = {
    args: {
        label: 'Button',
        type: 'link',
        color: '#7F56D9'
    }
}