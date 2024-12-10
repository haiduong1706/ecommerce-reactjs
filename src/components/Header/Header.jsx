import BoxIcon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import { dataBoxIcon, dataMenu } from "./constants";
import styles from "./styles.module.scss";
import Logo from "@icons/images/logo.png";
import Heart from "@icons/svgs/heartIcon.svg";
import Reload from "@icons/svgs/reloadIcon.svg";
import Cart from "@icons/svgs/cartIcon.svg";

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
    styles;
  return (
    <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
        <div className={containerMenu}>
          {dataMenu.slice(0, 3).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
      </div>
      <div>
        <img src={Logo} alt="Logo" style={{ width: "153px", height: "53px" }} />
      </div>
      <div className={containerBoxIcon}>
        <div className={containerMenu}>
          {dataMenu.slice(3, dataMenu.length).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
        <div className={containerBoxIcon}>
          <img width={26} height={26} src={Reload} alt="reload" />
          <img width={26} height={26} src={Heart} alt="heart" />
          <img width={26} height={26} src={Cart} alt="cart" />
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
