import React, { Component } from "react";
import { Table, Rate, Icon } from "antd";

const columns = [
	{
		title: "Numero",
		dataIndex: "numero",
		key: "numero",
	},
	{
		title: "Valutazione",
		dataIndex: "valutazione",
		key: "valutazione",
	},
	{
		title: "Cantina",
		dataIndex: "cantina",
		key: "cantina",
	},
	{
		title: "Etichetta",
		dataIndex: "etichetta",
		key: "etichetta",
	},
	{
		title: "Annata",
		dataIndex: "annata",
		key: "annata",
	},
	{
		title: "Denominazione",
		dataIndex: "denominazione",
		key: "denominazione",
	},
	{
		title: "Vitigno",
		dataIndex: "vitigno",
		key: "vitigno",
	},
	{
		title: "Tipologia",
		dataIndex: "tipologia",
		key: "tipologia",
	},
	{
		title: "Stato",
		dataIndex: "stato",
		key: "stato",
	},
	{
		title: "Anno Consigliato",
		dataIndex: "annoConsigliato",
		key: "annoConsigliato",
	},
	{
		title: "Valore",
		dataIndex: "valore",
		key: "valore",
	},
	{
		title: "Regione",
		dataIndex: "regione",
		key: "regione",
	},
];

const wines = [
	{
		key: "1",
		numero: 1,
		valutazione: 7,
		cantina: "abc",
		etichetta: "abc",
		annata: 2018,
		denominazione: "abc",
		vitigno: "abc",
		tipologia: "abc",
		stato: "abc",
		annoConsigliato: "abc",
		valore: "abc",
		regione: "abc",
	},
];

class WinesTable extends Component {
	render() {
		return <Table columns={columns} dataSource={wines} />;
	}
}

export default WinesTable;
