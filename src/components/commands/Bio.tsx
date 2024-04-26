import { GoVerified } from "react-icons/go";
import { SiGithub, SiInstagram , SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/iam-vishaldubey",
			text: "@iam-vishaldubey",
		},
		{
			title: "Linkedin",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/iamvishaldubey/",
			text: "@iamvishaldubey",
		},
		{
			title: "Instagram",
			Icon: SiInstagram ,
			href: "https://www.instagram.com/LIPSTICKERASERVISHAL/",
			text: "@Lipstickeraservishal",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/38474539?v=4"
					alt="Chensokheng"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Vishal Dubey</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Hi i'm 21 years old.</p>
				</div>
			</div>
			<p>
				INSAAAAAF MAN....
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
