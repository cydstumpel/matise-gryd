module.exports = {
	title: "Gryd",
	themeConfig: {
		navbar: true,
		sidebar: [
			{
				title: "Get started",
				collapsable: false,
				children: [
					"get-started/install",
					"get-started/defaults"
				]
			},
			{
				title: "Grid",
				collapsable: false,
				children: [
					"grid/grid"
				]
			},
			{
				title: "Colors",
				collapsable: false,
				children: [
					"colors/colors"
				]
			},
			{
				title: "Typography",
				collapsable: false,
				children: [
					"typography/typography"
				]
			},
			{
				title: "Mixins",
				collapsable: false,
				children: [
					"mixins/mixins"
				]
			}
		],
		configureWebpack: {
			resolve: {
				alias: {
					'@img': 'img'
				}
			}
		},
		nav: [{ text: "Matise", link: "https://www.matise.nl/" }]
	}
};
