import styled from "styled-components";

const StaticsWrapper = styled.div`
	width: 100%;
	height: max-content;
`;

const IconWrapper = styled.span`
	display: inline-block;
	font-size: 1.2em;
	font-family: "BarlowSC-Regular";
	margin-right: 20px;
`;

const StatisticsIcon = styled.img`
	width: 18px;
	height: 18px;
	margin-right: 5px;
	cursor: pointer;
	filter: opacity(0.5);
	vertical-align: bottom;
`;

export function Statistics({ channel }: { channel: string; }): JSX.Element {

	return (
		<StaticsWrapper>
			{(channel === "facebook" || channel === "instagrambusiness")
				? <IconWrapper>
					<StatisticsIcon src="./assets/icons/statistic_thumbsup.svg" title="Likes" />
					0
				</IconWrapper>
				: null
			}

			{(channel === "twitter")
				? <IconWrapper>
					<StatisticsIcon src="./assets/icons/statistic_heart.svg" title="Likes" />
					0
				</IconWrapper>
				: null
			}

			{(channel === "twitter")
				? <IconWrapper>
					<StatisticsIcon src="./assets/icons/statistic_retweet.svg" title="Retweets" />
					0
				</IconWrapper>
				: null
			}

			<IconWrapper>
				<StatisticsIcon src="./assets/icons/statistic_comment.svg" title="Comments" />
				0
			</IconWrapper>

			{(channel === "facebook" || channel === "instagrambusiness")
				? <IconWrapper>
					<StatisticsIcon src="./assets/icons/statistic_share.svg" title="Shares" />
					0
				</IconWrapper>
				: null
			}

			<IconWrapper>
				<StatisticsIcon src="./assets/icons/statistic_view.svg" title="Views" />
				0
			</IconWrapper>
		</StaticsWrapper>
	);
}
