import React, { useEffect, useMemo, useState, useCallback} from 'react';
import { useSelector } from "react-redux";
import MaterialReactTable from 'material-react-table';
import { Delete, Edit, Add } from '@mui/icons-material';
import { AddNewIssue } from '../AddIssues/AddIssues';

import {
	Box,
	IconButton,
	Tooltip,
} from '@mui/material';


export default function IssuesList() {
	const data = useSelector((state) => state.ram.issues);
	const [tableData, setTableData] = useState(data);
	const [createModalOpen, setCreateModalOpen] = useState(false);

	useEffect(() => {
		setTableData(data);
	}, [data]);


	console.log(tableData, "data");


	const columns = useMemo(
		() => [
			{
				accessorKey: "id",
				header: "Id",
				size: 40,
				maxSize: 50,
			},
			{
				accessorKey: "title",
				header: "Title",
				size: 200,
				minSize: 150,
			},
			{
				accessorKey: "state",
				header: "State",
				size: 40,
				maxSize: 50,
			},
			{
				accessorKey: "url",
				header: "Url",
				size: 140,
				minSize: 120,
			},
			{
				accessorKey: "created_at",
				header: "Created at",
				size: 60,
				maxSize: 70,
			},
			{
				accessorKey: "updated_at",
				header: "Updated at",
				size: 60,
				maxSize: 70,
			},
		],
		[]
	);

	const handleCreateNewRow = (values) => {
		tableData.push(values);
		setTableData([...tableData]);
	};

	const handleSaveRow = ({ exitEditingMode, row, values }) => {
		tableData[row.index] = values;
		setTableData([...tableData]);
		exitEditingMode();
	};

	const handleDeleteRow = useCallback(
		(row) => {
			if (
				!confirm(
					`Are you sure you want to delete ${row.getValue(
						"firstName"
					)}`
				)
			) {
				return;
			}
			//send api delete request here, then refetch or update local table data for re-render
			tableData.splice(row.index, 1);
			setTableData([...tableData]);
		},
		[tableData]
	);

	return (
		<>
			<MaterialReactTable
				columns={columns}
				data={tableData}
				enableEditing
				editingMode="modal"
				onEditingRowSave={handleSaveRow}
				enableGlobalFilterModes
				globalFilterFn="contains"
				enableTopToolbar={true}
				enableToolbarInternalActions={false}
				positionActionsColumn="last"
				layoutMode="semantic"
				displayColumnDefOptions={{ "mrt-row-actions": { size: 40 } }}
				renderRowActions={({ row, table }) => (
					<Box sx={{ display: "flex", gap: "1rem" }}>
						<Tooltip arrow placement="left" title="Edit">
							<IconButton
								onClick={() => table.setEditingRow(row)}
								color="error"
							>
								<Edit />
							</IconButton>
						</Tooltip>
						<Tooltip arrow placement="right" title="Delete">
							<IconButton
								color="error"
								onClick={() => handleDeleteRow(row)}
							>
								<Delete />
							</IconButton>
						</Tooltip>
					</Box>
				)}
				renderTopToolbarCustomActions={() => (
					<IconButton
						color='primary'
						onClick={() => setCreateModalOpen(true)}

					>
						<Add />
					</IconButton>
				)}
				muiTableBodyRowProps={{ hover: false, sx: { height: "40px" } }}
				enableColumnActions={false}
				// muiTableBodyCellProps={{ sx: { p: "5px 20px" } }}
				// layoutMode='grid'

				muiTablePaginationProps={{
					rowsPerPageOptions: [5, 10, 25, 100],
					showFirstButton: false,
					showLastButton: false,
					labelRowsPerPage: "Items per page",
				}}
				initialState={{
					showGlobalFilter: true,

					pagination: {
						pageSize: 10,
						pageIndex: 0,
					},
					// density: 'comfortable',
				}}
				muiTablePaperProps={{
					elevation: 10,
				}}
				muiTableProps={{
					sx: {
						tableLayout: "fixed",
					},
				}}
				positionGlobalFilter="left"
				muiSearchTextFieldProps={{
					placeholder: `Filter Issues`,
					sx: { minWidth: "1800px" },
					// variant: "outlined",
				}}
			/>
			<AddNewIssue
				columns={columns}
				open={createModalOpen}
				onClose={() => setCreateModalOpen(false)}
				onSubmit={handleCreateNewRow}
			/>
		</>
	);
}



		// <Paper  elevation={10} sx={{ overflow: "hidden"}}>
		// 	<TableContainer >
		// 		<Table >
		// 			<TableHead>
		// 				<TableRow sx={{height:50}}>
		// 					<TableCell align="left">Id</TableCell>
		// 					<TableCell align="left">Title</TableCell>
		// 					<TableCell align="left">State</TableCell>
		// 					<TableCell align="left">Url</TableCell>
		// 					<TableCell align="left">Created at</TableCell>
		// 					<TableCell align="left">Updated at</TableCell>
		// 					<TableCell align="left"><AddIcon sx={{ color: "#3f51b5" }}/></TableCell>
		// 					<TableCell align="left"></TableCell>
		// 				</TableRow>
		// 			</TableHead>
		// 			<TableBody>
		// 				{ data?.length > 0 && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
		// 						<TableRow key={row.id} sx={{height:0}}>
		// 							<TableCell component="th" scope="row" sx={{fontSize:"14px"}}> {row.id}</TableCell>
		// 							<TableCell align="left" sx={{fontSize:"14px", padding:"0px"}}>{row.title}</TableCell>
		// 							<TableCell align="left" sx={{fontSize:"14px", padding:"0px"}}>{row.state}</TableCell>
		// 							<TableCell align="left" sx={{fontSize:"14px", padding:"0px"}}>{row.url}</TableCell>
		// 							<TableCell align="left" sx={{fontSize:"14px", padding:"0px"}}>{row.created_at}</TableCell>
		// 							<TableCell align="left" sx={{fontSize:"14px", padding:"0px"}}>{row.updated_at}</TableCell>
		// 							<TableCell align="left" sx={{fontSize:"14px", padding:"0px"}}><CreateIcon sx={{ color: "#e91e63" }}/></TableCell>
		// 							<TableCell align="left" sx={{fontSize:"14px", padding:"0px"}}><DeleteIcon sx={{ color: "#e91e63" }}/></TableCell>
		// 						</TableRow>
		// 					))}
		// 			</TableBody>
		// 		</Table>
		// 	</TableContainer>

		// 	<TablePagination
		// 		rowsPerPageOptions={[5, 10, 25, 100]}
		// 		component="div"
		// 		count={data.length}
		// 		rowsPerPage={rowsPerPage}
		// 		page={page}
		// 		onPageChange={handleChangePage}
		// 		onRowsPerPageChange={handleChangeRowsPerPage}
		// 		labelRowsPerPage='Items per page:'
		// 	/>
		// </Paper>




