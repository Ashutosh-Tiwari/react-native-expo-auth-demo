import COLORS from "constants/color";
import SvgArrowBack from "../../assets/svgs/arrow_back.svg";

const HeaderBack = ({ onPress }: { onPress: () => void }) => {
  return (
    <SvgArrowBack
      width={24}
      height={24}
      fill={COLORS.black}
      onPress={onPress}
    />
  );
};

export default HeaderBack;
