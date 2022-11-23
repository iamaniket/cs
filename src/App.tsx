// import { SplashScreen } from './SplashScreen/SplashScreen';
import { Viewer } from './Viewer/Viewer';
import { LoadingScreen } from './LoadingScreen/LoadingScreen';


function App() {
  return (
    <div>
      {/* <SplashScreen></SplashScreen> */}
      <LoadingScreen></LoadingScreen>
      <Viewer />
    </div>
  );
}

export default App;
