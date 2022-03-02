import {
	EditProps, TextInput, Edit, SimpleForm, 
	DateInput, NumberInput, BooleanInput, 
	SimpleFormIterator, ArrayInput,
	CheckboxGroupInput, 
} from "react-admin";

export function UserEdit(props: EditProps){
	return(
		<Edit {...props} undoable={true} mutationMode="pessimistic">
			<SimpleForm>
				<TextInput source="name" />
				<TextInput source="email" />
				<DateInput source="BirthDate" />
				<DateInput source="createdAt" />
				<TextInput source="updatedAt" />
				<NumberInput source="document" />
				<BooleanInput source="metadatas.validDocument" />
				<NumberInput source="address.streetNumber" />
				<NumberInput source="salaryBase" />
				<TextInput source="id" />
                
				<ArrayInput source="enabledFeatures">
					<SimpleFormIterator>
						<CheckboxGroupInput source="enabledFeatures" choices={[
							{id: "0", name: "card"},
							{id: "1", name: "sla"}
						]} />
					</SimpleFormIterator>
				</ArrayInput>
			</SimpleForm>
		</Edit>
	);
}
