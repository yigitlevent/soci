import { useContext } from "react";
import styled from "styled-components";

import { MainContext } from "../../App";

const HintWrapper = styled.div`
	height: 24px;
	margin: 21px 0px 0px 30px;
`;

const Hint = styled.div`
	display: inline-block;
`;

const Bullet = styled.div<{ color: string; }>`
	display: inline-block;
	font-size: 0.85em;
	padding: 0 7px 0 0;
	color: ${p => p.color};
`;

const Name = styled.div`
	display: inline-block;
	padding: 0 25px 0 0;
	color: ${(props: soci.theme.StyleProps) => props.theme.app.hintColor};
	vertical-align: middle;
`;

export function Hints(): JSX.Element {
	const { currentTheme } = useContext(MainContext);

	return (
		<HintWrapper>
			<Hint><Bullet color={currentTheme.statusColors.needApproval}>⬤</Bullet><Name>Need Approval</Name></Hint>
			<Hint><Bullet color={currentTheme.statusColors.scheduled}>⬤</Bullet><Name>Scheduled</Name></Hint>
			<Hint><Bullet color={currentTheme.statusColors.publishing}>⬤</Bullet><Name>Publishing</Name></Hint>
			<Hint><Bullet color={currentTheme.statusColors.published}>⬤</Bullet><Name>Published</Name></Hint>
			<Hint><Bullet color={currentTheme.statusColors.error}>⬤</Bullet><Name>Error</Name></Hint>
		</HintWrapper>
	);
}
