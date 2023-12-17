import dynamic from "next/dynamic";
const MapWidget = dynamic(() => import("./MapWidget"), { ssr: false });
export default MapWidget;
