import { Button, Popover } from "antd";

const CurrentUser = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 9999 }}
      >
        <Button />
      </Popover>
    </>
  );
};

export default CurrentUser;
