import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainArea from "./Components/MainArea/MainArea";
import ListNotes from "./Components/ListNotes/ListNotes";
import DisplayNote from "./Components/DisplayNote/DisplayNote";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
       <Route path='/' exact element={<ListNotes />} />
       <Route path="/edit" exact element={<MainArea />} />
       <Route path="displayNote/:id" exact element={<DisplayNote />} />
      </Routes>
    </>
  );
}

export default App;
