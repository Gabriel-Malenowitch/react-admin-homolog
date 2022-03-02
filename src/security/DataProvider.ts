import jsonServerProvider from "ra-data-json-server";
import { domain } from "../routes";
import { useResourceContext, useResourceDefinition, UseResourceDefinitionOptions, useCreateContext } from "react-admin";

const dp = jsonServerProvider(domain);

export const DataProvider = {
	...dp,

};


// TESTES

// getList:    (resource, params) => Promise,
// getOne:     (resource, params) => Promise,
// getMany:    (resource, params) => Promise,
// getManyReference: (resource, params) => Promise,
// create:     (resource, params) => Promise,
// update:     (resource, params) => Promise,
// updateMany: (resource, params) => Promise,
// delete:     (resource, params) => Promise,
// deleteMany: (resource, params) => Promise,

// useResource
// fetchUtils
// useQuery

















// dp.update("users", {id: 0, data: {"name": "COEEEE"}, previousData: {id: 2}});
// dp.updateMany("users", {
// 	ids: [0, 1, 2],
// 	data: {"name": "COEEEE"}	
// });

// const userBase = {data: {"name":"as","email":"lucas_da_silva@gmail.com","BirthDate":"2012-01-11T16:07:11.759Z","createdAt":"2013-11-05T18:14:40.597Z","updatedAt":null,"enabledFeatures":[2,1],"document":37341425376,"metadatas":{"validDocument":true,"verified":true},"address":{"streetNumber":801,"city":"Uberaba","state":"AL","neighborhood":"Vila Montes Claros","postalCode":"53825-433"},"salaryBase":791584,"id":0}};
// const ggg = {"name":"Tiago Rodrigues","email":"tiago_rodrigues@gmail.com","BirthDate":"2021-04-21T02:47:38.286Z","createdAt":"2013-08-13T06:23:37.405Z","updatedAt":"2020-12-01T11:53:45.178Z","enabledFeatures":[2],"document":45992857813,"metadatas":{"validDocument":true,"verified":false},"address":{"streetNumber":878,"city":"Novo Hamburgo","state":"RJ","neighborhood":"Saramandaia","postalCode":"83066-296"},"salaryBase":700207,"id":1};

// dp.getOne("users", {id: 1}).then((e: any)=>{	
// 	dp.update("users",{
// 		id: 1,
// 		data: userBase.data,
// 		previousData: {id: 1}
// 	}).then(s=>console.log(s));
// }

// dp.getMany("users", { ids: [0, 1, 5, 8, 3] }).then(e=>console.log(e));

// dp.getManyReference("cards", {
// 	target: "user_id",
// 	id: 1,
// 	sort: { field: "id", order: "DESC" },
// 	pagination: { page: 1, perPage: 50 },
// 	filter: {}
// }).then(e=>console.log(e));

// dp.getManyReference("users", {
// 	target: "name",
// 	id: "Lucas da Silva",
// 	sort: { field: "id", order: "DESC" },
// 	pagination: { page: 1, perPage: 9999999 },
// 	filter: {},
// }).then(e=>console.log(e.data));

//const userBase = {data: {"name":"Lucas da Silva","email":"lucas_da_silva@gmail.com","BirthDate":"2012-01-11T16:07:11.759Z","createdAt":"2013-11-05T18:14:40.597Z","updatedAt":null,"enabledFeatures":[2,1],"document":37341425376,"metadatas":{"validDocument":true,"verified":true},"address":{"streetNumber":801,"city":"Uberaba","state":"AL","neighborhood":"Vila Montes Claros","postalCode":"53825-433"},"salaryBase":791584,"id":0}};
// for(let i = 0; i < 999; i++){
// 	dp.create("users", userBase);
// }

// dp.getList("users", {
// 	pagination: {
// 		page: 1,
// 		perPage: 5
// 	},
// 	sort: {
// 		field: "id",
// 		order: "DESC",
// 	},
// 	filter: {},
// }).then(e=>console.log(e));
// dp.getOne("users", {id: 0}).then(e=>console.log(e));