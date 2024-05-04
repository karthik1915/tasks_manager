import "./App.css";
import { useAppSelector } from "@/hooks";
import { RootState } from "@/redux/store";
import TopBarActions from "@/components/topbarActions";
import SideBar from "@/components/sidebar";

import Tasks from "@/pages/tasks";
import Schedule from "@/pages/schedule";
import Dashboard from "@/pages/dashboard";

function App() {
  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );

  const currentTab = useAppSelector((state) => state.route.route);

  const Tab = (): React.ReactNode => {
    switch (currentTab) {
      case "tasks":
        return <Tasks />;
      case "schedule":
        return <Schedule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      className={`mx-auto h-screen w-screen`}
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <div className="mycontainer m-auto h-full w-full max-w-screen-2xl">
        <div
          className={`col-start-2 flex items-center justify-between border-b border-slate-700 px-2 md:px-6`}
        >
          <p className="text-xl">Dashboard</p>
          <TopBarActions />
        </div>
        <div
          className={`row-span-full flex flex-col items-center border-r border-slate-700 py-4`}
        >
          <SideBar />
        </div>
        <div className="col-start-2 row-start-2">
          <Tab />
        </div>
      </div>
    </div>
  );
}

export default App;
