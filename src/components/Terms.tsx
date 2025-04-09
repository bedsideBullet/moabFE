// import React from "react";
// import { Container, Box, Typography } from "@mui/material";

// const Terms: React.FC = () => {
// 	return (
// 		<>
// 			<Container
// 				component="header"
// 				maxWidth={false}
// 				sx={{
// 					position: "fixed",
// 					top: 0,
// 					width: "100%",
// 					bgcolor: "black",
// 					zIndex: 1100,
// 					height: { xs: 75, sm: 100 },
// 					left: 0,
// 					display: "flex",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Box
// 					component="img"
// 					src="images/PSC_logo.png"
// 					alt="PSC Logo"
// 					sx={{
// 						height: 75,
// 						pt: 0.5,
// 						pb: 0.5,
// 					}}
// 				/>
// 			</Container>

// 			<Box
// 				sx={{
// 					position: "fixed",
// 					top: 0,
// 					left: 0,
// 					width: "100vw",
// 					height: "100vh",
// 					backgroundImage: "url('images/BGImg.png')",
// 					backgroundSize: "cover",
// 					backgroundPosition: "center",
// 					backgroundRepeat: "no-repeat",
// 					zIndex: -1,
// 				}}
// 			/>
// 			<Box
// 				sx={{
// 					display: "flex",
// 					alignItems: "center",
// 					justifyContent: "center",
// 					width: "100vw",
// 					minHeight: "100vh",
// 					overflow: "auto",
// 					pt: { xs: "75px", sm: "100px" }, // Matches header height to push content below it
// 					pb: "20px",
// 					boxSizing: "border-box",
// 				}}
// 				className={"registration-form-container"}
// 			>
// 				<Container
// 					component="main"
// 					maxWidth="sm"
// 					className="registration-form"
// 					sx={{
// 						position: "relative",
// 						display: "flex",
// 						flexDirection: "column",
// 						alignItems: "center",
// 						bgcolor: "rgba(255, 255, 255, 0.9)",
// 						p: "20px",
// 						borderRadius: 2,
// 						boxShadow: 3,
// 						zIndex: 1,
// 						mt: 2, // Small top margin for breathing room
// 						mb: { xs: 2, sm: 0 },
// 						maxHeight: "80vh", // Limits height to allow scrolling
// 						overflowY: "auto", // Enables scrolling within the container
// 					}}
// 				>
// 					<Typography variant="h4" gutterBottom align="center">
// 						Terms and Conditions
// 					</Typography>

// 					<Box sx={{ mt: 2, mb: 2 }}>
// 						<Typography variant="body1" paragraph>
// 							<strong>
// 								This Contest is open to all legal residents of the United States
// 								who are 18 years of age or older at the time of entry.
// 							</strong>
// 						</Typography>

// 						<Typography variant="body2" paragraph>
// 							The following individuals are <strong>not eligible</strong> to
// 							enter or win:
// 						</Typography>

// 						<Typography variant="body2" component="ul" sx={{ pl: 4 }}>
// 							<li>
// 								Employees or team leads of PSC Motorsports or their Immediate
// 								family members (defined as spouse, parents, children, siblings,
// 								and those living in the same household).
// 							</li>
// 							<li>
// 								Affiliates, subsidiaries, advertising and promotion agencies and
// 								suppliers of PSC Motorsports.
// 							</li>
// 						</Typography>
// 					</Box>

// 					<Box sx={{ mt: 2, mb: 2 }}>
// 						<Typography variant="h6" gutterBottom>
// 							How to Enter
// 						</Typography>
// 						<Typography variant="body2" component="ol" sx={{ pl: 4 }}>
// 							<li>
// 								Locate a PSC Motorsports vehicle during the contest period.
// 							</li>
// 							<li>
// 								Find and scan the official QR code displayed on the vehicle.
// 							</li>
// 							<li>
// 								Complete the registration form that appears after scanning the
// 								QR code.
// 							</li>
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							<strong>Limit:</strong> One (1) entry per person. Duplicate or
// 							incomplete entries will be disqualified.
// 						</Typography>
// 					</Box>

