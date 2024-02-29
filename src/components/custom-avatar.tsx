import { getNameInitials } from "@/utils";
import { Avatar as AntdAvatar, AvatarProps } from "antd";
import { FC } from "react";

type Props = AvatarProps & {
  name?: string;
};

const CustomAvatar: FC<Props> = ({ name, style, ...rest }) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name || "")}
    </AntdAvatar>
  );
};

export default CustomAvatar;
