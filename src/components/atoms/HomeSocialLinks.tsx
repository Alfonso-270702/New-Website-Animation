import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";

interface SocialItem {
  id: string;
  Icon: IconType;
  uri: string;
  color: string;
}

interface HomeSocialLinksProps {
  data: SocialItem;
  index: number;
}

const HomeSocialLinks = ({ data, index }: HomeSocialLinksProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.a
      key={index}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={data.uri}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ delay: index * 0.1 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}
          ></motion.div>
        )}
        <div className="w-full h-full items-center justify-center rounded-full flex bg-bgPrimary">
          <data.Icon className={`text-texlight`} />
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
