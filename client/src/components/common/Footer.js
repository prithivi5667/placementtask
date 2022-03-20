const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> {" "}
			<a href={link} target={target}>
				
			</a>
		</div>
	);
};

export default Footer;
