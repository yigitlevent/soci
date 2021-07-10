namespace soci {

	namespace theme {

		interface StyleProps extends ThemedStyledProps {
			theme: Palette;
			regularFont?: string;
		}

		interface Palette {
			app: {
				background: string;
				color: string;
			}
		}

	}

}
