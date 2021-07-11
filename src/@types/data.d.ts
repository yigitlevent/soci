namespace soci {

	namespace data {

		interface Posts {
			posts_by_date?: {
				[key: string]: Post[];
			};
		}

		interface Post {
			published_at: string;
			updated_at: string;
			created_at: string;

			link: string;

			is_published: boolean;
			status: 0 | 1 | 2 | 3 | 4;

			entry: {
				type: string;
				message: string;
				image: string[];
				video: null | string;
			};

			account: {
				name: string;
				username: string;
				image: string;
				link: string;
				channel: "instagrambusiness" | "twitter" | "facebook";
			};
		}

	}

}