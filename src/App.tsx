import { List } from "./components/List"
import { DataProvider } from "./context/DataContext";

export const App = () => {

    return (
      <DataProvider>
        <List />
      </DataProvider>
        
    );
}
