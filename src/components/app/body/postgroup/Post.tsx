import { useCallback } from "react";
import styled from "styled-components";

import { Sidebar } from "./Post/Sidebar";
import { Date } from "./Post/Date";
import { Actions } from "./Post/Actions";
import { Message } from "./Post/Message";
import { Image } from "./Post/Image";
import { Statistics } from "./Post/Statistics";

const OuterWrapper = styled.div`
	flex: 0 1 400px;
	margin: 14px 0;
`;

const PostWrapper = styled.div`
	width: 370px;
	height: 426px;

	display: grid;
	grid-template-columns: 40px 1fr;
	grid-template-rows: 1fr;
`;

const MainWrapper = styled.div`
	width: 100%;
	height: 100%;
	
	background: ${(props: soci.theme.StyleProps) => props.theme.post.background};
	border: ${(props: soci.theme.StyleProps) => props.theme.post.border};
	border-radius: 0 6px 6px 0;
	padding: 24px 20px 24px 20px;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: max-content auto 1fr max-content;
`;

const TopbarWrapper = styled.div`
	width: 100%;
	height: 40px;
`;

export function Post({ post }: { post: soci.data.Post; }): JSX.Element {

	const selectDate = useCallback((): string => {
		if (post.is_published) return post.published_at;
		else return post.updated_at;
	}, [post.is_published, post.published_at, post.updated_at]);

	return (
		<OuterWrapper>
			<PostWrapper>
				<Sidebar status={post.status} channel={post.account.channel} />

				<MainWrapper>
					<TopbarWrapper>
						<Date isPublished={post.is_published} date={selectDate()} />
						<Actions status={post.status} />
					</TopbarWrapper>

					<Message message={post.entry.message} />
					<Image link={post.entry.image[0]} />

					<Statistics channel={post.account.channel} />
				</MainWrapper>
			</PostWrapper>
		</OuterWrapper>
	);
}
