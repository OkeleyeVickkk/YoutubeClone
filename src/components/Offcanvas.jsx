import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SideBarContext } from "../App";
import { IconLogo, MenuToggler, YoutubeLogo } from "../assets/css/HeaderNavbarStyles";

import {
	Em,
	LinkNameActive,
	LinkNameNotActive,
	OffCanvasBody,
	OffcanvasContainer,
	OffCanvasHeader,
	OffcanvasItem,
	OffCanvasItemsContainer,
	OffcanvasLink,
} from "../assets/css/OffcanvasStyles";
import YoutubeLogoImage from "../assets/images/youtube-image.jpg";

const offcanvasContainers = [
	{
		linkItem: [
			{
				pathname: "/",
				linkname: "Home",
				Icon: <Icon icon="ph:house" />,
				IconActive: <Icon icon="ph:house-fill" />,
			},
			{
				pathname: "/shorts",
				linkname: "Shorts",
				Icon: <Icon icon="clarity:video-gallery-line" />,
				IconActive: <Icon icon="clarity:video-gallery-solid" />,
			},
			{
				pathname: "/subscriptions",
				linkname: "Subscription",
				Icon: <Icon icon="teenyicons:money-stack-outline" />,
				IconActive: <Icon icon="teenyicons:money-stack-solid" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "/library",
				linkname: "Library",
				Icon: <Icon icon="material-symbols:video-library-outline" />,
				IconActive: <Icon icon="material-symbols:video-library" />,
			},
			{
				pathname: "/history",
				linkname: "History",
				Icon: <Icon icon="octicon:history-24" />,
				IconActive: <Icon icon="octicon:history-16" />,
			},
			{
				pathname: "/Watch later",
				linkname: "Watch later",
				Icon: <Icon icon="bi:clock" />,
				IconActive: <Icon icon="bi:clock-fill" />,
			},
			{
				pathname: "/liked-videos",
				linkname: "Liked Videos",
				Icon: <Icon icon="material-symbols:thumb-up-outline" />,
				IconActive: <Icon icon="material-symbols:thumb-up" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "/trending",
				linkname: "Trending",
				Icon: <Icon icon="simple-line-icons:fire" />,
				IconActive: <Icon icon="el:fire" hFlip={true} />,
			},
			{
				pathname: "/music",
				linkname: "Music",
				Icon: <Icon icon="ph:music-note-light" />,
				IconActive: <Icon icon="ph:music-note-fill" />,
			},
			{
				pathname: "/gaming",
				linkname: "Gaming",
				Icon: <Icon icon="ion:game-controller-outline" />,
				IconActive: <Icon icon="ion:game-controller" />,
			},
			{
				pathname: "/news",
				linkname: "News",
				Icon: <Icon icon="ph:newspaper-clipping" />,
				IconActive: <Icon icon="ph:newspaper-clipping-fill" />,
			},
			{
				pathname: "/sports",
				linkname: "Sports",
				Icon: <Icon icon="fluent:trophy-48-regular" />,
				IconActive: <Icon icon="fluent:trophy-48-filled" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "/setting",
				linkname: "Setting",
				// Icon: <Icon icon="ph:gear-six" />,
				// IconActive: <Icon icon="ph:gear-six-bold" />,
				Icon: <Icon icon="ph:gear" />,
				IconActive: <Icon icon="ph:gear-fill" />,
			},
			{
				pathname: "/report-history",
				linkname: "Report History",
				Icon: <Icon icon="heroicons:flag" />,
				IconActive: <Icon icon="heroicons:flag-solid" />,
			},
			{
				pathname: "/help",
				linkname: "Help",
				Icon: <Icon icon="material-symbols:help-outline-rounded" />,
				IconActive: <Icon icon="material-symbols:help-rounded" />,
			},
			{
				pathname: "/feedback",
				linkname: "Send feedback",
				Icon: <Icon icon="iconoir:message-alert" />,
				IconActive: <Icon icon="mdi:message-alert" />,
			},
		],
	},
];

const Offcanvas = () => {
	const { sideBarOpen, setSideBarWidth } = useContext(SideBarContext);

	return (
		<OffcanvasContainer style={sideBarOpen ? { width: "260px", left: "0" } : { width: "0", left: "-5rem" }}>
			<OffCanvasHeader>
				<MenuToggler
					onClick={(e) => {
						e.stopPropagation();
						return setSideBarWidth((p) => !p);
					}}>
					<Icon icon="bytesize:menu" />
				</MenuToggler>
				<IconLogo>
					<Link to="/" style={{ position: "relative" }}>
						<YoutubeLogo src={YoutubeLogoImage} />
						<sup>
							<small>NG</small>
						</sup>
					</Link>
				</IconLogo>
			</OffCanvasHeader>
			<OffCanvasBody>
				{offcanvasContainers.map((container, index) => {
					let { linkItem } = container;
					return (
						<OffCanvasItemsContainer key={index}>
							{linkItem.map((link) => {
								const { Icon, linkname, IconActive, pathname } = link;
								return (
									<OffcanvasItem key={linkname}>
										<OffcanvasLink
											to={pathname}
											onClick={() => {
												setSideBarWidth((p) => !p);
											}}>
											{({ isActive }) => (
												<>
													{isActive ? (
														<>
															<Em>{IconActive}</Em>
															<LinkNameActive>{linkname}</LinkNameActive>
														</>
													) : (
														<>
															<Em>{Icon}</Em>
															<LinkNameNotActive>{linkname}</LinkNameNotActive>
														</>
													)}
												</>
											)}
										</OffcanvasLink>
									</OffcanvasItem>
								);
							})}
						</OffCanvasItemsContainer>
					);
				})}
			</OffCanvasBody>
		</OffcanvasContainer>
	);
};

export default Offcanvas;
