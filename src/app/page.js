import ResizablePanel from "@/components/ResizablePanel";
import Header from "@/ui/Header";
import AccountSummary from "@/ui/AccountSummary";
import WatchlistPanel from "@/ui/WatchListPanel";
import MainChart from "@/ui/MainChart";
import RecentOrders from "@/ui/RecentOrders";
import Positions from "@/ui/Positions";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <div className="relative h-[calc(100vh-64px)] p-4 overflow-hidden">


        <ResizablePanel
          initialWidth={320}
          initialHeight={280}
          initialTop={20}
          initialLeft={20}
          minWidth={280}
          minHeight={200}
        >
          <AccountSummary />
        </ResizablePanel>

        <ResizablePanel
          initialWidth={400}
          initialHeight={400}
          initialTop={320}
          initialLeft={20}
          minWidth={350}
          minHeight={300}
        >
          <WatchlistPanel />
        </ResizablePanel>

        <ResizablePanel
          initialWidth={800}
          initialHeight={600}
          initialTop={20}
          initialLeft={450}
          minWidth={600}
          minHeight={400}
        >
          <MainChart />
        </ResizablePanel>

        <ResizablePanel
          initialWidth={320}
          initialHeight={300}
          initialTop={20}
          initialLeft={1270}
          minWidth={280}
          minHeight={250}
        >
          <RecentOrders />
        </ResizablePanel>

        <ResizablePanel
          initialWidth={320}
          initialHeight={300}
          initialTop={340}
          initialLeft={1270}
          
          minWidth={280}
          minHeight={250}
        >
          <Positions />
        </ResizablePanel>
      </div>
    </div>
  );
}
