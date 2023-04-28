import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchActionData } from "../../action/action";
import IssuesList from "../../components/IssuesList/issuesList";
import NavBar from "../../components/NavBar/NavBar";


export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('https://api.github.com/repos/angular/angular/issues').then((data) => {
				return data.json();
			})
			.then((dataWithJSON) => {
				console.log("Data", dataWithJSON);
				dispatch(fetchActionData(dataWithJSON));
				
			});
	}, [dispatch]);

	return (
		<div>
			<NavBar />
			<IssuesList />
		</div>
	);
}
