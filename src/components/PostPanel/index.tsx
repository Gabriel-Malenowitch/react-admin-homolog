import { 
	SingleFieldList, Record, ReferenceManyField, 
	TextField, FunctionField,
} from "react-admin";
import { LineChart, Line, Tooltip } from "recharts";
import { LineChartDataGenerator } from "../../dataGenerators/chart";
import "./styler.css";

interface InjectedFieldProps<RecordType extends Record = Record> {
    basePath?: string;
    record?: RecordType;
    resource?: string;
}

export const PostPanel = (props: InjectedFieldProps) => {
	const data = LineChartDataGenerator(24);
	return (
		<ReferenceManyField target="user_id" reference="cards" perPage={24}>
			<SingleFieldList>
				<FunctionField source="id" render={()=>(
					<div className="card">
						<div className="dataContainer">
							<span className="field">
								<strong>Nome: </strong>
								<TextField source="metadatas.name" />
							</span>
							<span className="field">
								<strong>Digitos: </strong>
								<TextField source="metadatas.digits" />
							</span>
							<span className="field">
								<strong>Limite: </strong>
								<TextField source="metadatas.limit"/>
							</span>

							<strong className="field">Extrato do cartão:</strong>
						</div>
						<LineChart
							width={260}
							height={50}
							data={data}
						>
							<Tooltip />
							<Line type="monotone" dot={false} dataKey="uv" stroke="#222" />
						</LineChart>
					</div>
				)}/>
			</SingleFieldList>
		</ReferenceManyField>
	);
};