import {
	CreateProps,
	Create, TextInput, SimpleForm,
	DateInput, NumberInput, BooleanInput,
	DateTimeInput, ImageInput, AutocompleteInput,
} from "react-admin";


//<(()=>(<><button>Botão muito top</button></>))()/>
const Aee = ()=>(<><button>Botão muito top</button></>);

export function UserCreate(props: CreateProps){
	return(
		<Create {...props} title={<><button>Botão muito top</button><h1>AAAAAAAAEEEEEEEEEE</h1></>}>
			<SimpleForm>
				<AutocompleteInput source="name" choices={[
					{id: 0, name: "Cleiton"},
					{id: 1, name: "Jõao"},
					{id: 2, name: "Cleber"},
					{id: 3, name: "Armando"},
					{id: 4, name: "Sildávia"},
					{id: 5, name: "Norte da romênia"},
				]} />
				<ImageInput source="name" />
				<TextInput source="name" />
				<TextInput source="email" />
				<DateInput source="BirthDate" />
				<DateInput source="createdAt" />
				<DateTimeInput source="createdAt" />
				<TextInput source="updatedAt" />
				<TextInput source="enabledFeatures" />
				<NumberInput source="document" />
				<BooleanInput source="metadatas.validDocument" />
				<NumberInput source="address.streetNumber" />
				<NumberInput source="salaryBase" />
				<TextInput source="id" />
			</SimpleForm>
		</Create>
	);
}

