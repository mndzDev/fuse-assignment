import { Badge } from "../app/components/Badge/Badge";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
    title: 'Fuse/Badge',
    component: Badge,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Badge>;

export const Paid:Story = {
    args: {
        type: 'Paid'
    }
}

export const Cancelled:Story = {
    args: {
        type: 'Cancelled'
    }
}

export const Refunded:Story = {
    args: {
        type: 'Refunded'
    }
}


