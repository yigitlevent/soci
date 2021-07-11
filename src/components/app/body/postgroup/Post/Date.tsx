import styled from "styled-components";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const DateWrapper = styled.div`
	float: left;
	font-size: 1.1em;
	font-family: "BarlowSC-Regular";
`;

export function Date({ isPublished, date }: soci.props.Date): JSX.Element {

	return (
		<DateWrapper title={(isPublished) ? "Published at" : "Updated at"}>
			{dayjs(date, "YYYY-MM-DD HH:mm:ss").format("DD MMMM YYYY - H:mm")}
		</DateWrapper>
	);
}
