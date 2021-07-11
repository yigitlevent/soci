import { createRef, useEffect } from "react";
import styled from "styled-components";

const ImageWrapper = styled.img`
	display: block;
	width: 100%;
	height: 240px;
	margin: 18px auto;

	border: ${(props: soci.theme.StyleProps) => props.theme.post.borderImage};
	border-radius: 2px;

	object-fit: cover;
`;

export function Image({ link }: { link: string; }): JSX.Element {
	const imageRef = createRef<HTMLImageElement>();

	useEffect(() => {
		if (imageRef && imageRef.current) {
			imageRef.current.onerror = () => {
				if (imageRef && imageRef.current) imageRef.current.src = "./assets/no-post-image.png";
			};
		}
	}, [link, imageRef]);

	return (
		<ImageWrapper ref={imageRef} src={link} />
	);
}
