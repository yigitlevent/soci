import styled from "styled-components";

const SidebarWrapper = styled.div<{ status: number; }>`
	width: 100%;
	height: 100%;

	background: ${p => {
		const colors = p.theme.statusColors;
		if (p.status === 0) return colors.needApproval;
		else if (p.status === 1) return colors.scheduled;
		else if (p.status === 2) return colors.publishing;
		else if (p.status === 3) return colors.published;
		else if (p.status === 4) return colors.error;
	}};

	border: ${(props: soci.theme.StyleProps) => props.theme.post.border};
	border-right: none;
	border-radius: 6px 0 0 6px;
`;

const Icon = styled.img`
	width: 30px;
	height: 100%;
	margin: auto;
	display: block;
`;

export function Sidebar({ status, channel }: soci.props.Sidebar): JSX.Element {
	return (
		<SidebarWrapper status={status}>
			<Icon src={`./assets/icons/channel_${channel}.svg`} />
		</SidebarWrapper>
	);
}
