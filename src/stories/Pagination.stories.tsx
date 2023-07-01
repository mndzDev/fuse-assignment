import { Pagination } from "../app/components/Pagination/Pagination";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
    title: 'Fuse/Pagination',
    component: Pagination,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Simple: Story = {
    args: {
        currentPage: 1,
        numberOfPages: 35
    }
}