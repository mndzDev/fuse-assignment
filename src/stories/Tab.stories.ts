import { Meta, StoryObj } from "@storybook/react";
import { Tab } from '../app/components/Tab/Tab';

const meta: Meta<typeof Tab> = {
    title: 'Fuse/Tab',
    component: Tab,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Tab>;

export const InactiveTab: Story = {
    args: {
        label: 'Tab',
        active: false
    }
}

export const ActiveTab: Story = {
    args: {
        label: 'Tab',
        active: true
    }
}