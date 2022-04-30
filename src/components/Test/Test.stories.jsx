import Test from "./Test";

export default {
  title: "Components/Test",
  component: Test,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    padding: { control: "number", defaultValue: 5 },
  },
};
//we need to export the component
export const Component = (args) => <Test {...args} />;
export const NoArgsComponent = (args) => <Test {...args} />;
export const ABCD = () => <span>ABCD</span>;
