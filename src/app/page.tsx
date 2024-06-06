import AddNewTask from "./components/AddNewTask";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 w-screen">
        <AddNewTask />
      </div>
    </div>
  )
}