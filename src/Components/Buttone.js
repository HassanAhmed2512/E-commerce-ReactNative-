import { Button } from "native-base";
import { React } from "react";

function Buttone({ mt, bg, color, childern, onPress }) {
  return (
    <Button
      w={"full"}
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{ color: color, fontWeight: "bold" }}
      _pressed={{ bg: bg }}
        onPress={onPress}
    >
        {childern}
    </Button>
  );
}
export default Buttone;
