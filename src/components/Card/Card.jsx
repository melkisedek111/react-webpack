import React from "react";
import Avatar from "@mui/material/Avatar";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";

const Card = ({
	employeeDetails,
	handleOpenEmployeeModal,
	handleOpenGroceryModal,
}) => {
	const { userId, firstName, lastName, email, address } = employeeDetails;
	return (
		<div>
			<div
				className="card"
				style={{
					minWidth: "600px",
					padding: "30px 20px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
				}}
			>
				<Avatar
					alt="Remy Sharp"
					src={`https://robohash.org/${userId}`}
					sx={{ width: 100, height: 100 }}
				/>
				<div
					className="profile-detail"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "left",
					}}
				>
					<Typography
						variant="h4"
						style={{ margin: 0, fontSize: "25px", marginBottom: "15px" }}
					>
						{firstName} {lastName}
					</Typography>
					<div
						className="sub-details"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div style={{ display: "flex", alignItems: "center" }}>
							<ShareLocationIcon />
							<Typography variant="caption" style={{ marginLeft: "10px" }}>
								{address}
							</Typography>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginLeft: "10px",
							}}
						>
							<AttachEmailIcon />
							<Typography variant="caption" style={{ marginLeft: "10px" }}>
								{email}
							</Typography>
						</div>
					</div>
				</div>
				<div
					className="button-container"
					style={{ display: "flex", flexDirection: "column" }}
				>
					<Button
						size="small"
						variant="contained"
						startIcon={<AccountBoxIcon sx={{ margin: 0 }} />}
						onClick={() => handleOpenEmployeeModal(employeeDetails)}
						style={{ marginBottom: "5px" }}
					>
						View Profile
					</Button>
					<Button
						size="small"
						variant="contained"
						color="warning"
						startIcon={<ShoppingCartIcon sx={{ margin: 0 }} />}
						onClick={() => handleOpenGroceryModal(employeeDetails.products)}
					>
						Groceries
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
