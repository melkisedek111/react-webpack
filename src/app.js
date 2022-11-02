import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Card from "./components/Card/Card.jsx";
import EmployeeModal from "./components/EmployeeModal/EmployeeModal.jsx";
import GroceryModal from "./components/GroceryModal/GroceryModal.jsx";

import { employees } from "./data";
import "./app.css";

const theme = createTheme({
	typography: {
		fontFamily: ["Open Sans"].join(","),
	},
});
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees,
			openEmployeeModal: false,
            openGroceryModal: false,
			selectedEmployee: {},
            selectedGrocery: []
		};
	}

    /**
    * DOCUMENT: This function is used to fetch specific employee data as well as opening the employee modal. <br>
    * Triggered: When clicking the view profile button <br>
    * Last Updated Date: November 2, 2022
    * @function
    * @memberOf App
    * @param {}  - {}.
    * @author Mel
    */
	handleOpenEmployeeModal = (employee) => {
		this.setState({ selectedEmployee: employee, openEmployeeModal: true });
	};

    /**
    * DOCUMENT: This function is used to handle closing the employee modal. <br>
    * Triggered: When clicking outside the modal <br>
    * Last Updated Date: November 2, 2022
    * @function
    * @memberOf App
    * @param {}  - {}.
    * @author Mel
    */
	handleCloseEmployeeModal = () => {
		this.setState({ openEmployeeModal: false });
	};

    /**
    * DOCUMENT: This function is used to fetch specific employee's grocery data as well as opening the grocery modal. <br>
    * Triggered: When clicking the groceries button <br>
    * Last Updated Date: November 2, 2022
    * @function
    * @memberOf App
    * @param {}  - {}.
    * @author Mel
    */
	handleOpenGroceryModal = (grocery) => {
		this.setState({ selectedGrocery: grocery, openGroceryModal: true });
	};

    /**
    * DOCUMENT: This function is used to handle closing the grocery modal. <br>
    * Triggered: When clicking outside the modal <br>
    * Last Updated Date: November 2, 2022
    * @function
    * @memberOf App
    * @param {}  - {}.
    * @author Mel
    */
	handleCloseGroceryModal = () => {
		this.setState({ openGroceryModal: false });
	};

	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className="app">
					<div className="card-container">
						{this.state.employees.map((employee) => (
							<Card
								key={employee.userId}
								employeeDetails={employee}
								handleOpenEmployeeModal={this.handleOpenEmployeeModal}
                                handleOpenGroceryModal={this.handleOpenGroceryModal}
							/>
						))}
					</div>
					<EmployeeModal
						employee={this.state.selectedEmployee}
						open={this.state.openEmployeeModal}
						handleCloseEmployeeModal={this.handleCloseEmployeeModal}
					/>
                    <GroceryModal selectedGrocery={this.state.selectedGrocery} handleCloseGroceryModal={this.handleCloseGroceryModal} open={this.state.openGroceryModal} />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
