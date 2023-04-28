import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import { indigo } from '@mui/material/colors';

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
                position='sticky'
                sx={{ backgroundColor: indigo[500] }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Diego P. - Final Project React-Redux
					</Typography>

                    <Typography
                        variant="h6"
                    >
                        Reload data: &nbsp;
                    </Typography>

                    <IconButton
                        size='medium'
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >   
                        <RefreshIcon onClick={() => window.location.reload(false)}/>
                    </IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}