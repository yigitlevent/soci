import { Fragment, useCallback, useContext, useEffect } from "react";
import styled from "styled-components";

import { MainContext } from "../App";

import { Hints } from "./body/Hints";
import { PostGroup } from "./body/PostGroup";

const BodyWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 15px 15px 45px 15px;

	overflow: hidden scroll;
`;

export function Body(): JSX.Element {
	const { currentMenu, currentSubmenu, currentPosts, setCurrentPosts } = useContext(MainContext);

	const getPosts = useCallback((path: string): void => {
		fetch(path)
			.then(response => response.json())
			.then((data: soci.data.Posts) => setCurrentPosts(data))
			.catch((error) => console.error(error));
	}, [setCurrentPosts]);

	useEffect(() => {
		if (currentMenu === "Publish" && currentSubmenu === "Feed") getPosts("./data/data.json");
		else setCurrentPosts({});
	}, [currentMenu, currentSubmenu, getPosts, setCurrentPosts]);

	useEffect(() => {
		console.log(currentPosts);
	}, [currentPosts]);

	return (
		<BodyWrapper>

			{(currentPosts.posts_by_date)
				? <Fragment>
					<Hints />
					{Object.keys(currentPosts.posts_by_date).reverse().map((key, index) => <PostGroup key={index} groupKey={key} />)}
				</Fragment>
				: <div>[Not Implemented]</div>
			}

		</BodyWrapper>
	);
}
