import dynamic from "next/dynamic";

const OpenLayersMap = dynamic(() => import("@/Components/divs/OpenLayersMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>My Map</h1>
      <OpenLayersMap />
    </div>
  );
}
