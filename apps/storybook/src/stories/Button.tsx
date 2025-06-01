import { Button, type ButtonProps } from "ventra-ui";

import "./button.css";

/** Primary UI component for user interaction */
export const ButtonComponent = ({
  type = "default",
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <Button type={type} size={size} {...props}>
      hello ventra-ui!
    </Button>
  );
};
