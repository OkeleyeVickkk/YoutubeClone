import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import {
	AvatarWrapper,
	AvaterContainer,
	BellIconWrapper,
	Dropdown,
	Em,
	IconLogo,
	MicroPhone,
	Nav,
	Pill,
	RightIcons,
	SearchButton,
	SearchInput,
	SearchWrapper,
	VideoIconWrapper,
	YoutubeLogo,
} from "../assets/css/HeaderNavbarStyles";
import youtubeSvg from "../assets/images/youtube-image.jpg";
import AvatarImage from "../assets/images/vickkk.jpg";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { subnavbar } from "./Objects";

const linkstyle = {
	display: "flex",
	alignItems: "center",
	position: "relative",
	textDecoration: "none",
};

function Navbar() {
	return (
		<div>
			<Nav>
				<div>
					<IconLogo>
						<Link to="/" style={linkstyle}>
							<YoutubeLogo src={youtubeSvg} />
							<small>
								<sup>NG</sup>
							</small>
						</Link>
					</IconLogo>
					<SearchWrapper>
						<div className="innerSearchWrapper" style={{ position: "relative" }}>
							<div style={linkstyle}>
								<SearchInput type="search" placeholder="Search" />
								<SearchButton>
									<Icon icon="ion:search-outline" />
									<Dropdown>
										<small>Search </small>
									</Dropdown>
								</SearchButton>
							</div>
							<Em>
								<Icon icon="ion:search-outline" />
							</Em>
						</div>
						<div>
							<MicroPhone>
								<Icon icon="heroicons:microphone" />
								<Dropdown>
									<small>Search with your voice</small>
								</Dropdown>
							</MicroPhone>
						</div>
					</SearchWrapper>
					<RightIcons>
						<VideoIconWrapper>
							<Icon icon="carbon:video-add" />
							<Dropdown>
								<small>Create</small>
							</Dropdown>
						</VideoIconWrapper>
						<BellIconWrapper>
							<Icon icon="uiw:bell" />
							<Dropdown>
								<small>Notification</small>
							</Dropdown>
						</BellIconWrapper>
						<AvaterContainer>
							<AvatarWrapper src={AvatarImage} />
						</AvaterContainer>
					</RightIcons>
				</div>
			</Nav>
		</div>
	);
}

export default Navbar;
