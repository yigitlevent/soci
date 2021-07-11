namespace soci {

	namespace props {

		interface Circle {
			amount: number;
		}

		interface Menu {
			notifications: number;
		}

		interface Submenu {
			isMenuOpen: boolean;
			submenus: any[];
		}

		interface PostGroup {
			groupKey: string;
		}

		interface Post {
			post: soci.data.Post;
		}

		interface Actions {
			status: soci.data.PostStatuses;
		}

		interface Date {
			isPublished: boolean;
			date: string;
		}

		interface Image {
			link: string;
		}

		interface Message {
			message: string;
		}

		interface Sidebar {
			status: soci.data.PostStatuses;
			channel: string;
		}

		interface Statistics {
			channel: string;
		}

	}

}