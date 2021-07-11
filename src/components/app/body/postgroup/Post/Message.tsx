import Linkify from "linkifyjs/react";
import styled from "styled-components";

import { LinkifyOptions } from "../../../../../data/LinkifyOptions";

const MessageWrapper = styled(Linkify)`
	color: ${(props: soci.theme.StyleProps) => props.theme.post.color};
	font-family: "Raleway-Bold";
	line-height: 1.4em;
`;

export function Message({ message }: { message: string; }): JSX.Element {
	return (
		<MessageWrapper tagName="div" options={LinkifyOptions}>
			{message}
		</MessageWrapper>
	);
}