// 					<Box sx={{ mt: 2, mb: 2 }}>
// 						<Typography variant="h6" gutterBottom>
// 							Contest Period
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							<strong>Opening Date:</strong> Saturday, April 12, 2025 <br />
// 							<strong>Closing Date:</strong> Thursday, April 17, 2025, at 11:59
// 							PM CST
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							Entries submitted after the deadline will not be considered.
// 						</Typography>
// 					</Box>

// 					<Box sx={{ mt: 2, mb: 2 }}>
// 						<Typography variant="h6" gutterBottom>
// 							Winner Selection and Announcement
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							One (1) winner will be selected at random from all eligible
// 							entries. The drawing will be conducted on Friday, April 18, 2025,
// 							and the winner will be announced via PSC Motorsports' official
// 							channels (e.g., social media, email or website).
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							The selected winner must respond within [14] days of notification
// 							to claim the prize. Failure to do so may result in
// 							disqualification and selection of an alternate winner.
// 						</Typography>
// 					</Box>

// 					<Box sx={{ mt: 2, mb: 2 }}>
// 						<Typography variant="h6" gutterBottom>
// 							Prize Conditions
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							The prize is non-transferable, non-refundable and may not be
// 							exchanged or sold for cash or other items.
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							<strong>IMPORTANT:</strong> Prizes are strictly for the winner’s
// 							use and cannot be resold or transferred. Any attempt to resell or
// 							transfer the prize will result in immediate disqualification and
// 							forfeiture.
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							PSC Motorsports reserves the right to substitute the prize with
// 							another of equal or greater value if necessary.
// 						</Typography>
// 					</Box>

// 					<Box sx={{ mt: 2, mb: 2 }}>
// 						<Typography variant="h6" gutterBottom>
// 							General Conditions
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							PSC Motorsports reserves the right to cancel, suspend or modify
// 							the contest at any time due to unforeseen circumstances, including
// 							but not limited to fraud, technical issues or events beyond its
// 							control.
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							Any attempt to tamper with or undermine the legitimate operation
// 							of the contest may result in disqualification.
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							By accepting the prize, the winner agrees to allow PSC Motorsports
// 							to use their name, likeness, and/or prize-related content for
// 							promotional purposes without further compensation, unless
// 							prohibited by law.
// 						</Typography>
// 					</Box>

// 					<Box sx={{ mt: 2, mb: 2 }}>
// 						<Typography variant="h6" gutterBottom>
// 							Release of Liability
// 						</Typography>
// 						<Typography variant="body2" paragraph>
// 							By entering the contest, participants agree to release and hold
// 							harmless PSC Motorsports, its affiliates, officers, employees and
// 							agents from any and all claims, damages or liabilities arising
// 							from participation in the contest or acceptance/use of the prize.
// 						</Typography>
// 					</Box>
// 				</Container>
// 			</Box>
// 		</>
// 	);
// };

// export default Terms;

import React from "react";
import { Container, Box, Typography, GlobalStyles } from "@mui/material";

