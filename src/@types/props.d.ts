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

	}

}