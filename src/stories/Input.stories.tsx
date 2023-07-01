import { Input } from "../app/components/Input/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
    title: 'Fuse/Input',
    component: Input,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Search: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        type: 'search'
    }
}

export const Status: Story = {
    args: {
        label: 'Label',
        type: 'status_select'
    }
}

export const Select: Story = {
    args: {
        label: 'Label',
        type: 'select'
    }
}

