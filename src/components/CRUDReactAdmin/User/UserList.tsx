import { 
	ListProps, List, Datagrid, FunctionField,
	EmailField, TextField, ReferenceField, 
	ChipField, Labeled,	SearchInput,
} from "react-admin";
import LaunchIcon from "@material-ui/icons/Launch";
import { makeStyles } from "@material-ui/core";
import { PostPanel } from "../../PostPanel";


const filters = [
	<SearchInput key={0} source="q" alwaysOn/>,
];

export function UserList(props: ListProps){
	return(
		<List {...props} bulkActionButtons={false} filters={filters} title="Usuários" >
			<Datagrid rowClick="show" expand={<PostPanel/>}>
				<TextField label="Nome de usuário" source="username" />
				<EmailField label="Email" source="email" />
				<CardsNumberField/>

				<ReferenceField label="Titulo do post" source="id" reference="cards">
					<ChipField source="metadatas.name"/>
				</ReferenceField>

				<FunctionField label="Instagram" source="BirthDate" render={()=><a href="https://instagram.com"><LaunchIcon/></a>}/> 
			</Datagrid>
		</List>
	);
}


const CardsNumberField = () => {
	const cardsLength = 0;

	return (
		<Labeled label="Cartões">
			<span>{cardsLength}</span>
		</Labeled>
	);
};