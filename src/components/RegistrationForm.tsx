import React, { useEffect, useState } from "react";
import {
	Container,
	Box,
	Typography,
	Grid,
	TextField,
	Button,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Alert,
	CircularProgress,
} from "@mui/material";
import StateSelect from "./StateSelect.tsx";
import PhoneInput from "./PhoneInput";
import YearSelect from "./YearSelect";
import MakeSelect from "./MakeSelect";
import axios from "axios";

const RegistrationForm: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		vehicleModel: "",
		otherNotes: "",
		city: "",
		state: "",
		phone: "",
		year: "",
		make: "",
	});
	const [emailError, setEmailError] = useState<string>("");
	const [formError, setFormError] = useState<boolean>(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [isAgreed, setIsAgreed] = useState(false);

	useEffect(() => {
		if (successMessage || errorMessage) {
			const timer = setTimeout(() => {
				setSuccessMessage("");
				setErrorMessage("");
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [successMessage, errorMessage]);

	const CHARACTER_LIMIT = 250;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		if (
			formError &&
			formData.firstName &&
			formData.lastName &&
			formData.email &&
			!emailError
		) {
			setFormError(false);
		}
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFormData((prevData) => ({
			...prevData,
			email: value,
		}));
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		setEmailError(!emailRegex.test(value) ? "Invalid email address" : "");
		if (formError && formData.firstName && formData.lastName && !emailError) {
			setFormError(false);
		}
	};

	const handleSelectChange = (name: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsAgreed(e.target.checked);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSuccessMessage("");
		setErrorMessage("");
		setLoading(true);

		const { firstName, lastName, email } = formData;
		if (!firstName || !lastName || !email || emailError || !isAgreed) {
			setFormError(true);
			setLoading(false);
			return;
		}

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_BASE_URL}/api/registration`,
				formData
			);
			setSuccessMessage("Registration successful: " + response.data.message);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				vehicleModel: "",
				otherNotes: "",
				city: "",
				state: "",
				phone: "",
				year: "",
				make: "",
			});
			setFormError(false);
			setIsAgreed(false);
		} catch (error) {
			const message = axios.isAxiosError(error)
				? error.response?.data.message || "Unknown error"
				: "An unexpected error occurred";
			setErrorMessage("Registration failed: " + message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Container
				component="header"
				maxWidth={false}
				sx={{
					position: "fixed",
					top: 0,
					width: "100%",
					bgcolor: "black",
					zIndex: 1100,
					height: { xs: 75, sm: 100 },
					left: 0,
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					component="img"
					src="images/PSC_logo.png"
					alt="PSC Logo"
					sx={{
						height: 75,
						pt: 0.5,
						pb: 0.5,
					}}
				/>
			</Container>

			<Box
				sx={{
					position: "fixed",
					display: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					backgroundImage: "url('images/BGImg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					zIndex: -1,
				}}
			/>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100vw",
					minHeight: "1000px",
					overflow: { xs: "auto", sm: "none" },
					paddingTop: { xs: "115px", sm: "0px" },
					paddingBottom: "0px",
					boxSizing: "border-box",
					mt: { xs: 10, sm: 0 },
				}}
				className={"registration-form-container"}
			>
				<Container
					component="main"
					maxWidth="sm"
					className="registration-form"
					sx={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						bgcolor: "rgba(255, 255, 255, 0.9)",
						padding: "20px",
						borderRadius: 2,
						boxShadow: 3,
						zIndex: 1,
						mt: { xs: 2, sm: 10 },
						mb: { xs: 2, sm: 0 },
					}}
				>
					<Typography component="h1" variant="h3" fontWeight={700}>
						You Found us!
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						sx={{
							textAlign: "center",
							width: "100%",
							lineHeight: 1.2,
						}}
					>
						Congrats on finding us! Register now for a chance to win a
						high-performance steering system for your tow rig or trail rig, with
						a retail value of up to $4,500. Registration closes at 11:59 PM
						Mountain Time on April 17th, and the drawing will be held at 10:00
						AM Mountain Time on April 18th. Good luck!
					</Typography>
					{successMessage && <Alert severity="success">{successMessage}</Alert>}
					{errorMessage && <Alert severity="error">{errorMessage}</Alert>}
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									value={formData.firstName}
									onChange={handleChange}
									error={formError && !formData.firstName}
									helperText={
										formError && !formData.firstName
											? "First name is required"
											: ""
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									value={formData.lastName}
									onChange={handleChange}
									error={formError && !formData.lastName}
									helperText={
										formError && !formData.lastName
											? "Last name is required"
											: ""
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="city"
									label="City"
									name="city"
									value={formData.city}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<StateSelect
									value={formData.state}
									onChange={(value: string) =>
										handleSelectChange("state", value)
									}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={formData.email}
									onChange={handleEmailChange}
									error={!!emailError}
									helperText={emailError}
								/>
							</Grid>
							<Grid item xs={12} sm={8}>
								<PhoneInput
									value={formData.phone}
									onChange={(value: string) =>
										handleSelectChange("phone", value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<YearSelect
									value={formData.year}
									onChange={(value: string) =>
										handleSelectChange("year", value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<MakeSelect
									value={formData.make}
									onChange={(value: string) =>
										handleSelectChange("make", value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="vehicleModel"
									label="Vehicle Model"
									name="vehicleModel"
									value={formData.vehicleModel}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="VehicleNotes"
									label="Vehicle Notes (motor swap etc...)"
									name="otherNotes"
									multiline
									rows={2}
									value={formData.otherNotes}
									onChange={handleChange}
									inputProps={{ maxLength: CHARACTER_LIMIT }}
									helperText={`${formData.otherNotes.length}/${CHARACTER_LIMIT}`}
								/>
							</Grid>
						</Grid>
						<FormGroup sx={{ pt: 1 }}>
							<FormControlLabel
								control={
									<Checkbox
										color="primary"
										required
										checked={isAgreed}
										onChange={handleCheckboxChange}
									/>
								}
								label={
									<span style={{ fontSize: "0.8rem" }}>
										By checking this box, you confirm that you are 18 years of
										age or older and agree to receive communications from PSC
										Motorsports. You understand that consent is not a condition
										of purchase and that you may opt out at any time. You also
										acknowledge that you have read and agree to the Official{" "}
										{""}
										<a href="/terms" target="_blank" rel="noopener noreferrer">
											Terms & Conditions
										</a>
										.
									</span>
								}
								sx={{
									typography: "body2",
								}}
							/>
						</FormGroup>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="error"
							sx={{ mt: 1, mb: 2 }}
							disabled={loading || !isAgreed}
						>
							{loading && (
								<CircularProgress size={20} sx={{ color: "white", mr: 1 }} />
							)}{" "}
							Register
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default RegistrationForm;
