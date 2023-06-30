import { Breadcrumbs } from "../app/components/Breadcrumbs/Breadcrumbs";
import { Header } from "../app/components/Header/Header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
    title: 'Fuse/Header',
    component: Header,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Header>;

export const RegularHeader: Story = {
    args: {
        title: 'Title'
    }
}

export const BreadcrumbsHeader: Story = {
    args: {
        title: 'Title',
        breadcrumbPages: <Breadcrumbs pages={[{name: 'Page 1'}]}/>
    }
}