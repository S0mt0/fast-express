import Image from "next/image";
import Link from "next/link";

export const Logo = ({ path }: { path?: string }) => {
  return (
    <Link href={"/"}>
      <Image
        src={path || "/images/fast-express-logo.png"}
        alt="logo"
        height={200}
        width={220}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
