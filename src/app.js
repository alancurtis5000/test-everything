import AppRouter from "./router/app-router";
import AppHeader from "./components/app/app-header/app-header.component";
import AppFooter from "./components/app/app-footer/app-footer.component";
import AppSidebar from "./components/app/app-sidebar/app-sidebar.component";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppSidebar />
      <AppRouter />
      <AppFooter />
    </div>
  );
}

export default App;
