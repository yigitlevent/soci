namespace soci {

	namespace context {

		interface Main {
			currentTheme: soci.theme.Palette;
			currentClient: string;
			currentMenu: string;
			currentSubmenu: string;
			currentPosts: soci.data.Posts;
			setCurrentTheme: DSSAction<soci.theme.Palette>;
			setCurrentClient: DSSAction<string>;
			setCurrentClient: DSSAction<string>;
			setCurrentMenu: DSSAction<string>;
			setCurrentSubmenu: DSSAction<string>;
			setCurrentPosts: DSSAction<soci.data.Posts>;
		}

	}

}
