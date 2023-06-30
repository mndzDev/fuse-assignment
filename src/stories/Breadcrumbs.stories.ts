import { Breadcrumbs } from "../app/components/Breadcrumbs/Breadcrumbs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Fuse/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
    args: {
        pages: [
            {
                name: 'Page 1',
                current: false
            },
            {
                name: 'Page 2',
                current: false
            },
            {
                name: 'Page 3',
                current: true
            },
        ]
    }
}