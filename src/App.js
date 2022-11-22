import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import LastReleases from "./components/LastReleases";
import LastComponent from "./components/LastComponent";
import ShowContent from "./components/ShowContent";
function App() {
  return (
    <div>
      <MyNavbar />
      <MyWelcome subtitle="Here you can find the books you are looking for!" />
      <LastReleases />
      <ShowContent />
      <LastComponent />
      <MyFooter />
    </div>
  );
}

export default App;
