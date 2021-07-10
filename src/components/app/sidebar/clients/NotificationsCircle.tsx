import styled from "styled-components";

const NotificationWrapper = styled.div`
	height: 0px;
	width: 0px;

	position: relative;
	left: 30px;
	top: -6px;

	z-index: 1;
`;

const Circle = styled.div`
	height: 15px;
	width: 15px;
	padding: 1px;

	color: ${(props: soci.theme.StyleProps) => props.theme.client.notificationColor};
	background: ${(props: soci.theme.StyleProps) => props.theme.client.notificationBackground};

	font-size: 0.8em;
	font-family: "BarlowSC-Regular";
	text-align: center;

	border-radius: 100%;
`;

export function NotificationsCircle({ amount }: { amount: number; }): JSX.Element {
	return (
		<NotificationWrapper>
			<Circle>{amount}</Circle>
		</NotificationWrapper>
	);
}
