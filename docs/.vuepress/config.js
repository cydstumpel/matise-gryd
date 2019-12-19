module.exports = {
	title: "Gryd",
	themeConfig: {
		navbar: true,
		sidebar: [
			{
				title: "Get started",
				collapsable: false,
				children: [
					"get-started/install"
				]
			},
			{
				title: "Grid",
				collapsable: false,
				children: [
					"grid/philosophy"
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
