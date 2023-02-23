import { Link } from "react-router-dom";
import styled from "styled-components";

export const YWrapperTitle = styled.div`
	text-align: start;
	margin: 2rem 0 0.5rem;
`;

export const YTitle = styled.h6`
	font-size: 0.95rem;
	color: ${({ theme }) => theme.properties[["text-clr"]]};
	font-weight: 600;
`;

export const YoutubersWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	gap: 2.5rem 2rem;
	padding: 2rem 0;
`;

export const YoutuberCont = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.2rem;
`;

export const YLink = styled(Link)`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const YImageCont = styled.div`
	overflow: hidden;
`;

export const YImage = styled.img`
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	width: 100px;
	max-width: 100%;
`;

export const YName = styled.span`
	color: ${({ theme }) => theme.properties["text-clr"]};
	font-weight: 900;
	margin: 5px 0 2px;
	font-size: 0.8rem;
`;

export const Subers = styled.span`
	font-size: 0.75rem;
	color: ${({ theme }) => theme.properties.darkGrey};
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.properties.ash};
	width: max-content;
	border-radius: 100vw;
	border: none;
	margin-inline: auto;
	padding: 0.6rem 1rem;
	cursor: pointer;
	font-size: 0.7rem;
	transition: ${({ theme }) => theme.properties.transition};

	&:hover {
		background-color: ${({ theme }) => theme.properties.darkAsh};
	}
`;
