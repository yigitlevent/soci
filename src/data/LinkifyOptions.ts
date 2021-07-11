import { LinkEntityType, Options } from "linkifyjs";

export const LinkifyOptions: Options = {
	attributes: null,
	className: "linkified",
	defaultProtocol: "http",
	format: (value: string) => { return value; },
	formatHref: (href: string) => { return href; },
	nl2br: false,
	tagName: "a",
	target: {
		url: "_blank"
	},
	validate: true
};
