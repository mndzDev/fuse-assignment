import { WorkFlowItem } from "../app/components/WorkflowItem/WorkflowItem";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WorkFlowItem> = {
    title: 'Fuse/WorkFlowItem',
    component: WorkFlowItem,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof WorkFlowItem>;

export const Email: Story = {
    args: {
        type: 'EMAIL'
    }
}

export const SMS: Story = {
    args: {
        type: 'SMS'
    }
}

export const Push: Story = {
    args: {
        type: 'PUSH'
    }
}

export const Condition: Story = {
    args: {
        type: 'CONDITION'
    }
}