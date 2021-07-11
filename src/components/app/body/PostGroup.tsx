import { useContext } from "react";
import styled from "styled-components";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { MainContext } from "../../App";

import { Post } from "./postgroup/Post";

dayjs.extend(customParseFormat);

const PostGroupWrapper = styled.div`
	height: max-content;
	margin: 21px 0px 0px 30px;
`;

const PostGroupTitle = styled.div`
	font-size: 1.6em;
	font-family: "BarlowSC-Regular";
`;

const PostsWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: start;
`;

export function PostGroup({ groupKey }: soci.props.PostGroup): JSX.Element {
	const { currentPosts } = useContext(MainContext);

	console.log(groupKey);

	return (
		<PostGroupWrapper>
			<PostGroupTitle>{dayjs(groupKey, "YYYY-MM-DD").format("DD MMMM YYYY")}</PostGroupTitle>

			<PostsWrapper>
				{(currentPosts.posts_by_date)
					? currentPosts.posts_by_date[groupKey].map((post, index) => {
						return <Post key={index} post={post} />;
					})
					: null
				}
			</PostsWrapper>
		</PostGroupWrapper>
	);
}
