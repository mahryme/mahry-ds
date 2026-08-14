import type { Meta, StoryObj } from "@storybook/react";
import { Container } from ".";

const meta: Meta<{
    type: "default" | "centered" | "article";
    children: string;
    className?: string;
}> = {
    title: "Components/Atoms/Container",
    component: Container,
    decorators: [
        (Story) => (
            <div className="bg-surf-sec min-h-screen">
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component:
                    "Layout container that constrains content width. Default type flows content naturally with max-width constraint. Centered type centers fixed-width elements vertically and horizontally.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: "inline-radio" },
            options: ["default", "centered", "article"],
            description:
                "Container variant - default flows naturally, centered centers fixed elements, article optimized for reading",
        },
        children: {
            control: { type: "text" },
            description: "Text content shown inside demo",
        },
        className: {
            control: { type: "text" },
            description: "Optional extra utility classes",
        },
    },
    args: {
        type: "default",
        children:
            "This content demonstrates the container behavior. Switch to 'centered' type to see the Box component in action.",
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: (args) => (
        <Container type={args.type} className={args.className}>
            {args.type === "centered" ? (
                <Box>
                    <BoxHeader>
                        <h3 className="typo-ui-title-sm text-text-pr text-center">
                            Centered Container
                        </h3>
                    </BoxHeader>
                    <BoxContent>
                        <p className="typo-ui-body-sm text-text-sec text-center">
                            {args.children}
                        </p>
                    </BoxContent>
                </Box>
            ) : (
                <div className="bg-white p-6 rounded-lg border border-border-default">
                    <h3 className="typo-ui-title-sm text-text-pr mb-3">
                        Default Container
                    </h3>
                    <p className="typo-ui-body-sm text-text-sec">
                        {args.children}
                    </p>
                </div>
            )}
        </Container>
    ),
};

export const DefaultNaturalFlow: Story = {
    render: () => (
        <Container type="default">
            <div className="bg-white p-6 rounded-lg border border-border-default">
                <h2 className="typo-ui-title-base text-text-pr mb-4">
                    Default Container - Natural Flow
                </h2>
                <p className="typo-ui-body-base text-text-sec mb-6">
                    Content flows naturally from left to right, using available
                    width up to the maximum constraint (90rem). Perfect for
                    dashboards, articles, and layouts that need to utilize
                    horizontal space efficiently.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-neutral-50 p-4 rounded border">
                        <h3 className="typo-ui-label-base text-text-pr">
                            Dashboard Card
                        </h3>
                        <p className="typo-ui-body-sm text-text-sec">
                            Utilizes available width
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded border">
                        <h3 className="typo-ui-label-base text-text-pr">
                            Article Content
                        </h3>
                        <p className="typo-ui-body-sm text-text-sec">
                            Flows naturally
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded border">
                        <h3 className="typo-ui-label-base text-text-pr">
                            Data Display
                        </h3>
                        <p className="typo-ui-body-sm text-text-sec">
                            Respects max width
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: "Default container allows natural content flow with width constraints. Ideal for dashboards and general page layouts.",
            },
        },
    },
};

export const CenteredElements: Story = {
    render: () => (
        <Container type="centered">
            <Box>
                <BoxHeader>
                    <h2 className="typo-ui-title-base text-text-pr text-center">
                        Centered Container
                    </h2>
                </BoxHeader>
                <BoxContent>
                    <p className="typo-ui-body-base text-text-sec text-center">
                        Elements are centered both horizontally and vertically
                        within the viewport. Perfect for forms, authentication
                        panels, and focused content.
                    </p>
                    <div className="space-y-3">
                        <div className="w-full px-4 py-2 bg-yellow-100 rounded border text-center">
                            <span className="typo-ui-label-sm text-text-pr">
                                Login Form
                            </span>
                        </div>
                        <div className="w-full px-4 py-2 bg-blue-100 rounded border text-center">
                            <span className="typo-ui-label-sm text-text-pr">
                                Modal Content
                            </span>
                        </div>
                        <div className="w-full px-4 py-2 bg-green-100 rounded border text-center">
                            <span className="typo-ui-label-sm text-text-pr">
                                Focused Panel
                            </span>
                        </div>
                    </div>
                </BoxContent>
            </Box>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: "Centered container centers elements both horizontally and vertically. Ideal for forms, authentication screens, and focused content panels.",
            },
        },
    },
};

export const ArticleLayout: Story = {
    render: () => (
        <Container type="article">
            <section>
                <h1 className="typo-ui-title-lg text-text-pr mb-6">
                    Article Container
                </h1>
                <p className="typo-ui-body-base text-text-sec mb-4 leading-relaxed">
                    The article container is optimised for reading content with
                    a maximum width of 3xl (48rem) and centered layout. Perfect
                    for blog posts, documentation and long-form content.
                </p>
                <p className="typo-ui-body-base text-text-sec mb-4 leading-relaxed">
                    This container provides comfortable reading width that
                    prevents eye strain from overly wide text lines, while
                    maintaining proper spacing and typography hierarchy.
                </p>
                <h2 className="typo-ui-title-base text-text-pr mt-8 mb-4">
                    Ideal Use Cases
                </h2>
                <ul className="typo-ui-body-base text-text-sec space-y-2 mb-6">
                    <li>• Blog articles and posts</li>
                    <li>• Documentation pages</li>
                    <li>• Terms of service and privacy policies</li>
                </ul>
                <p className="typo-ui-body-base text-text-sec leading-relaxed">
                    The container automatically handles responsive spacing and
                    maintains readability across different screen sizes.
                </p>
            </section>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: "Article container is optimised for reading with a narrower max-width (3xl) and centered layout. Perfect for blog posts, documentation, and long-form content.",
            },
        },
    },
};