const RegistrationForm = () => {
	return (
		<>
			<GlobalStyles
				styles={{
					html: {
						overflow: "hidden",
						margin: 0,
						padding: 0,
						height: "100%",
					},
					body: {
						overflow: "hidden",
						margin: 0,
						padding: 0,
						height: "100%",
					},
				}}
			/>

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
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					backgroundImage: "url('images/BGImg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					zIndex: 0,
				}}
			/>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100vw",
					minHeight: "100vh",
					pt: { xs: "75px", sm: "100px" },
					pb: "20px",
					boxSizing: "border-box",
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
						p: "20px",
						borderRadius: 2,
						boxShadow: 3,
						zIndex: 1,
						mt: 2,
						mb: { xs: 2, sm: 0 },
						maxHeight: "80vh",
						overflowY: "auto",
					}}
				>
					<Typography variant="h4" gutterBottom align="center">
						Terms and Conditions
					</Typography>

					<Box sx={{ mt: 2, mb: 2 }}>
						<Typography variant="body1" paragraph>
							<strong>
								This Contest is open to all legal residents of the United States
								who are 18 years of age or older at the time of entry.
							</strong>
						</Typography>

						<Typography variant="body2" paragraph>
							The following individuals are <strong>not eligible</strong> to
							enter or win:
						</Typography>

						<Typography variant="body2" component="ul" sx={{ pl: 4 }}>
							<li>
								Employees or team leads of PSC Motorsports or their Immediate
								family members (defined as spouse, parents, children, siblings,
								and those living in the same household).
							</li>
							<li>
								Affiliates, subsidiaries, advertising and promotion agencies and
								suppliers of PSC Motorsports.
							</li>
						</Typography>
					</Box>

					<Box sx={{ mt: 2, mb: 2 }}>
						<Typography variant="h6" gutterBottom>
							How to Enter
						</Typography>
						<Typography variant="body2" component="ol" sx={{ pl: 4 }}>
							<li>
								Locate a PSC Motorsports vehicle during the contest period.
							</li>
							<li>
								Find and scan the official QR code displayed on the vehicle.
							</li>
							<li>
								Complete the registration form that appears after scanning the
								QR code.
							</li>
						</Typography>
						<Typography variant="body2" paragraph>
							<strong>Limit:</strong> One (1) entry per person. Duplicate or
							incomplete entries will be disqualified.
						</Typography>
					</Box>

					<Box sx={{ mt: 2, mb: 2 }}>
						<Typography variant="h6" gutterBottom>
							Contest Period
						</Typography>
						<Typography variant="body2" paragraph>
							<strong>Opening Date:</strong> Saturday, April 12, 2025 <br />
							<strong>Closing Date:</strong> Thursday, April 17, 2025, at 11:59
							PM CST
						</Typography>
						<Typography variant="body2" paragraph>
							Entries submitted after the deadline will not be considered.
						</Typography>
					</Box>

					<Box sx={{ mt: 2, mb: 2 }}>
						<Typography variant="h6" gutterBottom>
							Winner Selection and Announcement
						</Typography>
						<Typography variant="body2" paragraph>
							One (1) winner will be selected at random from all eligible
							entries. The drawing will be conducted on Friday, April 18, 2025,
							and the winner will be announced via PSC Motorsports' official
							channels (e.g., social media, email or website).
						</Typography>
						<Typography variant="body2" paragraph>
							The selected winner must respond within [14] days of notification
							to claim the prize. Failure to do so may result in
							disqualification and selection of an alternate winner.
						</Typography>
					</Box>

					<Box sx={{ mt: 2, mb: 2 }}>
						<Typography variant="h6" gutterBottom>
							Prize Conditions
						</Typography>
						<Typography variant="body2" paragraph>
							The prize is non-transferable, non-refundable and may not be
							exchanged or sold for cash or other items.
						</Typography>
						<Typography variant="body2" paragraph>
							<strong>IMPORTANT:</strong> Prizes are strictly for the winner’s
							use and cannot be resold or transferred. Any attempt to resell or
							transfer the prize will result in immediate disqualification and
							forfeiture.
						</Typography>
						<Typography variant="body2" paragraph>
							PSC Motorsports reserves the right to substitute the prize with
							another of equal or greater value if necessary.
						</Typography>
					</Box>

					<Box sx={{ mt: 2, mb: 2 }}>
						<Typography variant="h6" gutterBottom>
							General Conditions
						</Typography>
						<Typography variant="body2" paragraph>
							PSC Motorsports reserves the right to cancel, suspend or modify
							the contest at any time due to unforeseen circumstances, including
							but not limited to fraud, technical issues or events beyond its
							control.
						</Typography>
						<Typography variant="body2" paragraph>
							Any attempt to tamper with or undermine the legitimate operation
							of the contest may result in disqualification.
						</Typography>
						<Typography variant="body2" paragraph>
							By accepting the prize, the winner agrees to allow PSC Motorsports
							to use their name, likeness, and/or prize-related content for
							promotional purposes without further compensation, unless
							prohibited by law.
						</Typography>
					</Box>

					<Box sx={{ mt: 2, mb: 2 }}>
						<Typography variant="h6" gutterBottom>
							Release of Liability
						</Typography>
						<Typography variant="body2" paragraph>
							By entering the contest, participants agree to release and hold
							harmless PSC Motorsports, its affiliates, officers, employees and
							agents from any and all claims, damages or liabilities arising
							from participation in the contest or acceptance/use of the prize.
						</Typography>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default RegistrationForm;
