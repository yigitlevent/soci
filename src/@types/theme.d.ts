namespace soci {

	namespace theme {

		interface StyleProps extends ThemedStyledProps {
			theme: Palette;
		}

		interface Palette {
			app: {
				background: string;
				color: string;
				hintColor: string;
				linkColor: string;
			};
			logo: {
				background: string;
				color: string;
			};
			client: {
				background: string;
				notificationBackground: string;
				notificationColor: string;
			};
			menu: {
				background: string;
				selectedBackground: string;
				color: string;
				selectedColor: string;
				notification: string;
				submenuBackground: string;
			};
			post: {
				background: string;
				colorFaded: string;
				border: string;
				borderImage: string;
			};
			statusColors: {
				needApproval: string;
				scheduled: string;
				publishing: string;
				published: string;
				error: string;
			};
		}

	}

}
