import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Avatar, Card, CardContent, Fade, Typography } from "@mui/material";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const emojis = ["😀", "😃", "😄", "😆", "🤣", "🤑", "🤬", "🤡"];

const EmployeeModal = ({ employee, open, handleCloseEmployeeModal }) => {
	const {
		address,
		age,
		contactNumber,
		dob,
		email,
		firstName,
		userId,
		imageUrl,
		lastName,
		salary,
	} = employee;

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-profile"
				aria-describedby="transition-modal-to-show-profile-details"
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
				open={open}
				onClose={handleCloseEmployeeModal}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Card sx={{ minWidth: 500, padding: "20px" }}>
							<CardContent
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Avatar
									alt={firstName}
									src={`https://robohash.org/${userId}`}
									sx={{ width: 150, height: 150 }}
								/>
								<div>
									<Typography variant="h4">
										{firstName} {lastName}{" "}
										{emojis[Math.floor(Math.random() * emojis.length)]}
									</Typography>
									<Typography variant="subtitle2">📧 {email}</Typography>
									<div
										style={{
											display: "grid",
											gridTemplateColumns: "1fr 1fr 1fr",
											gap: "10px",
											marginTop: "15px",
										}}
									>
										<div>
											<Typography variant="subtitle2">{age}</Typography>
											<Typography variant="caption" color="text.secondary">
												Age
											</Typography>
										</div>
										<div>
											<Typography variant="subtitle2">{address}</Typography>
											<Typography variant="caption" color="text.secondary">
												Address
											</Typography>
										</div>
										<div>
											<Typography variant="subtitle2">{dob}</Typography>
											<Typography variant="caption" color="text.secondary">
												Date of Birth
											</Typography>
										</div>
										<div>
											<Typography variant="subtitle2">
												{contactNumber}
											</Typography>
											<Typography variant="caption" color="text.secondary">
												Contact Number
											</Typography>
										</div>
										<div>
											<Typography variant="subtitle2">${salary}</Typography>
											<Typography variant="caption" color="text.secondary">
												Salary
											</Typography>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default EmployeeModal;
