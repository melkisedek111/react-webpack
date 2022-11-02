import React, { Component } from "react";
import {
	Avatar,
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

import { products } from "../../data";

class GroceryModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products,
			overAllPrice: 0,
		};
	}

	render() {
		return (
			<div>
				<Dialog
					open={this.props.open}
					onClose={this.props.handleCloseGroceryModal}
					scroll={"body"}
					aria-labelledby="transition-modal-groceries"
					aria-describedby="transition-modal-to-show-groceries-details"
					fullWidth
					maxWidth={"lg"}
				>
					<DialogTitle id="scroll-dialog-title" variant="h5">
						Grocery Lists
					</DialogTitle>
					<DialogContent dividers style={{ margin: "0" }}>
						<div>
							{this?.props?.selectedGrocery?.length ? (
								this.props.selectedGrocery.map((item) => {
									const { productId, quantity, totalPrice } = item;
									const {
										otherProductDetails: {
											title,
											price,
											category,
											image,
											rating: { rate, count },
										},
									} = this.state.products[productId];
									return (
										<div
											key={productId}
											style={{
												display: "grid",
												gridTemplateColumns: "1fr 3fr 2fr 1fr 1fr 1fr",
												alignItems: "center",
												gap: "10px",
												backgroundColor: "#EAEAEA",
												padding: "10px 15px",
												borderRadius: "10px",
												marginBottom: "10px",
											}}
										>
											<Avatar src={image} style={{ width: 100, height: 100 }} />
											<div>
												<Typography variant="h5">
													{title.toUpperCase()}
												</Typography>
												<Typography variant="caption">Product Name</Typography>
											</div>
											<div>
												<Typography variant="h6">
													{category.toUpperCase()}
												</Typography>
												<Typography variant="caption">Category</Typography>
											</div>
											<div>
												<Typography variant="h6">
													${price % 1 !== 0 ? price : `${price}.00`}
												</Typography>
												<Typography variant="caption">Price</Typography>
											</div>
											<div>
												<Typography variant="h6">{quantity}</Typography>
												<Typography variant="caption">Quantity</Typography>
											</div>
											<div>
												<Typography variant="h6">{totalPrice}</Typography>
												<Typography variant="caption">Total Price</Typography>
											</div>
										</div>
									);
								})
							) : (
								<Typography variant="h3">No Items Found</Typography>
							)}
						</div>
						<div style={{ textAlign: "right" }}>
							<div>
								<Typography variant="h4">
									{this.props.selectedGrocery.reduce(
										(acc, cur) => (acc += cur.totalPrice),
										0
									)}
								</Typography>
								<Typography variant="subtitle2">Total Price</Typography>
							</div>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default GroceryModal;
