import { 
	AdminUI, Resource, useAuthenticated,
	ListGuesser, EditGuesser, 
} from "react-admin";
import User from "./components/CRUDReactAdmin";
import { apis } from "./routes";
import "./App.css";


function App() {
	useAuthenticated();

	return (
		<AdminUI theme={{
			palette: {
				type: "dark",
				primary: {
					main: "#EEE",
				},
				secondary: {
					main: "#444",
				}
			}
		}}>
			<Resource name={apis.users} list={User.UserList} edit={User.UserEdit} create={User.UserCreate} />
			<Resource name={apis.cards} list={ListGuesser} edit={EditGuesser}/>
		</AdminUI>
	);
}

export default App;
